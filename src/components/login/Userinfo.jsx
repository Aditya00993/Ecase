import React from 'react'


import img from '../login/im.png'

export default function Userinfo() {
  return (
    <div className='logintemplate'>
        <div className="nav">

            <h3>Account Settings</h3>
        </div>
        <div className="jai">
    <card>
        <div className="imgs">
            <img src={img} alt="" />
          
        </div>
        <div className="title">
            <p className='doe'>Marry Doe</p>
            <div>Marrydoe@Gmail.com</div>
        </div>
        <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium eveniet quo porro esse perferendis fuga fugiat laboriosam officia.
        </div>

    </card>
    </div>
    </div>
  )
}
