import { useScroll,motion,useTransform } from 'framer-motion'
import { forwardRef, useRef } from 'react'
import React from 'react'
import Image from 'next/image'



const Word2=forwardRef( ({word,range,from,to},ref)=>{
    const textRef=useRef(null)
    // const textRef2=useRef(null)
    const {scrollYProgress:ss}= useScroll({
      target:ref,
      offset:[`start ${from}`,`start ${to}`]
    })
    const firstPara="Today, responsive email is the only email. Gone are the days of fixed-width emails. Image-only emails and scaled, non-responsive emails don’t convert. If you don’t have well-written, up-to-date, responsive email code, you’ll lose opportunities. My celebrated expertise in HTML email coding can get your message in front of more people, looking exactly how you want it to look.".split(" ")
      const secondPara="I can hand-code your PSD, Sketch, or Figma file into a responsive email. Whether you need a standalone email, a template, or a dynamic modular system, it will look the best it can in all 80 major email clients with my fully tested code.".split(" ")
      const thirdPara="I can hand-code your PSD, Sketch, or Figma file into a responsive email. Whether you need a standalone email, a template, or a dynamic modular system, it will look the best it can in all 80 major email clients with my fully tested code.".split(" ")
      
  const textOpacity= useTransform(ss,range,[0,1])
  return(
    
<span className='relative text-customColor'>
  <span style={{opacity:0.13}}   className='mr-[10px] absolute' >{word}</span>
  <motion.span style={{opacity:textOpacity}}   className='mr-[10px]' >{word}</motion.span>

</span>
  )
}
)
    

export default Word2