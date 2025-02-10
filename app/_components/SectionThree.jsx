import React from 'react'
import "aos/dist/aos.css"
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

// find styles in Hero.css

function SectionThree() {
  return (
    <div className='container section-3 flex-wrapper py-20 mx-19'>
       <Itemone icon={<DesignServicesIcon sx={{color:"#212EA0",fontSize:"80px"}} style={{ fill: "url(#gradient1)"}}/>} text={"Email Design"} no="01" paragraph={"Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel."}/>
       <Itemone icon={<ForwardToInboxIcon sx={{color:"#212EA0",fontSize:"80px"}} style={{ fill: "url(#gradient1)"}}/>}  text={"Email Delivery"} no={"03"} paragraph={"Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. A scelerisque purus semper eget. Tincidunt arcu non."}/>
       <Itemone icon={<SupportAgentIcon sx={{color:"#212EA0",fontSize:"80px"}} style={{ fill: "url(#gradient1)"}}/>}  text={"Email Consultation"} no={"02"} paragraph={"Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra diam sit amet."}/>
        </div>
  )
}

function Itemone({text,paragraph,no,icon}) {
  return (
    <div className='item-01 aos aos-init aos-animate' data-aos-delay="400" data-aos="flip-left">
      <section className='block p-3'>
      <svg width="0" height="0">
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#0F79A7", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#1DB5D0", stopOpacity: 1 }} />
                </linearGradient>
            </svg>
            {icon}
     

      </section>
        <h4 className='text-4xl t-bold t-align-center t-padding-v'><span className='text-7xl' style={{marginRight:"4px"}}>{no}</span>{text}</h4>
        <p className='t-medium t-align-center m-auto' style={{width:"90%"}}>{paragraph}</p>
</div>
  )
}

export default SectionThree