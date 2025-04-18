'use client'
import "./landingText.css"
import Marquee from "react-fast-marquee";

function LandingTrusted({text,companies}) {

 
  return (
    <div className='landingTrusted' style={{display:"block",padding:" 30px 0px",background:"transparent"}}>
       <section className='grid-img slider-containe' style={{display:"flex"}}>
     
         <Marquee gradient={true} gradientColor="000000" gradientWidth={140} >
        {companies.map(({img})=>{
          return (
      <img style={{height:"90px",padding:"0px 25px"}} className='normal-ig' src={img}/>
          )
        })}
        </Marquee>
       </section>
        </div>

  )
}


export default LandingTrusted