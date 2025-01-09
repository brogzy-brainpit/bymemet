import React, { useRef } from 'react';
import "./images.css"
import Image from 'next/image';
import {
    floating1, 
    floating2, 
    floating3, 
    floating4, 
    floating5, 
    floating6, 
    floating7, 
    floating8, 
  
} from '../data'
import {motion, useScroll, useTransform,useInView} from 'framer-motion'

function Images() {
    const cont=useRef(null)
    const {scrollYProgress} =useScroll({
        target:cont,
        offset:['start end ',"end start"]
    })
const scale= useTransform(scrollYProgress,[0.2,1],[1,1.8])
  return (
  <div className='py-11 container'>
    <div className=''>
    <h2 className='w-[97%] py-11  text-heading leading-[1] text-[#c8c8c8]'>
    Production, direction
creative, post-production of
your projects photo And video.
        </h2>
    </div>
      <div ref={cont} className='grid-images'>
        <div className='bg-slate-400 overflow-hidden'>
            <motion.div style={{scale}}>
            <Image src={floating1} alt='image' className='w-full h-[50vh] object-cover'/>
            </motion.div>
        </div>
        <div className='bg-slate-400 overflow-hidden'>
            <motion.div style={{scale}}>
            <Image src={floating5} alt='image' className='w-full h-[50vh] object-cover'/>
            </motion.div>
        </div>
        <div className='bg-slate-400 overflow-hidden'>
            <motion.div style={{scale}}>
            <Image src={floating2} alt='image' className='w-full h-[50vh] object-cover'/>
            </motion.div>
        </div>
        <div className='bg-slate-400 overflow-hidden'>
            <motion.div style={{scale}}>
            <Image src={floating4} alt='image' className='w-full h-[50vh] object-cover'/>
            </motion.div>
        </div>
        
        </div>
  </div>
  )
}

export default Images