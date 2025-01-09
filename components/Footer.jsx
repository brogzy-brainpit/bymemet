'use client'
import { useScroll, useTransform,motion } from 'framer-motion'
import React, { useRef } from 'react'
import facebook from "@/assets/facebook.png"
import instagram from "@/assets/instagram.png"
import twitter from "@/assets/twitter.png"
import youtube from "@/assets/youtube.png"
import Image from 'next/image'
import Link from 'next/link'
import Magnetic from '@/effects/Magnetic'
function Footer() {
    const footer=useRef(null)
    const {scrollYProgress}=useScroll({
        target:footer,
        offset:['start end','end end']
    })
    const y= useTransform(scrollYProgress,[0,1],[-100,0])
    // console.log(facebook)
  return (
    <motion.div ref={footer} style={{y}} className='py-4 z-[-100] relative h-[5 bg-[#121212] '>
       <div className='container flex-col flex justify-between w-full h-full  items-end'>
<div className='py-[80px] pb-[30px] flex justify-end'>
    <h2 className='text-[5vw] capitalize font-custom text-customColor'>
        its over, lets talk.
    </h2>
</div>

       <div className='pt-10 flex flex-row w-full gap-2 breaker'>
    <div className='flex flex-col breaker-child'>
      <img src='https://yazzenphotography.com.au/wp-content/uploads/2023/03/gmb.png'/>
      <div className=' flex gap-2 py-4'>
        <Magnetic>
        <Image src={facebook} style={{width:"20px",height:"20px"}}/>

        </Magnetic>
        <Image src={instagram} style={{width:"20px",height:"20px"}}/>
        <Image src={twitter} style={{width:"20px",height:"20px"}}/>
        <Image src={youtube} style={{width:"20px",height:"20px"}}/>
      </div>
      </div>
      <div className=' px-[2vw] breaker-child'>
    <h2 className='text-[12px] uppercase flex flex-col gap '>
        
        <span className='capitalize  text-[25px]  dm-mono-regular'>address</span>
        <span className='capitalize  text-[20px]  dm-mono-regular'>production headquater</span>
        <span className='capitalize text-[20px]   dm-mono-regular'>n0 16 adam way, rigasa. kaduna</span>
        <span className='capitalize text-[20px]   dm-mono-regular'>nigeria </span>
    </h2>
</div>
</div>
{/* <div className=''>
    <h2 className='text-[18px] uppercase flex flex-col '>
        <span className='uppercase'>Production, direction</span>
        <span>créative, post-production</span>
        <span> de vos projets photo et vidéo.</span>
    </h2>
</div> */}
        <div className= 'pt-[20px] w-full  flex justify-between md:flex-row flex-col'>
        
            <div>
              <p className='text-gray-300 capitalize text-[16px] dm-mono-regular'>socials</p>
              <div className='flex gap-3 w-full '>
                <Magnetic>
                <Link href={"#"}>
                     {/* <img src={facebook.src} width={20} alt='logo'/> */}
                     <motion.p className='text-[12px] text-gray-500 cursor-pointer capitalize dm-mono-regular'>facebook</motion.p>
                </Link>
                </Magnetic>
                
                <Link href={"#"}>
                    {/* <img src={instagram.src} width={20} alt='logo'/> */}
                    <p className='text-[12px] text-gray-500 cursor-pointer capitalize dm-mono-regular'>instagram</p>
                </Link>
                <Link href={"#"}>
                    {/* <img src={twitter.src} width={20} alt='logo'/> */}
                    <p className='text-[12px] text-gray-500 cursor-pointer capitalize dm-mono-regular'>twitter</p>
                </Link>
              </div>
            </div>
            <div className='flex gap-3'>
            <div >
            <p className='text-gray-300 cursor-pointer capitalize dm-mono-regular'>version</p>
            <div className='flex gap-4'>
              <p className='text-[12px] text-gray-500 dm-mono-regular' >
                {new Date().getFullYear()} &copy; Edition
              </p>
              <p className='text-[12px] text-gray-500  dm-mono-regular'>
              All rights reserved
              </p>
            </div>
            </div>

            </div>
        </div>
        </div> 
        </motion.div>
  )
}

export default Footer