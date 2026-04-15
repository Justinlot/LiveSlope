import skiAreas from "../assets/ski-areas-placeholder";

/**
 * Returns the placeholder ski areas that are marked as favorites.
 */
export default function getFavoriteSkiAreas() {
    return skiAreas.features.filter(feature => feature.properties.favorite);
}