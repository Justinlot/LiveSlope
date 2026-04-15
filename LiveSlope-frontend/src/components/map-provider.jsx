import { useRef } from "react";
import MapContext from "../assets/map-context";

export default function MapProvider({ children }) {
    /**
     * Component for providing the map to child components
     */

    const map = useRef(null);

    function setMap(mapInstance) {
        /**
         * Function to set the map instance
         */
        map.current = mapInstance;
    }

    return (
        <MapContext.Provider value={{ map, setMap }}>
            {children}
        </MapContext.Provider>
    );
}