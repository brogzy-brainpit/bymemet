import { useInView,motion } from 'framer-motion'
import React, { useRef } from 'react'

function SlideUpText({children,text,once,fontSize,duration=0.2,delay=0.1,gap='10px',y="0%",...props}) {
    const textRef= useRef(null)
    const inView= useInView(textRef,{once})
    const slideUp={
      initial:{y:"100%"},
  enter:(index)=>({y,transition:{duration,delay:delay*index}}),
  exit:{y:"100%"}}

  return (
    <p ref={textRef} style={{gap}} className=' flex-wrap w-0%]  m-0 flex gap-2 bg-slate-40'>
        {text.split(" ").map((p,index)=>{
        return <span {...props} key={index} >
            <motion.span custom={index} variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"  className=''>{p}</motion.span >
        </span>
    })}
    </p>
  )
}

export default SlideUpText