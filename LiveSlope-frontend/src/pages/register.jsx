import React from 'react'
import '../styles/login.css'

function Register() {
  return (
    <div className='container'>
        <img src='/background.jpg' alt='background' className='background-image'/>
        <div className='login-form'>
            <h2>Registrieren</h2>
            <form>
                <label htmlFor='username'>Benutzername:</label>
                <input type='text' id='username' name='username' required />
                <label htmlFor='password'>Passwort:</label>
                <input type='password' id='password' name='password' required />
                <label htmlFor='confirm-password'>Passwort bestätigen:</label>
                <input type='password' id='confirm-password' name='confirm-password' required />
                <button type='submit'>Registrieren</button>
            </form>
            <p>Hast du schon einen Account? <a href='/login'>Anmelden</a></p>
        </div>
    </div>
  )
}

export default Register