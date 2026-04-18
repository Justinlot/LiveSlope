/**
 * Returns the placeholder ski areas that are marked as favorites.
 */
export default async function getFavoriteSkiAreas() {

    const API_URL = "http://localhost:8000/";

    try {
        const response = await fetch(`${API_URL}favorites`, {
            method: "GET",
            credentials: "include",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching favorite ski areas:", error);
        return { type: "FeatureCollection", features: [] };
    }
}