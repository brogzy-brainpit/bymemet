import SlideUpText from '@/effects/SlideUpText'
import { useInView,motion } from 'framer-motion'
import React, { useRef } from 'react'
import Rounded from "../common/RoundedButton";
import Link from 'next/link';

function Texter() {

  return (
    <div className=' container my-[120px] '>
      <SlideUpText  className={`relativ text-par  inline-flex overflow-hidden  text-[56px] md:text-[96px]  leading-[1] text-customColor font-custom`} text={"10 years bringing your worth it designs to life."} fontSize={96} clamp={false}/>
        {/* <h2 ref={textRef} custom={index} variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"  className='md:text-[96px] text-[10vw] leading-[1] text-customColor font-custom2'>
        10 years bringing your worth it stories to life.
        </h2> */}
        <div className='flex sm:flex-row flex-col justify-between w-[70%] my-5 capitalize'>
            <p className='flex-[1] text-[#c8c8c8] p-3 text-[16px] dm-mono-regular'>memet oumar</p>
            <p className='flex-[1] capitalize text-[#c8c8c8] p-3 text-[16px]  dm-mono-regular'>email developer <br/> (+234)9063260237</p>
            
            <div className='flex-[2]'>
               <Rounded>
                          <Link href="/contact"  className='dm-mono-regular'>lets talk!</Link> 

                        </Rounded>
              </div>
           {/* <button className='flex-[2] text-[#c8c8c8] m-3 btn px-5 py-5 border border-emerald-100 rounded-full capitalize'>about</button> */}
                    </div>
    </div>
  )
}

export default Texter