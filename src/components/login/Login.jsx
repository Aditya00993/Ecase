import React from 'react'
import './login.css'
import {useNavigate} from 'react-router-dom'
function Login() {
  const nav =  useNavigate();
  function handleclick() {
    nav('/Register')
  }

  function handleclick2() {
    nav('/signin')
  }
  
  return (
    <div className='logintemplate'>
      <h2>Welcome to PopX</h2>
      <span>Lorem ipsum dolor sit amet,<br/><p>consectetur adipisicing elit.</p></span>
      <button className='b1' onClick={handleclick}>Create Account</button>
      <button className='b2' onClick={handleclick2}>Already Registered?Login</button>
    </div>
  )
}
export default Login;