import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/login.css'
import AuthContext from '../assets/auth-context';

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { login } = useContext(AuthContext);

  return (
    <div className='container'>
        <img src='/background.jpg' alt='background' className='background-image'/>
        <div className='login-form'>
            <h2>Anmelden</h2>
            <form onSubmit={handleSubmit((data) => login(data.username, data.password))}>
                <label htmlFor='username'>Benutzername:</label>
                <input type='text' id='username' name='username' {...register('username', { required: "Benutzername ist erforderlich" })} />
                <span className='error-text'>{errors.username && errors.username.message}</span>
                <label htmlFor='password'>Passwort:</label>
                <input type='password' id='password' name='password' {...register('password', { required: "Passwort ist erforderlich" })} />
                <span className='error-text'>{errors.password && errors.password.message}</span>
                <button type='submit'>Anmelden</button>
            </form>
            <p>Noch keinen Account? <a href='/register'>Registrieren</a></p>
            <div className='sites-links'>
              <a href='/about'>Über Uns</a>
              <a href='/imprint'>Impressum</a>
              <a href='/privacy'>Datenschutz</a>
            </div>
        </div>
    </div>
  )
}

export default Login