import React from 'react'
import Header from '../components/header'
import MapView from '../components/map'
import '../styles/home.css'
import Footer from '../components/footer'
import MoreSites from '../components/more-sites'
import MapProvider from '../components/map-provider'

function HomePage() {
  /**
   * main page of the application
   */
  return (
    <div className='home'>
      <MapProvider>
        <Header />
        <MapView />
        <MoreSites />
        <Footer />
      </MapProvider>
    </div>
  )
}

export default HomePage