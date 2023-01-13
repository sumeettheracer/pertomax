import React from 'react'
import "./MailSection.scss"
import laptopcolor from "../images/laptopcolor.png"

const MailSection = () => {





  return (
    <div className='mailsection'>
      <div className="container3">
        <div className="colouredimage">
          <img src={laptopcolor} alt="colored-laptop" />
        </div>
        <div className="mail-detail">
          <h1 className="headermail">Drop us a Line!</h1>
          <div className='inside'>
            <input name="name" type="text" placeholder="Enter your name" />
            <input name='email' type="email" placeholder="Enter your email" />
            <textarea name='message' placeholder='Enter your message..'></textarea>
          </div>

          <button className='button'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default MailSection