"use client"
import React, { useEffect } from 'react'
// styles in hero.css
import "../styles/hero.css"
import Image from 'next/image'
import review from "../../assets/concept5.svg"
import {reviews} from "../../info"
import AOS from "aos"
import "aos/dist/aos.css"
import Star from '@mui/icons-material/Star'
import FeedbackIcon from '@mui/icons-material/FeedbackOutlined';
import Reviews from '@mui/icons-material/Reviews'
import Person from '@mui/icons-material/Person'
import TestimonialsCarousel from './Testimonial'

function ReviewShow({flexDirection,text,paragraph}){
  return   <div className='container breaker py-16 bg-[transparent]'>
  <div className='breaker-child rounded-lg mb-3 '>
  <h1 className=' dm-mono-regular t-large t-bold capitalize mb-2'>
         don't take my words for it
         </h1>
  <TestimonialsCarousel/>

  </div>

  <div className='breaker-child flex justify-center'>
  <div style={{position:"relative"}}>
        <Image alt='image'  src={review} width={400} height={400}/>
        {/* <FeedbackIcon style={{fontSize:"400px"}}/> */}
       

        </div>
  </div>
  

  </div>
}
  
export default ReviewShow