import React from 'react'
import '../styles/login.css'

function Login() {
  return (
    <div className='container'>
        <img src='/background.jpg' alt='background' className='background-image'/>
        <div className='login-form'>
            <h2>Anmelden</h2>
            <form>
                <label htmlFor='username'>Benutzername:</label>
                <input type='text' id='username' name='username' required />
                <label htmlFor='password'>Passwort:</label>
                <input type='password' id='password' name='password' required />
                <button type='submit'>Anmelden</button>
            </form>
            <p>Noch keinen Account? <a href='/register'>Registrieren</a></p>
        </div>
    </div>
  )
}

export default Login