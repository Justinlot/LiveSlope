import { useContext, useState } from "react";
import MapContext from "../assets/map-context";
import '../styles/ski-area-card.css';
import favoriteIcon from '../img/favorite.svg';

export default function SkiAreaCard({ skiArea, index }) {
    /**
     * Component for displaying a ski area card with name and difficulty
     */

    const { map } = useContext(MapContext);

    const [favorite, setFavorite] = useState(skiArea.properties.favorite);

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
                }} />
            </div>
            <a href={`https://www.google.com/maps/search/?api=1&query=Skigebiet+${skiArea.properties.name.split(' ').join('+')}`} target="_blank" rel="noopener noreferrer">
                In Maps öffnen
            </a>
        </li>
    );
}