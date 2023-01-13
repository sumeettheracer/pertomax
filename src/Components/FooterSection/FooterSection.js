import React from 'react'
import "./FooterSection.scss"
import { BsLinkedin, BsFacebook, BsTwitter, BsInstagram, BsGoogle, BsFillTelephonePlusFill } from "react-icons/bs"
import { MdLocationOn, MdOutlineForwardToInbox } from "react-icons/md"

import { IconContext } from 'react-icons'

const FooterSection = () => {
  return (
    <div className='footersection'>
      <div className="footercontainer">
        <div className="first">
          <h4>
            Get In Touch
          </h4>
          <div className='first-inside'>
            <IconContext.Provider
              value={{ color: 'white', size: '20px' }}
            >
              <a className='first-anchor' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sumeet-biswas-575a74160/"><BsLinkedin /></a>
              <a className='anchor-inside' target="_blank" rel="noreferrer" href="https://www.facebook.com/"><BsFacebook /></a>
              <a className='anchor-inside' target="_blank" rel="noreferrer" href="https://twitter.com/"><BsTwitter /></a>
              <a className='anchor-inside' target="_blank" rel="noreferrer" href="https://www.instagram.com/"><BsInstagram /></a>
              <a className='last-anchor' target="_blank" rel="noreferrer" href="https://www.google.com/"><BsGoogle /></a>
              <div className='text-area-margin'>
                <p className='text-inside-first'>Holisticly unleash client-entric experience</p>
                <p className='text-inside-first adjust'><span><MdLocationOn /></span>Randulas, Id</p>
                <p className='text-inside-first adjust'><span><MdOutlineForwardToInbox /></span>sumeettheracer@gmail.com</p>
                <p className='text-inside-first adjust'><span><BsFillTelephonePlusFill /></span>+9091026862</p>
              </div>
            </IconContext.Provider>


          </div>
        </div>
        <div className='upper-second'>
          <div class="second">
            <h4>
              services
            </h4>
           <ul>
            <li>
              <p>Our Story</p>
            </li>
            <li>
              <p>Shop our insta</p>
            </li>
            <li>
              <p>Magazine</p>
            </li>
            <li>
              <p>contact</p>
            </li>
           </ul>
          </div>
          <div class="third">
            <h4>
              About Us
            </h4>
            <ul>
              <li>
                <p>Help & FAQ</p>
              </li>
              <li>
                <p>Shipping Information</p>
              </li>
              <li>
                <p>Return & refunds</p>
              </li>
              <li>
                <p>Content Marketing</p>
              </li>
              <li>
                <p>International Order</p>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h4>
              Newsletter
            </h4>
            <p>Rapidiously pursue vertical infomediaries with out-of-the-box</p>
            <input name='email' type="email" placeholder="Enter your email" />
          </div>
        </div>
      </div>
      <div className='last'><p>PetroMax, copyrights,2023,allrights reserved</p></div>
    </div>
  )
}

export default FooterSection