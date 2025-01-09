"use client"
import React, { useRef, useState } from 'react'
import {motion, useScroll, useTransform,useInView} from 'framer-motion'
import {
    floating1, 
    floating2, 
    floating3, 
    floating4, 
    floating5, 
  
} from '../data'
import Image from 'next/image'
import SlideUpText from '@/effects/SlideUpText'
function OurExpertise() {
    const horzRef= useRef(null)
    const textRef= useRef(null)
    const inView= useInView(textRef)
    // console.log(inView)
    const {scrollYProgress} =useScroll({
        target:horzRef,
        offset:["start end",'end start']
    })
    const textOpacity= useTransform(scrollYProgress,[0,0.6],[0,1])
    const transX1= useTransform(scrollYProgress,[0,0.8],[0,-320])
    const transX2= useTransform(scrollYProgress,[0,1],[0,-500])
    const transX3= useTransform(scrollYProgress,[0,1],[0,-400])
    const transX4= useTransform(scrollYProgress,[0,1],[0,-300])
    const [widthObserver,setWidthObserver]= useState(false)
    const [widthObserver2,setWidthObserver2]= useState(false)
    // function widthObserver(e){
    //     const {}= e
    //     alert("gg")


    // }
    const resetWidth=()=>{
alert("am out!!!")
    }
    const slideUp={
        initial:{y:"100%"},
    enter:(index)=>({y:"0",transition:{duration:0.5,delay:0.01*index}}),
    exit:{y:"100%"}}
  return (
    <section ref={horzRef} className='bg-red-10 flex h-scree'>
        <div className='container breaker  w-full min-h-screen'>
        <motion.div 
         onMouseEnter={(e)=>{setWidthObserver(true)}} 
         onMouseLeave={(e)=>{setWidthObserver(false)}}
          className='breaker-child  min-h-screen bg-slate-40 relative overflow-hidden'>
      <motion.img style={{y:transX1}} className='absolute w-[40vw] md:w-[15vw] top-[30%] left-[5%] ' src={floating1.src} alt='image'></motion.img>
      <motion.img style={{y:transX1}} className='absolute  w-[40vw]  md:w-[15vw] top-[30%] right-[5%]' src={floating2.src} alt='image'  />
      <motion.img style={{y:transX2}} className='absolute  w-[40vw] md:w-[15vw] top-[70%] left-[35%]'  src={floating3.src} alt='image' />
      <motion.img style={{y:transX3}} className='absolute  w-[40vw] md:w-[15vw] top-[100%] right-[5%]'  src={floating4.src} alt='image' />
      <motion.img style={{y:transX4}} className='absolute  w-[40vw] md:w-[15vw] top-[100%] left-[5%]'  src={floating5.src} alt='image' />
 
</motion.div>

<div className=' pt-3 flex items-center  min-h-[50vh] breaker-child' onMouseEnter={(e)=>{setWidthObserver2(true)}} onMouseLeave={(e)=>{setWidthObserver2(false)}} >


<div>
    <span>
        <motion.h1 style={{opacity:textOpacity}} className='text-emerald-400 text-heading font-bold capitalize'>our expertise</motion.h1>
   
    </span>

    <SlideUpText  className={`relativ text-par flex-nowrap   inline-flex overflow-hidden  text-para   leading-[1] font-custom1`}  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consequatur voluptatem et harum voluptates mollitia delectus accusantium consequuntur eveniet saepe, ratione eius repellendus, est id rerum iure officiis voluptatibus. Vitae libero voluptas excepturi totam ullam sequi! Perferendis dolore eos, qui quas quasi eligendi ut asperiores quaerat itaque expedita magni magnam inventore minus placeat facere quos exercitationem nisi eum rerum impedit, autem non sequi voluptate. Perferendis veritatis repudiandae voluptatem dicta qui!"}/>
    {/* <p ref={textRef} className=' flex-wrap w-0%] text-para leading-[1] m-0 flex gap-2 bg-slate-40'>
        {"goo boy".split(" ").map((p,index)=>{
        return <span className=' relativ inline-flex overflow-hidden' >

            <motion.span custom={index} variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"  className=''>{p}</motion.span >
        </span>
    })}
    </p> */}
     <button className='btn btn-primary'>test btn</button>
</div>
</div>
        </div>
        
        </section>
  )
}

export default OurExpertise