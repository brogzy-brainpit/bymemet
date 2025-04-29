'use client'
import React, { useState } from 'react'
import {delay, motion} from "framer-motion"
import facebook from "@/assets/facebook-f-brands.png"
import instagram from "@/assets/instagram-brands.png"
import memetLogo from "@/assets/logo.svg"
import Image from 'next/image'
import Magnetic from '@/effects/Magnetic'
import SlideUpText from '@/effects/SlideUpText'
import Link from 'next/link'

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
    <div className=' w-full h-[60px] backdrop-blur-lg fixed bg-slate-40 flex justify-between items-center z-50'>
    <div className=' container'>
       <div className='  z50 container h-full w-full flex items-center justify-between'>
     <div className='z50 flex items-start justify-center flex-col gap-1 md:flex md:flex-row '>
         <Link href={"/"}>
        <Image alt='bymemet logo' src={memetLogo} style={{width:"120px",translate:"-10%"}}/>
        </Link>
       <span style={{opacity:0.37}} className=' flex justify-end  h-full dm-mono-regular md:pl-[35px] pl-[0px]'>
        
        <SlideUpText text={"(email designer & developer)"}  y='0%'  className={`inline-flex overflow-hidden  text-[16px] md:text-[16px]  leading-[1] font-customColo font-custom `}  fontSize={96} clamp={false}/>
       </span>
     </div>
     <div className=' gap-8 hidden md:flex'>
             <Link href={'/works'}>
            <p className='dm-mono-regula font-custom'>Works</p>
             </Link>
              <Link href={'/about'}>
            <p className='dm-mono-regula font-custom'>About</p>
              </Link>
               <Link href={'/blogs'}>
            <p className='dm-mono-regula  font-custom'>Blogs</p>
               </Link>
                <Link href={'/contact'}>
            <p className='dm-mono-regula font-custom'>Contact</p>
                </Link>
        </div>
        <div className=' gap-8 inline-block md:hidden'>
        <Magnetic>
     <div className='cursor-pointer bg-white rounded-full z-50 w-[45px] h-[45px] flex justify-center items-center' onClick={()=>{setBurgerMenu(!burgerMenu)}} >
        <div className={`burger-menu ${burgerMenu?"burgerActive":null}`}>
        </div>

     </div>
        </Magnetic>
</div>

        </div>
       
        <MobileMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>

    </div>
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
    return <motion.div variants={menuSlide} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" className='z-40 pt-[10vh] fixed items-center justify-center w-[100%] top-0 left-0 h-screen bg-black'> 

<div className='relative container h-full w-full'>
<div className='hidden md:flex cursor-pointer absolute top-0 right-10 font-custom text-[40px] text-red-600' onClick={(e)=>{setBurgerMenu(false)}} >
    <Magnetic>
x
 </Magnetic>
</div>

<div className='pt-[20px] flex justify-center items-center flex-col  h-full'>
  <Magnetic>
    <Link href={'/works'}>
   <motion.h1 variants={textAnim} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" onClick={(e)=>{setBurgerMenu(false)}}  className='dm-mono-regula font-custom text-heading2 font-bold uppercase heading-hover'>works</motion.h1> 
    </Link>
  </Magnetic>
  <Magnetic>
  <Link href={"/about"}>
   <motion.h1  variants={textAnim} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" onClick={(e)=>{setBurgerMenu(false)}} className=' font-custom text-heading2 font-bold uppercase heading-hover'>About</motion.h1> 
  </Link>
  </Magnetic>
  <Magnetic>
    <Link href={"/blogs"}>
   <motion.h1  variants={textAnim} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" onClick={(e)=>{setBurgerMenu(false)}} className=' font-custom text-heading2 font-bold uppercase heading-hover'>Blogs</motion.h1> 
    </Link>
  </Magnetic>
  <Magnetic>
  <Link href={"/contact"}>
   <motion.h1 variants={textAnim} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" onClick={(e)=>{setBurgerMenu(false)}} className='font-custom text-heading2 font-bold uppercase heading-hover'>contact</motion.h1> 
  </Link>
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
</div>

    </motion.div>
}
export default Nav