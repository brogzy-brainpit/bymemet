'use client'
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import "../effects/customButton.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Rounded from "../common/RoundedButton";
import {
   free,ele,memet
  
} from '../data'
import {motion, useScroll, useTransform,useInView} from 'framer-motion'
import SlideUpText from '@/effects/SlideUpText';
import Magnetic from '@/effects/Magnetic';
import Link from 'next/link';
import MarqueeX from './MarqueeX';
function Landing
({inView}) {

    const [speed1, setSpeed1] = useState(100)
    const slideUp={
      initial:{y:"100%",scale:0},
  enter:{y:"0%",scale:1,transition:{delay:0.1,duration:0.2}},
  exit:{y:"100%",scale:0}}

     const months=["jan","feb","march","apr","may","jun","jul","aug","sept","oct","nov","dec"]
      const currentMonth=new Date().getMonth()
     let Month=months[currentMonth]


  return (
    <div  className='relative h[100vh]   w-full  font-custom4 flex iems-center py-[13vh] '>
         <div className='absolut py- bg-purple-400'>
        <MarqueeX numbers={6} speed={-speed1}  className='border-none bg-gree-600' >
        <h2 className=' text-heading font-custom flex items-center justify-center gap-4
         uppercase bgemerald-700 text-white'>
          EMAIL DEVELOPER • EMAIL SPECIALIST
          </h2>
        </MarqueeX>
      </div>
          <div className=" container sti h-ful flex flex-col bg-pink-300 ">
 

<div className='relative flex w-full justify-between gap-4 breaker'>
<div className=' w-full breaker-child flex flex-col justify-end'>
  <motion.div  variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"   className='w-[60%] flex justify-start overflow-hidden rounded-[20px]'>
  <div className='block pb-2 bg-slat-300 '>
  <span class="block w-[10vw]">
    <svg stroke="currentColor" fill="none" strokeWidth="1.25" viewBox="6 6 12 12" strokeLinecap="round" strokeLinejoin="round" className="m-0 size-[26px] p-0 md:size-7" color="#8C8C73" style={{color:"#8C8C73"}} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
    </span>
  </div>
    </motion.div>
<SlideUpSolo slideUp={slideUp} inView={inView} y='-10%' duration={0.1}  className={`capitalize  inline-flex overflow-hidden  text-[18px] md:text-[18px]  leading-[1] text-customColor font-body`} text={"i help growing brands and startups gain an unfair advantage through premium, results driven email templates"} fontSize={96} />
    
     <motion.div  variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit">
         {/* <button class="button-49 font-body my-[20px]" role="button">my works</button> */}
         <div class="my-[20px] flex gap-[20px]">

         <Rounded>
              <Link href="/works" className='font-body '>My work</Link>
            </Rounded>
            <Rounded secondary={true} backgroundColor='#0096a5'>
              <Link target='blank' href="https://www.figma.com/design/KCs3m76HBZKEPwk0CMAfYq/designs-by-Memet?node-id=0-1&t=0ciGeZJIRFvBLT7z-1" className='font-body '>designs only</Link>
            </Rounded>
         </div>
    </motion.div>
  </div>
  <div className='relative w-full breaker-child flex justify-center '>
     {/* <Magnetic className="flex justify-center">
     </Magnetic> */}
    <motion.div  variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"   className='w-[80%] h-[auto] flex justify-center overflow-hidden rounded-[16px]'>
      {/* <Image alt='memet oumar aka bokchexa' src={ele} className='object-cover' /> */}
      <Image alt='memet oumar aka bokchexa' src={memet} className='object-cover' />
    </motion.div>
  </div>
  <div className=' bg-slate-80 w-full breaker-child flex items-end'>
    <div>
<SlideUpSolo  slideUp={slideUp} inView={inView}  y='-10%'   className={`relativ capitalize  inline-flex overflow-hidden  text-[18px] md:text-[18px]  leading-[1] text-customColor dm-mono-regula font-custom`} text={"available for freelance work"} fontSize={96} />

{/* <p className='block font-normal capitalize'>
  available for freelance work
</p> */}
  <h1 className='font-bold uppercase leading-[1] py-3'>

<SlideUpSolo  slideUp={slideUp} inView={inView}  y='0%' delay={0.01}  className={`relativ text-par  inline-flex overflow-hidden  text-[16px] md:text-[3vw]  leading-[1] text-customColor ${new Date().getDate()=="4"?"font-custom":new Date().getDate()=="14"?"font-custom":new Date().getDate()=="24"?"font-custom":"font-custom"}`} text={`${new Date().getDate()} ${Month} ‘ ${new Date().getFullYear()}`} fontSize={96} />

  {/* <SlideUpText  once={true}  className='text-[10vw] font-bold uppercase leading-[1]'/> */}
  <span>
  {/* huy heigen */}

  </span>
</h1>

    </div>
  </div>
</div>
      </div>
        
</div>
  )
}



function SlideUpSolo({slideUp,children,inView,text,once,fontSize,duration=0.2,delay=0.1,gap='10px',y="0%",...props}) {
    const textRef= useRef(null)
    

  return (
    <p ref={textRef} style={{gap}} className=' flex-wrap w-0%]  m-0 flex gap-2 bg-slate-40'>
        {text.split(" ").map((p,index)=>{
        // return <span {...props}  className={`relativ ${clamp?"text-para":null} ${...props} inline-flex overflow-hidden md:text-[${fontSize}px] text-[10vw] leading-[1] text-customColor font-custom2`} >
        return <span key={index} {...props}   >

            <motion.span custom={index} variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"  className=''>{p}</motion.span >
        </span>
    })}
    </p>
  )
}
export default Landing
