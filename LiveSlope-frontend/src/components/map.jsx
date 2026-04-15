import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';
import getNearSkiAreas from '../functions/getNearSkiAreas';
import MapContext from '../assets/map-context';
import SkiAreaCard from './ski-area-card';

export default function MapView() {
	/**
	 * Component displaying the map using Leaflet
	 */

	const mapRef = useRef(null);

	const { map, setMap } = useContext(MapContext);

	const [nearSkiAreas, setNearSkiAreas] = useState([]);
	const [sidePanelOpen, setSidePanelOpen] = useState(false);

	const handleMapMove = useCallback(() => {
		/**
		 * Adds markers for ski areas within the current map bounds to the map
		 */
		if (!map.current) return;
		map.current.eachLayer(layer => {
			if (layer instanceof L.Marker) {
				map.current.removeLayer(layer);
			}
		});
		setNearSkiAreas(getNearSkiAreas(map.current.getBounds()));
		
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setNearSkiAreas, map.current]);

	useEffect(() => {
		/**
		 * Renders markers for the ski areas in the current state
		 */
		if (!map.current) return;
		nearSkiAreas?.features?.forEach(feature => {
			const { name, difficulty } = feature.properties;
			const [lng, lat] = feature.geometry.coordinates;
			L.marker([lat, lng]).addTo(map.current)
				.bindPopup(`<b>${name}</b><br>Schwierigkeit: ${difficulty}<br><a href="https://www.google.com/maps/search/?api=1&query=Skigebiet+${name.split(' ').join('+')}" target="_blank">In Maps öffnen</a>`);
		});
	}, [nearSkiAreas, map]);


	useEffect(() => {
		if (!map.current) {
			setMap(L.map(mapRef.current).setView([48, 9], 6));
			map.current.locate({ setView: true, maxZoom: 12 });
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map.current);
			
			map.current.on('moveend', handleMapMove);
		}
	}, [handleMapMove, setMap, map]);

	return (
		<>
			<div className='map-container' ref={mapRef}></div>
			{sidePanelOpen ? 
				<div className='map-results'>
					{nearSkiAreas?.features?.length > 0 ?
						<ul>
							{nearSkiAreas.features.map((feature, index) => (
								<SkiAreaCard index={index} skiArea={feature}/>
							))}
						</ul>
					: (<p>Kein Skigebiet in der Nähe gefunden.</p>)}
					<button className='side-panel-close' onClick={() => setSidePanelOpen(false)}>Schließen</button>
				</div>
				: nearSkiAreas?.features?.length > 0 &&
				<button className='side-panel-open' onClick={() => setSidePanelOpen(true)}>
					Skigebiete
				</button>
			}
		</>
	);
}