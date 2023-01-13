import React from 'react'
import "./HeroSection.scss"
//how to import image from a folder in react?
import laptop from "../images/laptop.png"
import swerls from "../images/swerls.png"

const HeroSection = () => {
    return (
        <div className='herosection'>
            <div className='content'>
                <div className='left'>
                    <h1>We Bring Your Ideas To Life</h1>
                    <p>
                        Monotonectally customize e-business infrastructures through performance based texhnology.Intrinsicly fabricate
                        resources sucking interfaces after interactive networks.
                    </p>
                    <button>Free Consultation</button>
                </div>
                <div className='right'>
                    <img className='design' src={swerls} alt='swerls' />
                    <img className='laptopimage' src={laptop} alt='laptopimg' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection