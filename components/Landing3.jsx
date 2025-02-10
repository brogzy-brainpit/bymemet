'use client'
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import "../effects/customButton.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Rounded from "../common/RoundedButton";
import {
   free,ele
  
} from '../data'
import {motion, useScroll, useTransform,useInView} from 'framer-motion'
import SlideUpText from '@/effects/SlideUpText';
import Magnetic from '@/effects/Magnetic';
import Link from 'next/link';
function Landing3({inView}) {
    const horzRef= useRef(null)
    const textRef= useRef(null)
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;
    // const {inView,setInView}=useState(false)
    // const inView= useInView(textRef)
    // console.log(inView)
  useEffect(() => {
    if (firstText.current && secondText.current) {
      // Get the width of the first <p> element in pixels
      const firstWidth = firstText.current.innerWidth;
      
      // Set the left position of the second <p> element
      // This sets its left to 100% plus the width of the first element.
      secondText.current.style.left = `calc(100% + ${firstWidth}px)`;
    }
  }, []);
    useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: e => direction = e.direction * -1
        },
        x: "-900px",
      })
      requestAnimationFrame(animate);
    }, [])
  
    const animate = () => {
      if(xPercent < -100){
        xPercent = 0;
      }
      else if(xPercent > 0){
        xPercent = -100;
      }
      gsap.set(firstText.current, {xPercent: xPercent})
      gsap.set(secondText.current, {xPercent: xPercent})
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    }








    const {scrollYProgress} =useScroll({
        target:horzRef,
        offset:["start end",'end start']
    })
    const textOpacity= useTransform(scrollYProgress,[0,0.6],[0,1])
    const scale= useTransform(scrollYProgress,[0,0.6],[0.1,1])
    const left= useTransform(scrollYProgress,[0,1],[200,0])
    const textSize= useTransform(scrollYProgress,[0,0.5],[1,0.5])
    const textSize2= useTransform(scrollYProgress,[0,0.5],[1,2])
    const y= useTransform(scrollYProgress,[0,0.5],[700,0])
    const x= useTransform(scrollYProgress,[0,0.5],[-600,500])
    const transX2= useTransform(scrollYProgress,[0,1],[0,-500])
    const transX3= useTransform(scrollYProgress,[0,1],[0,-400])
    const transX4= useTransform(scrollYProgress,[0,1],[0,-300])
    const slideUp={
      initial:{y:"100%",scale:0},
  enter:{y:"0%",scale:1,transition:{delay:0.8,duration:0.5}},
  exit:{y:"100%",scale:0}}

//   const slideUp={
//     initial:{y:"100%",scale:0},
// enter:{y:"100%",scale:1,transition:{delay:6.0,duration:0.8}},
// exit:{y:"0%",scale:1}}
    
     const months=["jan","feb","march","apr","may","jun","jul","aug","sept","oct","nov","dec"]
      const currentMonth=new Date().getMonth()
     let Month=months[currentMonth]
  return (
    <div ref={horzRef} className='relative h-[100v   w-full  font-custom4 flex items-center py-[20vh] '>
      {/* <div className=" container sticky top-0 h-full flex flex-col  justify-center"> */}
      <div className=" container sticky top-0 h-full flex flex-col ">
      {/* <h1 className='text-[10vw] font-bold uppercase leading-[1] py-3 flex  flex-row relative'>
<div className='flex flex-col w-full'>

<SlideUpText text={"memet"} y='0%'  className={`relativ text-par  inline-flex overflow-hidden  text-[56px] md:text-[9vw]  leading-[1] text-customColor font-custom`}  fontSize={96} />
<div className='flex justify-end w-full'>

<SlideUpText text={"oumar"} y='0%'  className={`relativ text-par  inline-flex overflow-hidden  text-[56px] md:text-[9vw]  leading-[1] text-customColor font-custom`}  fontSize={96} />
</div>
</div>

<span className='absolute right-[30px]'>
   <svg className="hidden h-full w-full md:block"  height="110" viewBox="0 0 1309 165" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path fill="#ffffff" style={{transform: "translateY(0%)", transformOrigin: "1262.2px 46.6134px",}}  d="M1262.2 93.2268C1252.69 93.2268 1244.39 91.3497 1237.3 87.5956C1230.29 83.8415 1224.87 78.4607 1221.03 71.453C1217.27 64.4454 1215.4 56.1863 1215.4 46.676C1215.4 37.1656 1217.27 28.9066 1221.03 21.8989C1224.87 14.8913 1230.29 9.51038 1237.3 5.75629C1244.39 1.91876 1252.69 0 1262.2 0C1271.71 0 1279.97 1.87705 1286.98 5.63114C1294.07 9.38524 1299.49 14.8078 1303.24 21.8989C1307.08 28.9066 1309 37.1656 1309 46.676C1309 56.1863 1307.08 64.4454 1303.24 71.453C1299.49 78.4607 1294.07 83.8415 1286.98 87.5956C1279.97 91.3497 1271.71 93.2268 1262.2 93.2268ZM1262.2 84.5924C1269.71 84.5924 1276.17 83.0907 1281.6 80.0874C1287.1 77.0007 1291.27 72.621 1294.11 66.9481C1297.03 61.1918 1298.49 54.4344 1298.49 46.676C1298.49 38.9175 1297.03 32.2018 1294.11 26.529C1291.27 20.7727 1287.1 16.3512 1281.6 13.2645C1276.17 10.1778 1269.71 8.63443 1262.2 8.63443C1254.77 8.63443 1248.31 10.1778 1242.8 13.2645C1237.38 16.3512 1233.21 20.7727 1230.29 26.529C1227.37 32.2018 1225.91 38.9175 1225.91 46.676C1225.91 54.4344 1227.37 61.1918 1230.29 66.9481C1233.21 72.621 1237.38 77.0007 1242.8 80.0874C1248.31 83.0907 1254.77 84.5924 1262.2 84.5924ZM1263.07 74.7066C1257.57 74.7066 1252.77 73.5386 1248.68 71.2027C1244.6 68.7834 1241.47 65.4882 1239.3 61.3169C1237.13 57.0623 1236.05 52.182 1236.05 46.676C1236.05 41.2534 1237.09 36.4148 1239.17 32.1601C1241.26 27.822 1244.26 24.4851 1248.18 22.1492C1252.1 19.7299 1256.73 18.5202 1262.07 18.5202C1267 18.5202 1271.25 19.4379 1274.84 21.2732C1278.51 23.1086 1281.34 25.6113 1283.35 28.7814C1285.43 31.9516 1286.68 35.5388 1287.1 39.5432H1273.09C1272.75 36.957 1271.79 34.7046 1270.21 32.7858C1268.62 30.867 1266.04 29.9077 1262.45 29.9077C1259.7 29.9077 1257.4 30.575 1255.57 31.9098C1253.81 33.2446 1252.52 35.2051 1251.69 37.7913C1250.85 40.294 1250.44 43.2556 1250.44 46.676C1250.44 51.8483 1251.4 55.9361 1253.31 58.9394C1255.23 61.8592 1258.28 63.3191 1262.45 63.3191C1266.04 63.3191 1268.62 62.4015 1270.21 60.5661C1271.79 58.6474 1272.75 56.3115 1273.09 53.5585H1287.1C1286.85 57.5628 1285.77 61.1918 1283.85 64.4454C1281.93 67.6155 1279.18 70.1182 1275.59 71.9536C1272.08 73.7889 1267.91 74.7066 1263.07 74.7066Z" transform-origin="1262.2000122070312px 46.613399505615234px"></path>
</svg>
  
</span>
 
</h1> */}
  <div className='absolut py-3'>
        <div ref={slider} className='relative whitespace-nowrap overflow-hidden'>
        <p ref={firstText} text={"emails by memet"}
className={`pr-[5px] md:pr-[50px] relative text-par  inline-flex overflow-hidden  text-[97px] md:text-[105px]  leading-[1] text-customColor font-custom `}  >Email developer <span className='dm-mono-regular'>-</span></p>
 

 <p ref={secondText} text={"emails by memet"}   
className={`pr-[5px] md:pr-[50px]  absolute top-0 text-par  inline-flex overflow-hidden  text-[97px] md:text-[105px]  leading-[1] text-customColor font-custom `}  >Email developer <span className='dm-mono-regular'>-</span></p>
 


        </div>
      </div>
{/* <h1 className='text-[10vw] font-bold uppercase leading-[1] pb-[12px] flex  flex-row relative text-49 text-499 '>
{inView && 
(<SlideUpSolo slideUp={slideUp} inView={inView} text={"emails by memet"} y='0%'  className={`  relativ text-par  inline-flex overflow-hidden  text-[35px] md:text-[110px]  leading-[1] text-customColor font-custom `}  fontSize={96} />)}
 
</h1> */}
<div className='relative flex w-full justify-between gap-4 breaker'>
<div className=' w-full breaker-child flex flex-col justify-end'>
  <motion.div  variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"   className='w-[60%] flex justify-start overflow-hidden rounded-[20px]'>
  <div className='block pb-2 bg-slat-300 '>
  <span class="block w-[10vw]">
    <svg stroke="currentColor" fill="none" stroke-width="1.25" viewBox="6 6 12 12" stroke-linecap="round" stroke-linejoin="round" class="m-0 size-[26px] p-0 md:size-7" color="#8C8C73" style={{color:"#8C8C73"}} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
    </span>
  </div>
    </motion.div>
<SlideUpSolo slideUp={slideUp} inView={inView} y='-10%' duration={0.1}  className={`capitalize  inline-flex overflow-hidden  text-[18px] md:text-[18px]  leading-[1] text-customColor dm-mono-regular`} text={"i help growing brands and startups gain an unfair advantage through premium, results driven email templates"} fontSize={96} />
    
     <motion.div  variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit">
         {/* <button class="button-49 dm-mono-regular my-[20px]" role="button">my works</button> */}
         <div class="my-[20px]">

        <Rounded>
              <Link href="/works" className='dm-mono-regular '>My work</Link>
            </Rounded>
         </div>
    </motion.div>
  </div>
  <div className='relative w-full breaker-child flex justify-center '>
     {/* <Magnetic className="flex justify-center">
     </Magnetic> */}
    <motion.div  variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"   className='w-[60%] flex justify-center overflow-hidden rounded-[20px]'>
      <Image  src={ele} className='object-cover' />
    </motion.div>
  </div>
  <div className=' bg-slate-80 w-full breaker-child flex items-end'>
    <div>
<SlideUpSolo  slideUp={slideUp} inView={inView}  y='-10%'   className={`relativ capitalize  inline-flex overflow-hidden  text-[18px] md:text-[18px]  leading-[1] text-customColor dm-mono-regular`} text={"available for freelance work"} fontSize={96} />

{/* <p className='block font-normal capitalize'>
  available for freelance work
</p> */}
  <h1 className='font-bold uppercase leading-[1] py-3'>

<SlideUpSolo  slideUp={slideUp} inView={inView}  y='0%' delay={0.05}  className={`relativ text-par  inline-flex overflow-hidden  text-[16px] md:text-[3vw]  leading-[1] text-customColor ${new Date().getDate()=="4"?"dm-mono-regular":new Date().getDate()=="14"?"dm-mono-regular":new Date().getDate()=="24"?"dm-mono-regular":"font-custom"}`} text={`${new Date().getDate()} ${Month} ‘ ${new Date().getFullYear()}`} fontSize={96} />

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
        return <span {...props}   >

            <motion.span custom={index} variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"  className=''>{p}</motion.span >
        </span>
    })}
    </p>
  )
}
export default Landing3