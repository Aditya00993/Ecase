import React from 'react'
import {useNavigate} from 'react-router-dom'
 function Createacc() {
    const k = useNavigate()
    function clickme(){
        k('/Register')
    }
  return (
    <div className='logintemplate'>
    <div className='sii'>Create Your <br/>PopX Account</div>
    
 <form action='/'>


  <div className="adi">
    <label htmlFor="name" className='lbaa'>Fullname</label>
    <input type="name" className='inpu1' required/>
  </div>
  <div className="ddd">
    <label className='lbaa'htmlFor="Phone">Phone no</label>
    <input type="Phone"  className='inpu2' required  />
  </div>

  
  <div className="adi">
    <label htmlFor="emailk" className='lbaa'>Email Address</label>
    <input type="email" placeholder='Enter Your Email' className='inpu1' required/>
  </div>
  
  <div className="adi">
    <label htmlFor="Password" className='lbaa'>Password</label>
    <input type="Password"  className='inpu1' required/>
  </div>
  
  <div className="adi">
    <label htmlFor="email" className='lbaa'>Company name</label>
    <input type="name"  className='inpu1' required/>
  </div>

  <div className="check">
    <p>Are You in Agency</p>
  <input type='radio'>
  
  </input> 
  <label htmlFor="yes">yes</label>
 
  <input type='radio'>
  
  </input>
  <label htmlFor="no">no</label>
  </div>
  <button className='bss' onClick={clickme}>Create Account</button>

 
 </form>
  </div>
  )
}
export default Createacc;