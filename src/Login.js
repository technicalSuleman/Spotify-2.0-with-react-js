import React from 'react'
import './Login.css'
import logo from './assets/logo.jpeg'
import { loginUrl } from './Spotify'

function Login() {
  return (
    <div className='login'>
        <img src={logo} alt='' />      
         {/* {spotify logo} */}
      {/* login with spotify button */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login