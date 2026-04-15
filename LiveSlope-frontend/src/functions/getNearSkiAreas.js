import skiAreas from "../assets/ski-areas-placeholder";

/**
 * Placeholder function to return ski areas within the given map bounds
 * This should be replaced with an actual API call to fetch ski areas based on the map bounds
 */
export default function getNearSkiAreas(bounds) {
    let nearSkiAreas = [];
    skiAreas.features.forEach(feature => {
        const [lng, lat] = feature.geometry.coordinates;
        if(bounds && bounds.contains([lat, lng])) {
            nearSkiAreas.push(feature);
        }
    });

    return { type: "FeatureCollection", features: nearSkiAreas };
}