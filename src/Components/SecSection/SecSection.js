import React from 'react'
import "./SecSection.scss"
import meeting from "../images/meeting.png"


const SecSection = () => {
  return (
    <div className='second-section'>
    <div className='content2'>
        <div className='left2'>
           <img src={meeting} alt='meeting'/>
        </div>
        <div className='right2'>
        <h1>We are Professional and Talanted</h1>
            <p>
                Monotonectally customize e-business infrastructures through performance based texhnology.Intrinsicly fabricate
                resources sucking interfaces after interactive networks. Distinctively recaptiualize enterprise-wide deliverables and proactive Roi. Objectvely target excillent

            </p>
            <button>Find Out More!</button>
        </div>
    </div>
</div>
  )
}

export default SecSection