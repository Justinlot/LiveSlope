import { useContext, useState } from "react";
import MapContext from "../assets/map-context";
import '../styles/ski-area-card.css';
import favoriteIcon from '../img/favorite.svg';

/**
 * Renders a ski area entry with navigation and favorite toggling.
 */
export default function SkiAreaCard({ skiArea, index }) {
    const { map } = useContext(MapContext);

    const [favorite, setFavorite] = useState(skiArea.properties.favorite);

    const API_URL = "http://localhost:8000/";

    const toggleFavorite = async (isFavorite) => {
        try {
            const response = await fetch(`${API_URL}favorites/${skiArea.properties.id}`, {
                method: isFavorite ? "POST" : "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (!response.ok) {
                alert("Fehler:", response.statusText);
                setFavorite(!isFavorite); // Revert state on failure
            }
        } catch (error) {
            console.error("Error toggling favorite:", error);
        }
    };

    return (
        <li className="ski-area-element" key={index}>
            <div className="ski-area-main">
                <div className='ski-area-text'onClick={() => {
                    const [lng, lat] = skiArea.geometry.coordinates;
                    map.current.setView([lat, lng], 14);
                }}>
                    <b>{skiArea.properties.name}</b>
                    <p>Schwierigkeit: {skiArea.properties.difficulty}</p>
                </div>
                <img src={favoriteIcon} alt="Favorit" className={"favorite-icon " + (favorite ? "selected" : "")} onClick={(e) => {
                    e.stopPropagation();
                    setFavorite(!favorite);
                    toggleFavorite(!favorite);
                }} />
            </div>
            <a href={`https://www.google.com/maps/search/?api=1&query=Skigebiet+${skiArea.properties.name.split(' ').join('+')}`} target="_blank" rel="noopener noreferrer">
                In Maps öffnen
            </a>
        </li>
    );
}