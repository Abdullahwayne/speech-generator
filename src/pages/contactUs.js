import React from 'react'
import contact from '../assets/contact.png'
import Header from '../components/header'
const ContactUs = () => {
  return (
    <div className='contact-us'>
      <Header/>
        <div className='contact-us-content'>
        <img src={contact} alt=""/>
        <h1>Contact Us</h1>
        <div className='contact-us-content-fields'>
            <input type="text" placeholder='Name'></input>
            <input type="text" placeholder='Email'></input>
            
        </div>
        <input type="text" placeholder='Contacting Concern'></input>

        <div  className='contact-us-content-lastfield'>
        <input type="text" placeholder='Contacting Concern'></input>

        </div>
        </div>
    </div>
  )
}

export default ContactUs