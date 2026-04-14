import React, { useCallback, useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../styles/map.css'
import getNearSkiAreas from '../functions/getNearSkiAreas';

function MapView() {
	/**
	 * Component displaying the map using Leaflet
	 */

	const mapRef = useRef(null);

	const map = useRef(null);

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
		const nearSkiAreas = getNearSkiAreas(map.current.getBounds());
		nearSkiAreas.features.forEach(feature => {
			const { name, difficulty } = feature.properties;
			const [lng, lat] = feature.geometry.coordinates;
			L.marker([lat, lng]).addTo(map.current)
				.bindPopup(`<b>${name}</b><br>Schwierigkeit: ${difficulty}`);
		});
	}, []);


	useEffect(() => {
		if (!map.current) {
			map.current = L.map(mapRef.current).setView([48, 9], 6);
			map.current.locate({ setView: true, maxZoom: 16 });
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map.current);
			
			map.current.on('moveend', handleMapMove);
		}
	}, [handleMapMove]);

	return (
		<div className='map-container' ref={mapRef}></div>
	)
}

export default MapView