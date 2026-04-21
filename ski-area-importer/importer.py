import requests
import time
from model import Slope
import datetime
from sqlalchemy.dialects.postgresql import insert
from database import get_db
from sqlalchemy import text

OVERPASS_URL = "https://overpass-api.de/api/interpreter"

def sleep_until(hour=3):
    now = datetime.datetime.now()
    target = now.replace(hour=hour, minute=0, second=0)

    if target < now:
        target += datetime.timedelta(days=1)

    time.sleep((target - now).total_seconds())

def generate_tiles(south, west, north, east, step=2.0):
    print(f"Generating tiles for area: S={south}, W={west}, N={north}, E={east} with step {step}")
    tiles = []
    lat = south
    while lat < north:
        lon = west
        while lon < east:
            tiles.append((
                lat,
                lon,
                lat + step,
                lon + step
            ))
            lon += step
        lat += step
    return tiles



def fetch_tile(s, w, n, e):
    print(f"Fetching tile: S={s}, W={w}, N={n}, E={e}")
    query = f"""[out:json][timeout:25];
        (
        nwr["landuse"="winter_sports"]({s},{w},{n},{e});
        nwr["landuse"="recreation_ground"]["sport"="skiing"]({s},{w},{n},{e});
        nwr["leisure"="sports_centre"]["sport"="skiing"]({s},{w},{n},{e});
        nwr["site"="piste"]({s},{w},{n},{e});
        nwr["piste:type"]({s},{w},{n},{e});
        );
        out tags center geom;
    """

    res = requests.post(OVERPASS_URL, data=query)

    if res.status_code != 200:
        print("HTTP Error:", res.status_code)
        return None

    if not res.text.strip():
        print("Empty response")
        return None

    try:
        return res.json()
    except Exception:
        print("Invalid JSON:")
        print(res.text[:300])
        return None


def get_ski_areas():
    all_data = []

    tiles = generate_tiles(45.5, 5.5, 55.2, 17.5, step=4.0)

    for tile in tiles:
        print("Fetching:", tile)
        
        try:
            data = fetch_tile(*tile)
            all_data.extend(data["elements"])
        except Exception as e:
            print("Error:", e)

        time.sleep(1)

    unique = {}

    for el in all_data:
        unique[f"{el['type']}/{el['id']}"] = el

    return list(unique.values())

def update_slopes():
    slopes = get_ski_areas()
    print(f"Fetched {len(slopes)} unique slopes")
    db = next(get_db())
    for slope in slopes:
        if slope["type"] != "way":
            continue

        geom = slope.get("geometry", [])
        center = slope.get("center", {})

        if geom:
            latitudes = [point["lat"] for point in geom]
            longitudes = [point["lon"] for point in geom]
            latitude = sum(latitudes) / len(latitudes)
            longitude = sum(longitudes) / len(longitudes)
        elif center:
            latitude = center.get("lat")
            longitude = center.get("lon")
        else:
            continue

        slope_name = slope.get("tags", {}).get("name", "Unbekanntes Skigebiet")
        stmt = insert(Slope).values(
            osm_id=slope["id"],
            name=slope_name,
            difficulty=slope.get("tags", {}).get("piste:difficulty", "unknown"),
            latitude=latitude,
            longitude=longitude,
        )
        stmt = stmt.on_conflict_do_nothing(index_elements=["osm_id"])
        result = db.execute(stmt)
        if result.rowcount:
            print(f"Added slope: {slope_name}")
    db.commit()
    

while True:
    print("Job started")
    update_slopes()
    sleep_until(hour=3)