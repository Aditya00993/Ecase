import React from 'react'
import './sigin.css'

import {useNavigate} from 'react-router-dom'
 

 function Signin()
 
 
 {
      
const a = useNavigate()
function btn(){
  a('/Userinfo')
}
  
  return (
  <div className='logintemplate'>
    <div className='sii'>  Signin to your<br/>PopX Account</div>
    <div className='lore'>Lorem ipsum dolor sit amet,<br/>consectetur adipisicing elit.</div>
 <form action='/'>


  <div className="adi">
    <label htmlFor="email" className='lbaa'>Email Adress</label>
    <input type="email" placeholder='Enter Your Email' className='inpu1' required/>
  </div>
  <div className="ddd">
    <label className='lbaa'htmlFor="Password">Password</label>
    <input type="email" placeholder='Enter Your Password' className='inpu2' required />
  </div>
  <Button className='bss' onClick={btn}>Login</Button>
 </form>
  </div>

  ) 
}
export default Signin;
