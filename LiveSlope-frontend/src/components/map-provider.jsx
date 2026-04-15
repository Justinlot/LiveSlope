import { useRef } from "react";
import MapContext from "../assets/map-context";

/**
 * Provides the shared Leaflet map instance to descendant components.
 */
export default function MapProvider({ children }) {
    const map = useRef(null);

    function setMap(mapInstance) {
        map.current = mapInstance;
    }

    return (
        <MapContext.Provider value={{ map, setMap }}>
            {children}
        </MapContext.Provider>
    );
}