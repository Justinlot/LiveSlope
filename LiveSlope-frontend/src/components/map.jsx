import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../styles/map.css'

function MapView() {
	/**
	 * Component displaying the map using Leaflet
	 */

	const mapRef = useRef(null);

	const map = useRef(null);

	useEffect(() => {
		if (!map.current) {
			map.current = L.map(mapRef.current).setView([51.505, -0.09], 13);
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map.current);
		}
	}, []);

	return (
		<div className='map-container' ref={mapRef}></div>
	)
}

export default MapView