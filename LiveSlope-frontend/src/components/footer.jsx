import React from 'react'
import favoriteIcon from '../img/favorite.svg'
import logoutIcon from '../img/logout.svg'
import profileIcon from '../img/profile.svg'
import '../styles/headerAndFooter.css'

function Footer() {

	/**
	 * Component displaying the footer with icons or login button (only shown on smaller screens)
	 */

	//placeholders
	const loggedIn = true
	return (
		<div className='footer'>
			{loggedIn ?
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
	)
}

export default Footer