"use client"
import React, { useEffect } from 'react'
import "../styles/hero.css"
import Navbar from './Navbar'
import Image from 'next/image'
import hero from "../../assets/hero-img.png"
import location from "../../assets/meeting-point.png"
import AOS from "aos"
import "aos/dist/aos.css"
import Link from 'next/link'
function Hero({landingHero,flexDirection}) {
  useEffect(() => {
    AOS.init({duration:500,delay:10,})
    }, [])
  return (
    <div className='hero-section'>
  {/* <Navbar/> */}
  <section className='container ga  mx-aut '>
   {landingHero?<HeroShow text={"Transform Your Email Marketing with Expert Design"}
   paragraph={"providing exceptional email design and marketing solutions tailored for businesses."}
  //  paragraph={"Welcome to [Freelancer's Name]'s portfolio – where expertise meets innovation in email design. With a proven track record of creating compelling and visually stunning email campaigns, we help businesses stand out in the inbox. Explore our portfolio to see how our custom designs can elevate your email marketing strategy and drive results."}
   landing />:<HeroShow text={"Food from your favorite restaurants to your table"}
   paragraph="Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec massa sapien faucibus et molestie. Vitae elementum curabitur vitae nunc."
   flexDirection={"row-reverse"} btn/>}
   
  </section>
  {/* <span className="inline-grid"><span className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]" aria-hidden="true" data-text="component library"></span> <span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">component library</span></span> */}

    </div>
  )
}

function HeroShow({flexDirection,text,paragraph,btn,landing}){
  return  <div className={`row flex-col md:flex-row mobilify-row ${flexDirection?"row-reverse column-reverse":null}`}>
      <div className='col-lg-6 col-lg-1 aos aos-init aos-animate' data-aos="fade-up" >
        <div className='hero-desc'>
      {/* <span className="inline-grid">
        <span style={{display:"flex",justifyContent:"flex-start"}} className=" pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]" aria-hidden="true" data-text="component library"></span>
         <span className=" t-padding-v t-bold t-large [&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]" >
         the best restaurant in town
         </span>
         </span> */}
         {/* <h1 className='t-large t-bold capitalize'> */}
          {landing?<h1 className='t-large t-bold capitalize py2' style={{lineHeight:1}}>
            Transform Your Email Marketing with expert
            <span className="inline-grid">
        <span style={{display:"flex",justifyContent:"flex-start"}} className=" pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]" aria-hidden="true" data-text="Design"></span>
         <span className=" pl-1 pb-2 t-bold t-large [&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]" >
         Design
         </span>
         </span>
          </h1>:text}
         {/* </h1> */}
        <p className='t-medium py-6 '>
         {paragraph}
          </p>
        {landing?( <div>
          <button className='btn custom-btn  capitalize my-2 text-stone-100 rounded-full'>
            <Link href={"/contact"}> contact us</Link>
          </button>
          <button className='btn capitalize hover:bg-blue-900 hover:text-stone-100 mx-2.5 my-2 custom-btn-border border rounded-full'>
            <Link href={"/contact"}> book a call</Link>
          </button>
          </div>):null}
        </div>
      </div>

      <div className='col-lg-6 col-lg-2 aos aos-init aos-animate' data-aos="fade-up">
        {/* <img src={"https://quickeat-react.vercel.app/assets/img/photo-1.png"} width={400} height={400}/> */}
        {/* <div style={{position:"relative"}}>
        <Image alt="service-deliverer"  src={hero} width={400} height={400}/>
        <div className='mounted-img-info' >
        <div className="mounted-img-rapper">
        <Image alt="service-type"  src={hero} width={30} height={30}/>
        </div>
        <div style={{display:"inline-flex",flexDirection:"column"}}>
          <h4 style={{fontSize:"18px",fontWeight:"bold",padding:"4px 0px"}}>12 resturant</h4>
          <p style={{fontSize:"13px"}}>in your city</p>
        </div>

        </div>
        <div className='mounted-img-info mounted-img-info-rating ' >
          <div className="mounted-img-rapper">
        <Image alt="location-icon"  src={location}  width={30} height={30}/>
          </div>
        <div style={{display:"inline-flex",flexDirection:"column"}}>
          <h4 style={{fontSize:"18px",fontWeight:"bold",padding:"4px 0px",textTransform:"capitalize"}}>500+ reviews</h4>
          <p style={{fontSize:"13px"}}>on fiverr</p>
        </div>

        </div>

        </div> */}
        <Image alt="decaneAgency-landing-hero" priority  src={"https://www.psd2newsletters.com/wp-content/uploads/2018/02/video_image.png"} width={400} height={400}/>

      </div>
    </div>
}
export default Hero