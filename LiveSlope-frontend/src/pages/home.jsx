import React from 'react'
import Header from '../components/header'
import MapView from '../components/map'
import '../styles/home.css'
import Footer from '../components/footer'

function HomePage() {
  return (
    <div className='home'>
        <Header />
        <MapView />
        <Footer />
    </div>
  )
}

export default HomePage