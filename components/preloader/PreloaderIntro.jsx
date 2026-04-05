"use client"
import React, { useEffect, useState } from 'react'
import { motion} from 'framer-motion'
import {
    floating1, 
    floating2, 
    floating3, 
    floating4, 
    floating5, 
    floating6, 
    floating7, 
    floating8, 
  memet
} from '../../data'
import Image from 'next/image'
const textOpacity={
    initial:{
       opacity: 0,
        
    }, 
    enter:{
        opacity:1,
     transition:{duration:0.3, delay:0.1},

    },
     exit:{
        opacity:0,
    },
}
const menuSlide={
    initial:{
       y: '0%',
        
    }, 
    enter:{
        y:'0%',
     transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]},

    },
     exit:{
        y:'-100%',
        transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]},

    },
}
 const clippedImage={
    initial:{
      clipPath: 'inset(100% 0 0 0)',
    },
    enter:{
        clipPath: 'inset(0 0 0 0)',
       transition:{
        // delay:1,
        duration:1.8,
      ease: [0.9, 0, 0.1, 1],

      }
    },
  }
function PreloaderIntro() {   
    const MotionImage=motion(Image)
  return (
    <div  initial="initial" exit="exit" className=' z-preloader  fixed  flex flex-col items-center justify-center w-screen top-0 left-0 h-screen bg-transparent'> 

    <div  className="h-full w-full relative flex items-center justify-center flex-col tile rounded-full aspect-[4/4] overflow-hidden ">
         <MotionImage variants={clippedImage} animate={'enter'} initial={'initial'} transition={{
    layout: {
      duration: 1.2,
      ease: [0.9, 0, 0.1, 1],
    },
  }}  layoutId='logos' alt='memet oumar aka bokchexa' src={memet} className='object-[50%_20%] aspect-[4/4] object-cover w-[15em] rounded-full' />   
        
        </div>
 

     </div>
  )
}

export default PreloaderIntro