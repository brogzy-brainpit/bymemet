'use client'
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import "../effects/customButton.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Rounded from "../common/RoundedButton";
import {
   free,ele,memet,
   accent
  
} from '../data'
import {motion, useScroll, useTransform,useInView} from 'framer-motion'
import SlideUpText from '@/effects/SlideUpText';
import Magnetic from '@/effects/Magnetic';
import Link from 'next/link';
import MarqueeX from './MarqueeX';
import Nav from './Nav';
import Section from '@/app/layout/Section';
import GridColumn from '@/app/layout/GridColumn';
import Gallery from '@/app/_components/Gallery';
import TunderText from './TunderText';
function Landing
({inView,isLoading}) {
const landingRef= useRef(null)
const landingInView= useInView(landingRef,{once:false})
    const [speed1, setSpeed1] = useState(100)
    const slideUp={
      initial:{y:"100%",scale:0},
  enter:{y:"0%",scale:1,transition:{delay:0.1,duration:0.2}},
  exit:{y:"100%",scale:0}}

     const months=["jan","feb","march","apr","may","jun","jul","aug","sept","oct","nov","dec"]
      const currentMonth=new Date().getMonth()
     let Month=months[currentMonth]


  return (
   <div ref={landingRef} className="h-svh bg-pink400 relative flex justify-between flex-col overflow-x-clip">
     <Nav inView={inView && landingInView}/>
   {/* <Section container={false} padding={false} > */}
     <motion.div initial={{x:600}} animate={{x:inView?0:600}} transition={{ease:'easeInOut',duration:1.8}}>
        <MarqueeX numbers={6} speed={speed1}  className='bgemerald-600 p-2 border-none bg-gree-600' >
        <h2  className='scale-y-[1.8] uppercase font-bold tracking-[0.28em] font-custom flex items-center justify-center gap-4
          bgemerald-700 text-white'>
            <span className=' text-heading' > Email Developer <span className='text-brand-secondary'>•</span> Email Specialist <span className='text-brand-secondary'>•</span> </span>
          </h2>
        </MarqueeX>
      </motion.div>
   {/* </Section> */}
<Section padding={false} className={'px-5 justify-end flex bgpurple-700 '}>
  <GridColumn className={'bg-red600'}>
    <div className=' col-span-5 lg:col-span-4 flex flex-col justify-end'>
      <motion.div  variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"   className='w-[60%] flex justify-start overflow-hidden rounded-[20px]'>
      <div className='block pb-2 bg-slat-300 '>
      <span class="block w-[7vw] py-6 lg:py-4">
        <svg stroke="currentColor" fill="none" strokeWidth="1.25" viewBox="6 6 12 12" strokeLinecap="round" strokeLinejoin="round" className="m-0 size-[1.6em]" color="#FFF" style={{color:"#FFF"}}  xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
        </span>
      </div>
        </motion.div>
<h2 className='text-para Font-body'>
  <SlideUpText delay={.001} gap='.44em' preloaderOut={inView}
     text="I help SaaS startups and growing brands gain an unfair advantage with premium, high-performing email experiences."
                 initialDelay={3.5}/>
</h2>

    {/* <SlideUpSolo slideUp={slideUp} inView={inView} y='-10%' duration={0.1}  className={`capitalize  inline-flex overflow-hidden  text-para  leading-[] text-customColor font-body`} text={"i help growing brands and startups gain an unfair advantage through premium, results driven email templates"} fontSize={96} /> */}
        
         <motion.div  variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit">
             {/* <button class="button-49 font-body my-[20px]" role="button">my works</button> */}
             <div class="my-[20px] flex gap-[20px]">
    
             <Rounded backgroundColor={accent}>
                  <Link href="/works" className='font-body h-full w-full  text-brand-white'>My work</Link>
                </Rounded>
                <Rounded secondary={true} backgroundColor={accent}>
                  <Link target='blank' href="https://www.figma.com/design/KCs3m76HBZKEPwk0CMAfYq/designs-by-Memet?node-id=0-1&t=0ciGeZJIRFvBLT7z-1" className='font-body '>designs only</Link>
                </Rounded>
             </div>
        </motion.div>
      </div>

      <div className='relative col-span-3 lg:col-span-4 bgred-600 flex justify-center '>
          {/* <motion.div  variants={slideUp}  initial="initial" animate={inView?"enter":"enter"} exit="exit"   className='w-[100%] h-[auto] flex justify-center overflowhidden rounded-[16px'> */}
          <div className='w-[100%] h-[auto] flex justify-center overflowhidden rounded-[16px'>
         <Gallery isLoading={isLoading}/>
          </div>
        </div>
  </GridColumn>
</Section>


   </div>
  )
}

export default Landing
