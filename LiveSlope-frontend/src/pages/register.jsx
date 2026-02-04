import React from 'react'
import '../styles/login.css'
import { useForm } from 'react-hook-form'
import { registerScheme } from '../zod-schemes/register-scheme'
import { zodResolver } from '@hookform/resolvers/zod'

function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(registerScheme)})
  return (
    <div className='container'>
        <img src='/background.jpg' alt='background' className='background-image'/>
        <div className='login-form'>
            <h2>Registrieren</h2>
            <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
                <label htmlFor='username'>Benutzername:</label>
                <input type='text' id='username' name='username' {...register('username')} />
                <span className='error-text'>{errors.username && errors.username.message}</span>
                <label htmlFor='password'>Passwort:</label>
                <input type='password' id='password' name='password' {...register('password')} />
                <span className='error-text'>{errors.password && errors.password.message}</span>
                <label htmlFor='confirm-password'>Passwort bestätigen:</label>
                <input type='password' id='confirm-password' name='confirm-password' {...register('confirmPassword')} />
                <span className='error-text'>{errors.confirmPassword && errors.confirmPassword.message}</span>
                <button type='submit'>Registrieren</button>
            </form>
            <p>Hast du schon einen Account? <a href='/login'>Anmelden</a></p>
            <div className='sites-links'>
              <a href='/about'>Über Uns</a>
              <a href='/imprint'>Impressum</a>
              <a href='/privacy'>Datenschutz</a>
            </div>
        </div>
    </div>
  )
}

export default Register