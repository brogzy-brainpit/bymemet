'use client'
import {motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Section from '@/app/layout/Section';
import GridColumn from '@/app/layout/GridColumn';
import TunderText from './TunderText';
import MarqueeX from './MarqueeX';
// import { Mail, Phone } from 'lucide-react';


export default function Footer() {
    const footerRef=useRef(null)
      const inView= useInView(footerRef)
  
    return (
        <div ref={footerRef} className='  min-h-[80vh] flex justify-end flex-col relative text-center bg-[#140D07]  py-[4vh] mx-auto'>
          <MarqueeX numbers={6} speed={100}  className='bgemerald-600 p-2 border-none bg-gree-600' >
                  <h2  className='scale-y-[1.8] uppercase font-bold tracking-[0.28em] font-custom flex items-center justify-center gap-4
                    bgemerald-700 text-white'>
                      <span className=' text-heading' > the End <span className='text-brand-secondary'>•</span> the End <span className='text-brand-secondary'>•</span> </span>
                    </h2>
                  </MarqueeX>
           <Section padding={false} className={'px-5'} >
            <GridColumn  className={'bg-brand-secondary p-5 rounded-3xl'}>
               <div className='col-start-1 col-span-5'>
                 <div className='flex items-start flex-col'>
                  <motion.h2  whileHover={{x:6,opacity:.7,cursor:"pointer"}} 
                 className='font-custom text-heading2 leading-[.8] tracking-wide font-bold text-brand-black text-left md:text-right'>
                <TunderText initialDelay={.1} finalColor='#262626' preloaderOut text='About'/>
                  </motion.h2>
                  <motion.h2  whileHover={{x:6,opacity:.7,cursor:"pointer"}} 
                 className='font-custom text-heading2 leading-[.8] tracking-wide font-bold text-brand-black text-left md:text-right'>
                <TunderText initialDelay={.2} finalColor='#262626' preloaderOut text='Blogs'/>
                  </motion.h2>
                  <motion.h2  whileHover={{x:6,opacity:.7,cursor:"pointer"}} 
                 className='font-custom text-heading2 leading-[.8] tracking-wide font-bold text-brand-black text-left md:text-right'>
                <TunderText initialDelay={.3} finalColor='#262626' preloaderOut text='Contact'/>
                  </motion.h2>
                 <motion.h2  whileHover={{x:6,opacity:.7,cursor:"pointer"}} 
                 className='font-custom text-heading2 leading-[.8] tracking-wide font-bold text-brand-black text-left md:text-right'>
                
                <TunderText initialDelay={.4} finalColor='#262626' preloaderOut text='Services'/>
                  </motion.h2>
                </div>
                </div>

               <div className='lg:col-start-6  col-start-1 col-span-full gap-[10px] md:gap-[30px] flex flex-col'>
              <div className='lg:flex hidden col-start-1 col-span-2 '>
<Link href={"https://instagram.com/memet_lab"}>
         <h2 className='font-custom leading-[.7] text-brand-black text-[4em]'>By Memet<sup className='text-[1.8'>™ </sup></h2>
        </Link>
               </div>

              <div className='mt-[8vh] lg:mt-[0vh] flex flex-col'>
                  <h2 className='font-normal text-para  font-body leading-[1.4em] text-brand-black self-start md:self-end  text-left md:text-right w-[50%]'>BASEd IN MailaUrA,</h2>
                <h2 className='font-normal text-para  font-body leading-[1.4em] text-brand-black self-start md:self-end  text-left md:text-right w-[50%]'>aBuJa</h2>
                <h2  className='font-normal text-para  font-body leading-[1.4em] text-brand-black self-start md:self-end  text-left md:text-right w-[50%]'>niGeriA</h2>
              </div>
               
                <div className='flex items-start md:items-end flex-col'>
                      
                 <motion.h2  whileHover={{x:6,opacity:.7,cursor:"pointer"}} className='text-heading2 font-bold leading-[1.1]  tracking-wide flex items-center justify-center font-custom text-brand-black  text-left md:text-right'>
                 {/* <Phone className='mr-4 w-[30px] h-[30px] md:w-[50px] md:h-[50px] '/> */}
                  <a href='phone:+2349063260237' className='text-brand-black'>
                <TunderText initialDelay={.6} finalColor='#262626' preloaderOut text='+234-9063260237'/>
                  </a>
                  </motion.h2>
                <motion.h2 whileHover={{x:6,opacity:.7,cursor:"pointer"}} className='text-heading2 font-bold leading-[1.1]  tracking-wide  flex items-center justify-center font-custom  text-brand-black text-left md:text-right'>
                  {/* <Mail  className='mr-4 w-[30px] h-[30px] md:w-[50px] md:h-[50px] '/>  */}
                  <a href='mailto:memetoumar@gmail.com'>
                <TunderText initialDelay={.7} finalColor='#262626' preloaderOut text='memetoumar@gmail.com'/>
                  </a>
                  </motion.h2>
                </div>
               </div>
              

            </GridColumn>

             <div className='container mt-[10px] border-t border-t-gray-800 flex-col flex justify-between mx-auto h-full  items-end'>

               <div className= 'pt-[10px] w-full  flex justify-between md:flex-row gap-4 flex-col'>
            <div>
              <p className='text-gray-300 capitalize text-para font-body font-normal text-left '>socials</p>
              <div className='flex gap-3 w-full '>
                <Link href={"#"}>
                     <p className='text-para font-body text-gray-500 cursor-pointer capitalize font-normal'>facebook</p>
                </Link>  
                <Link target='blank' href={"https://www.instagram.com/"}>
                    <p className='text-para font-body text-gray-500 cursor-pointer capitalize font-normal'>instagram</p>
                </Link>
                <Link target='blank' href={"https://x.com/"}>
                    <p className='text-para font-body text-gray-500 cursor-pointer capitalize font-normal'>twitter</p>
                </Link>
              </div>
            </div>
            <div className='flex gap-3'>
            <div >
            <p className='text-gray-300 capitalize text-para font-body font-normal text-left '>version</p>
            <div className='flex gap-4'>
              <p className='text-para font-body text-gray-500 font-normal' >
                {new Date().getFullYear()} &copy; Edition
              </p>
              <p className='text-para font-body text-gray-500  font-normal'>
              All rights reserved
              </p>
            </div>
            </div>

            </div>
        </div>
        </div>
           </Section>   
        </div>
    )
  }