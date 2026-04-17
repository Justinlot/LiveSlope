import React, { useContext, useEffect, useState } from 'react';
import favoriteIcon from '../img/favorite.svg';
import logoutIcon from '../img/logout.svg';
import profileIcon from '../img/profile.svg';
import '../styles/headerAndFooter.css';
import AuthContext from '../assets/auth-context';
import Popup from './popup';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { changePasswordScheme } from '../zod-schemes/change-password-scheme';
import { createPortal } from 'react-dom';
import getFavoriteSkiAreas from '../functions/getFavoriteSkiAreas';
import SkiAreaCard from './ski-area-card';

/**
 * Renders the main header with greeting, navigation menu, and user actions.
 */
export default function Header() {

  const { username, logout, changePassword } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(changePasswordScheme)});

  const [menuOpen, setMenuOpen] = useState(false);

  const [popupOpen, setPopupOpen] = useState(false);

  const [profilePanelOpen, setProfilePanelOpen] = useState(false);
  const [favoritePanelOpen, setFavoritePanelOpen] = useState(false);

  const favoriteSkiAreas = getFavoriteSkiAreas();



  useEffect(() => {
    if (!menuOpen && !profilePanelOpen) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu')) {
        setMenuOpen(false);
      }
      if (!event.target.closest('.panel') && !event.target.closest('#profile-icon')) {
        setProfilePanelOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen, profilePanelOpen]);



  return (
    <div className='header'>
      <h2>Willkommen{username ? `, ${username}` : ''}!</h2>
      <div className="icons">{username ?

        <>
          <img
              src={favoriteIcon}
              alt="Favorite Icon"
              className="icon"
              onClick={() => setFavoritePanelOpen(!favoritePanelOpen)}
          />
          <img
              src={profileIcon}
              alt="Profile Icon"
              id='profile-icon'
              className="icon"
              onClick={() => setProfilePanelOpen(!profilePanelOpen)}
          />
          <img
              src={logoutIcon}
              alt="Logout Icon"
              className="icon"
              onClick={logout}
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
        {menuOpen && createPortal(
          <div className='menu-items'>
            <a href='/about' className='menu-item'>Über Uns</a>
            <a href='/imprint' className='menu-item'>Impressum</a>
            <a href='/privacy' className='menu-item'>Datenschutz</a>
          </div>, document.body
        )}
      </div>
      {profilePanelOpen && createPortal(
        <div className='panel'>
          <h3>Profil</h3>
          <p>Benutzername: {username}</p>
          <button onClick={() => setPopupOpen(true)}>Passwort ändern</button>
        </div>, document.body
      )}

      {favoritePanelOpen && createPortal(
        <div className='panel favorites'>
					{favoriteSkiAreas?.length > 0 ?
						<ul>
							{favoriteSkiAreas.map((feature, index) => (
								<SkiAreaCard skiArea={feature} index={index} key={index} />
							))}
						</ul>
					: (<p>Kein Skigebiet in der Nähe gefunden.</p>)}
					<button className='side-panel-close' onClick={() => setFavoritePanelOpen(false)}>Schließen</button>
				</div>, document.body
      )}
      {popupOpen &&
        <Popup onClose={() => setPopupOpen(false)}>
          <div className='popup-profile'>
            <h2>Passwort ändern</h2>
            <form onSubmit={handleSubmit((data) => {
              changePassword(data.oldPassword, data.password);
              setPopupOpen(false);
            })}>
              <label htmlFor="oldPassword">Altes Passwort:</label>
              <input type="password" id="oldPassword" {...register('oldPassword')} />
              <span className='form-errors'>{errors.oldPassword?.message}</span>
              <label htmlFor="newPassword">Neues Passwort:</label>
              <input type="password" id="newPassword" {...register('password')} />
              <span className='form-errors'>{errors.password?.message}</span>
              <label htmlFor="confirmPassword">Neues Passwort bestätigen:</label>
              <input type="password" id="confirmPassword" {...register('confirmPassword')} />
              <span className='form-errors'>{errors.confirmPassword?.message}</span>
              <button type="submit">Passwort ändern</button>
            </form>
          </div>
        </Popup>
      }
    </div>
  );
}