import { createContext } from "react";

/**
 * Shared map context used to expose the Leaflet map instance.
 */
const MapContext = createContext();

export default MapContext;