// "use client"
import React from 'react'
// import AOS from "aos"
import "aos/dist/aos.css"

function LandingText({text,paragraph}) {
  return (
    <div className='container aos aos-init aos-animate' data-aos-delay="400" data-aos="fade-up">
        <h2 className='t-large t-bold t-align-center t-padding-v capitalize'>{text}</h2>
        <p className='t-medium t-align-center'>{paragraph}</p>
    </div>
  )
}

export default LandingText