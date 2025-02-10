import React from 'react'

function CallToAction() {
  return (
    <div className='container aos aos-init aos-animate' data-aos-delay="400" data-aos="fade-up">
    <h2 className='t-large t-bold t-align-center t-padding-v capitalize'>
    partner with a professional email designer for less!
      </h2>
    <p className='t-medium t-align-center'>
    Honestly is there any other email template marketplace out there who can offer as much as we offer for only $30?
      </p>
      <div className='text-align-center flex items-center w-full justify-center my-2'>
      <button style={{display:"flex",justifyContent:"center",justifySelf:"center",}} className='capitalize btn custom-btn rounded-full text-align-center text-stone-100 flex items-center'>
        let's talk
      </button>

      </div>
</div>
  )
}

export default CallToAction