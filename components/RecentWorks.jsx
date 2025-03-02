import { useScroll,motion,useTransform } from 'framer-motion'
import { useRef } from 'react'
import React from 'react'
import Image from 'next/image'
import Word2 from './Word2'
import Rounded from '../common/RoundedButton'
import Link from 'next/link'

function RecentWorks() {
  const textRef=useRef(null)
  const textRef2=useRef(null)
  const textRef3=useRef(null)
  const {scrollYProgress}= useScroll({
    target:textRef,
    offset:["start 0.9",'start 0.25']
  })

  const firstPara="Today, responsive email is the only email. Gone are the days of fixed-width emails. Image-only emails and scaled, non-responsive emails don’t convert. If you don’t have well-written, up-to-date, responsive email code, you’ll lose opportunities. My celebrated expertise in HTML email coding can get your message in front of more people, looking exactly how you want it to look.".split(" ")
    const secondPara="I can hand-code your PSD, Sketch, or Figma file into a responsive email. Whether you need a standalone email, a template, or a dynamic modular system, it will look the best it can in all 80 major email clients with my fully tested code.".split(" ")
    const thirdPara="Email coding is a fast-paced world that frequently changes without warning, so your code might work one day and not the next. I stay up to date with all the goings-on in the email-verse, so my code is always current.".split(" ")
    return <div className='container breaker relative flex gap-4 py-10'>
      <div className=' flex items-center justify-center breaker-child py-3'>
        <Image src={"https://emailsyall.com/wp-content/uploads/2020/09/npr_examples.png"} width={400} height={400}/>
      </div>
      <div  className='breaker-child  h-full   py-3'>
        <h1 ref={textRef} className='py-4 text-[16px] text-customColor dm-mono-regular flex flex-wrap'  >
      {firstPara.map((word,i)=>{
        var start= i/firstPara.length;
        var end= start+ (1/firstPara.length);
        return <Word2 from={0.9} to={0.25}   ref={textRef} key={i} range={[start,end]} word={word}/>
      })}

        </h1>
        <h1 ref={textRef2} className='py-4 text-[16px] text-customColor dm-mono-regular flex flex-wrap' >
{secondPara.map((word,i)=>{
        var start= i/secondPara.length;
        var end= start+ (1/secondPara.length);
        return <Word2 from={0.70} to={0.25}   ref={textRef2} key={i} range={[start,end]} word={word}/>
      })}

</h1>
<h1 ref={textRef3} className='py-4 text-[16px] text-customColor dm-mono-regular flex flex-wrap' >
{thirdPara.map((word,i)=>{
        var start= i/thirdPara.length;
        var end= start+ (1/thirdPara.length);
        return <Word2 from={0.50} to={0.2} key={i} range={[start,end]} word={word} ref={textRef3}/>
      })}

</h1>
<Rounded>
      <Link href="/works" className='dm-mono-regular'>More work</Link>
    </Rounded>
      {/* <button className='btn border p-4 rounded-[30px] capitalize'>my works</button> */}
      </div>

    </div>
  
}

const Word=({word,progress,range})=>{
  const textOpacity= useTransform(progress,range,[0,1])
  return(
<span className='relative text-customColor'>
  <span style={{opacity:0.13}}   className='mr-[10px] absolute' >{word}</span>
  <motion.span style={{opacity:textOpacity}}   className='mr-[10px]' >{word}</motion.span>

</span>
  )
}

export default RecentWorks