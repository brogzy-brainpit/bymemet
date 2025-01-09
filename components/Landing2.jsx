'use client'
import Image from 'next/image'
import React, { useRef } from 'react';
import {
    floating1, 
    floating2, 
    floating3, 
    floating4, 
    floating5, 
  
} from '../data'
import {motion, useScroll, useTransform,useInView} from 'framer-motion'
function Landing2() {
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
    const slideUp={
        initial:{y:"100%"},
    enter:(index)=>({y:"0",transition:{duration:0.1,delay:0.08*index}}),
    exit:{y:"100%"}}
    let para="m a n t r a c k"
 
  return (
    <div className='relative h-[80vh] w-full pt-[12vh] '>
        <div className='relative h-full flex w-full bg-slate0'>
        <div className='md:absolute top-[4vh] w-[50%] left-[14vw]'>
            <div>
    <Image src={floating1} className='w-[300px]' />

            </div>
</div>
<div className='w-[50%] px-[3vw] flex flex-col md:flex-row md:gap-10 gap-1 absolute top-[10vh] right-1 '>
    <p className='uppercase font-custom3 font-bold text-[19px]'>h1 i6</p>
    <p className='uppercase font-custom3 font-bold text-[19px]'>camera</p>
    <p className='uppercase font-custom3 font-bold text-[19px]'>action</p>
</div>
<div className='absolute top-[40%] left-2'>
    {/* <h2 className='text-sky-400 text-[19vw] font-bold capitalize font-custom4 ultra-regular  ' style={{fontStretch:'condensed',fontOpticalSizing:"auto"}}>mantrackers</h2> */}
    {para.split(" ").map((p,index)=>{
        return <span className=' relativ inline-flex overflow-hidden' >

            <motion.span className='broken-text text-[#F23407] text-[17vw] font-bold capitalize font-custom3 ultra-regular  ' style={{fontStretch:'condensed',fontOpticalSizing:"auto"}} custom={index} variants={slideUp}  initial="initial" animate={"enter"} exit="exit">{p}</motion.span >
        </span>
    })}
</div>
            </div>
        
</div>
  )
}

export default Landing2