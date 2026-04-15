import skiAreas from "../assets/ski-areas-placeholder";

export default function getFavoriteSkiAreas() {
    /**
     * Function to get favorite ski areas for the user
     * Currently returns a placeholder list of ski areas
     */
    return skiAreas.features.filter(feature => feature.properties.favorite);
}