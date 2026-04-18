/**
 * Placeholder function to return ski areas within the given map bounds
 * This should be replaced with an actual API call to fetch ski areas based on the map bounds
 */
export default async function getNearSkiAreas(bounds) {

    const API_URL = "http://localhost:8000";


    let minLat = bounds.getSouthWest().lat;
    let maxLat = bounds.getNorthEast().lat;
    let minLng = bounds.getSouthWest().lng;
    let maxLng = bounds.getNorthEast().lng;

    // If the bounds are too large, return an empty list to avoid fetching too many ski areas
    if (maxLat - minLat > 1 || maxLng - minLng > 1) {
        return { type: "FeatureCollection", features: [] };
    }

    const nearSkiAreas = [];
    try {
        const response = await fetch(`${API_URL}/slopes?min_lat=${minLat.toFixed(3)}&max_lat=${maxLat.toFixed(3)}&min_lon=${minLng.toFixed(3)}&max_lon=${maxLng.toFixed(3)}`,{
            method: "GET",
            credentials: "include",
        });
        const data = await response.json();
        nearSkiAreas.push(...data?.features || []);
    } catch (error) {
        console.error("Error fetching ski areas:", error);
    }

    return { type: "FeatureCollection", features: nearSkiAreas };
}