import React from 'react'
import favoriteIcon from '../img/favorite.svg'
import logoutIcon from '../img/logout.svg'
import profileIcon from '../img/profile.svg'
import '../styles/headerAndFooter.css'

function Header() {
  //placeholders
  const username = "Benutzer"
  const loggedIn = false

  return (
    <div className='header'>
        <h2>Willkommen{loggedIn ? `, ${username}` : ''}!</h2>
        <div className="icons">{loggedIn ?
          <>
            <img
                src={favoriteIcon}
                alt="Favorite Icon"
                className="icon"
            />
            <img
                src={profileIcon}
                alt="Profile Icon"
                className="icon"
            />
            <img
                src={logoutIcon}
                alt="Logout Icon"
                className="icon"
            />
          </>
          :
          <>
            <a href='/login' className='button'>Anmelden</a>
          </>
          }
        </div>
    </div>
  )
}

export default Header