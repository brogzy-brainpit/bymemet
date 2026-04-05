import SlideUpText from '@/effects/SlideUpText'
import { useInView,motion } from 'framer-motion'
import React, { useRef } from 'react'
import Rounded from "../common/RoundedButton";
import Link from 'next/link';
import Section from '@/app/layout/Section';
import GridColumn from '@/app/layout/GridColumn';
import { accent } from '@/data';

function Texter() {

  return (
    <div className=' container my-[120px] '>
      <Section>
        <GridColumn>
      <h2 className='col-start-1 col-span-8 text-heading2 font-custom leading-[.8]'>

      <SlideUpText  className={`inline-flex overflow-hidden  text-[56px] md:text-[96px]  leading-[1] font-custom`} text={"10,000 hours (5 years) bringing your worth it designs to life."} fontSize={96} clamp={false}/>
      </h2>

        <div className='col-start-1 col-span-8 flex sm:flex-row flex-col justify-between w-[70%] my-5 capitalize'>
            <p className='flex-[1] text-[#c8c8c8] p-3 text-[16px] font-body'>memet oumar</p>
            <p className='flex-[1] capitalize text-[#c8c8c8] p-3 text-[16px]  font-body'>email developer <br/> (+234)9063260237</p>
            
            <div className='flex-[2]'>
               <Rounded backgroundColor={accent}>
                          <Link href="/contact"  className='font-body'>lets talk!</Link> 

                        </Rounded>
              </div>
                    </div>
        </GridColumn>
      </Section>
       
    </div>
  )
}

export default Texter