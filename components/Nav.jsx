'use client'
import React, { useState } from 'react'
import {AnimatePresence, delay, motion} from "framer-motion"
import facebook from "@/assets/facebook-f-brands.png"
import instagram from "@/assets/instagram-brands.png"
import memetLogo from "@/assets/logo.svg"
import Image from 'next/image'
import Magnetic from '@/effects/Magnetic'
import SlideUpText from '@/effects/SlideUpText'
import Link from 'next/link'
import Section from '@/app/layout/Section';
import Rounded from "../common/RoundedButton";
import CustomBtn from './CustomBtn'
import GridColumn from '@/app/layout/GridColumn'
import { accent } from '@/data'


export const navItems = [
{
title: "About",
href: "#about",
}, 
{
title: "blogs",
href: "/blogs",
}, 
{
title: "services",
href: "#services",
},
{
title: "projects",
href: "#projects",
},
{
title: "samples",
href: "#samples",
},
// {
// title: "Contact",
// href: "#contact",
// },
]
function Nav({inView}) {
    const [burgerMenu,setBurgerMenu] =useState(false)
  return (
    <motion.div transition={{delay:4,duration:.8}} initial={{y:'-100%'}} animate={{y:'0%'}} className='w-full  min-h[3em]  z-header'>
        <Section padding={false} className={'h-auto p-5 relative w-full flex items-center justify-between'}>
     <GridColumn>
     <div className=' flex items-center col-start-1 lg:col-span-1 col-span-2'>
         <Link href={"/"}>
         <h2 className='font-custom leading-[.8] text-[2.5em]'>By Memet<sup className='text-[1.8'>™ </sup></h2>
        {/* <Image alt='bymemet logo' src={memetLogo} style={{width:"120px",translate:"-10%"}}/> */}
        </Link>
     </div>
       <span style={{opacity:0.47}} className=' flex items-center col-start-1 col-span-4 lg:col-span-3 lg:col-start-2 font-bod font-accent italic'>
        <SlideUpText gap='6px' text={"[Email Developer & Specialist]"}  y='0%'  className={`inline-flex overflow-hidden  text-[14px] md:text-[16px]  leading-[1]`}  fontSize={96} clamp={false}/>
       </span>

        <div className=' lg:col-start-6 row-start-1 col-start-5 col-span-full flex items-center justify-between'>
         <div className='gap-8 lg:flex hidden'>
          {navItems.map(({href,title},index)=>{
                return (
            //    <ScaleUpContent delay={0.50}>
                      <Magnetic key={index}>
                    <div className={` font-body text-para capitalize `}>
                       
                        <a href={href} className='mix-blend-differenc' >{title}</a>
                        <div className={` bg-brand-text dark:bg-brand-text-dark transition-all duration-500 ease-in-out `}></div>
                    </div>
                </Magnetic>
                //    </ScaleUpContent>
                )
               })}
         </div>
                {/* <CustomBtn title='let's talk' href='#book-a-call' className='max-h-fit ml-10'/> */}
                <Rounded secondary={false} backgroundColor='#FFB347'>
                              <Link className='hover:!text-brand-black font-body cursor-pointer' 
                              target='blank' href="https://www.instagram.com/memet_lab" 
                            >Let's talk</Link>
                            </Rounded>
        </div>
<AnimatePresence mode='wait'>
{!inView &&   
        <motion.div transition={{delay:0,duration:.4}} initial={{y:'-100%'}} exit={{y:'-100%'}} animate={{y:inView?'0%':'0%'}} className='z-[99999999] fixed w-full  top-0  right-0 gap4 h-[80px]  flex justify-between items-center '>
             <Section padding={false} className={'h-auto p-5 relative w-full'}>
              <GridColumn>
              <div className=' flex items-center col-start-1 lg:col-span-1 col-span-3'>
         <Link href={"/"}>
         <h2 className='font-custom leading-[.8] text-[2.5em]'>By Memet<sup className='text-[1.8'>™ </sup></h2>
        {/* <Image alt='bymemet logo' src={memetLogo} style={{width:"120px",translate:"-10%"}}/> */}
        </Link>
     </div>
       <span style={{opacity:0.47}} className=' order-3 lg:order-2 flex items-center col-start-1 col-span-6 lg:col-span-3 lg:col-start-2 font-bod font-accent italic'>
        <SlideUpText gap='6px' text={"[Email Developer & Specialist]"}  y='0%'  className={`inline-flex overflow-hidden  text-[14px] md:text-[16px]  leading-[1]`}  fontSize={96} clamp={false}/>
       </span>

<div className='lg:col-start-8 col-start-4  col-span-5 order-2 lg:order-3 flex gap-4 justify-end items-center'>
   <motion.div initial={{scale:0}} transition={{delay:0}} animate={{scale:inView?0:1}}>
              <Rounded secondary={false} backgroundColor={accent}>
                
                <Link target='blank' href="https://www.instagram.com/memet_lab" className='font-body '>Let's talk</Link>
                {/* <Link target='blank' href="https://www.figma.com/design/KCs3m76HBZKEPwk0CMAfYq/designs-by-Memet?node-id=0-1&t=0ciGeZJIRFvBLT7z-1" className='font-body '>let's talk</Link> */}
              </Rounded>
              </motion.div>
            <motion.div initial={{scale:0}} transition={{delay:.2}} animate={{scale:inView?0:1}}>
        <Magnetic>
     <div  className='cursor-pointer bg-white rounded-full z-50 w-[4em] h-[4em] flex justify-center items-center' onClick={()=>{setBurgerMenu(!burgerMenu)}} >
        <div className={`burger-menu ${burgerMenu?"burgerActive":null}`}>
        </div>
     </div>
        </Magnetic>
            </motion.div>
</div>
              </GridColumn>
             </Section>

           
</motion.div>
}
</AnimatePresence>

     </GridColumn>
        </Section>



        <MobileMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>
        </motion.div>
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

<div className='pt-[20px] flex justify-center items-center flex-col  h-full'>
 {navItems.map(({href,title})=>{
  return (
     <Magnetic>
    <Link href={href}>
   <motion.h1 variants={textAnim} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" onClick={(e)=>{setBurgerMenu(false)}}  className='dm-mono-regula font-body text-heading3 leading-[1.27] font-bold uppercase heading-hover'>{title}</motion.h1> 
    </Link>
  </Magnetic>
  )
 })}
 
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