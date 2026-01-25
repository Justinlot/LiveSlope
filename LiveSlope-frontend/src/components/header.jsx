import React, { useEffect, useState } from 'react'
import favoriteIcon from '../img/favorite.svg'
import logoutIcon from '../img/logout.svg'
import profileIcon from '../img/profile.svg'
import '../styles/headerAndFooter.css'

function Header() {
  /**
   * Component displaying the header with welcome message and icons
   */


  //placeholders
  const username = "Benutzer"
  const loggedIn = true

  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);



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
        <div className='menu'>
          <button className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>⋮</button>
          {menuOpen &&
            <div className='menu-items'>
              <a href='/about' className='menu-item'>Über Uns</a>
              <a href='/imprint' className='menu-item'>Impressum</a>
              <a href='/privacy' className='menu-item'>Datenschutz</a>
            </div>
          }
        </div>
    </div>
  )
}

export default Header