'use client'
import React, { useState } from 'react'
import {delay, motion} from "framer-motion"
import facebook from "@/assets/facebook-f-brands.png"
import instagram from "@/assets/instagram-brands.png"
import memetLogo from "@/assets/logo.svg"
import Image from 'next/image'
import Magnetic from '@/effects/Magnetic'
import SlideUpText from '@/effects/SlideUpText'

function Nav() {
    const [hover,setHover] =useState(false)
    const [burgerMenu,setBurgerMenu] =useState(false)
    const logoAnimate={
        initial:{
            y:0
        },
        start:(i)=>({
            y:"-50%",
            transition:{duration:0.6,delay:0.05*i}
        }),
        exit:(i)=>(
            {
                y:0,
                transition:{duration:0.6,delay:0.05*i}
            }
        ),
    }
        const text ="t e x t"
  return (
    <div className=' w-full h-[100px] fixed blur-2 bg-slate-40 justify-center items-center z-50'>
        <div className='  z-50 container h-full w-full flex items-center justify-between'>
     <div className='z-50 flex items-start justify-center flex-col gap-1 md:flex md:flex-row '>
        <Image src={memetLogo} style={{width:"120px",translate:"-10%"}}/>

       <span style={{opacity:0.37}} className=' flex justify-end  h-full dm-mono-regular md:pl-[35px] pl-[0px]'>
        
        <SlideUpText text={"(email designer & developer)"}  y='0%'  className={`relativ text-par  inline-flex overflow-hidden  text-[16px] md:text-[16px]  leading-[1] text-customColor `}  fontSize={96} clamp={false}/>
       </span>
     </div>
     <Magnetic className="z-50">
     <div className='bg-white rounded-full z-50 w-[60px] h-[60px] flex justify-center items-center' onClick={()=>{setBurgerMenu(!burgerMenu)}} >
        <div className={`burger-menu ${burgerMenu?"burgerActive":null}`}>
        </div>

     </div>
     </Magnetic>

        </div>
        <MobileMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>
        </div>
  )
}

export const menuSlide={
    initial:{
       y: '-100%',
        
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
const MobileMenu=({burgerMenu, setBurgerMenu})=>{
    const textAnim={
        initial:{
           opacity: 0,
            
        }, 
        enter:{
            opacity:1,
         transition:{duration:0.5, delay:0.5, ease:[0.76, 0, 0.24, 1]},
    
        },
         exit:{
            opacity:0,
            // transition:{duration:1.5, ease:[0.76, 0, 0.24, 1]},
    
        },
    }
    return <motion.div variants={menuSlide} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" className=' z-40 pt-[10vh] fixed items-center justify-center w-[100%] top-0 left-0 h-screen bg-black'> 
<div className='pt-[20px] flex justify-center items-center flex-col  h-full'>
  <Magnetic>
   <motion.h1 variants={textAnim} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" onClick={(e)=>{setBurgerMenu(false)}}  className='dm-mono-regular text-heading2 font-bold uppercase heading-hover'>works</motion.h1> 
  </Magnetic>
  <Magnetic>
   <motion.h1  variants={textAnim} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" onClick={(e)=>{setBurgerMenu(false)}} className=' dm-mono-regular text-heading2 font-bold uppercase heading-hover'>About</motion.h1> 
  </Magnetic>
  <Magnetic>

   <motion.h1 variants={textAnim} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" onClick={(e)=>{setBurgerMenu(false)}} className='dm-mono-regular text-heading2 font-bold uppercase heading-hover'>contact</motion.h1> 
  </Magnetic>

<div className='flex pt-10 gap-[3vw]'>
    <Magnetic>
<motion.div variants={menuSlide} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit"  className='border-[#5B5655] border p-[30px] w-[80px] h-[80px] flex justify-center items-center rounded-full'>

<Image src={facebook} className='w-[20px] cursor-pointer' alt='facebook-logo'  />
  </motion.div>

    </Magnetic>
<Magnetic>
  <motion.div variants={menuSlide} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" className= 'border-[#5B5655] border p-[30px] w-[80px] h-[80px] flex justify-center items-center rounded-full'>
<Image src={instagram} className='w-[20px] cursor-pointer' alt='insta-logo'  />
  </motion.div>
</Magnetic>

</div>
</div>
    </motion.div>
}
export default Nav