import React from 'react'
import Header from '../components/header'
import MapView from '../components/map'
import '../styles/home.css'
import Footer from '../components/footer'
import MoreSites from '../components/more-sites'

function HomePage() {
  /**
   * main page of the application
   */
  return (
    <div className='home'>
        <Header />
        <MapView />
        <MoreSites />
        <Footer />
    </div>
  )
}

export default HomePage