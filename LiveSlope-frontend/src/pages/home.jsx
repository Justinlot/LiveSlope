import React from 'react'
import Header from '../components/header'
import MapView from '../components/map'
import '../styles/home.css'

function HomePage() {
  return (
    <div className='home'>
        <Header />
        <MapView />
    </div>
  )
}

export default HomePage