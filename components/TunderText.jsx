import React, { useMemo, useRef } from 'react'
import { useInView ,motion} from 'framer-motion'
import useSplitText from './useSplitText';

function TunderText({text='hello my name is bokchexa?',finalColor= '#ffffff',initialDelay=0, preloaderOut=false}) {
    const textContainer= useRef(null)
    // const inView= useInView(textContainer,{once:false,margin:'-120px'})
    const inView= useInView(textContainer,{once:false,margin:'0px'})
    const {letters} =useSplitText(text,'char')
    const lighthning= '#9333EA'
      const parent={
        initial:{
        },
        enter:{
            opacity:[1,.85,.1,.9,0,1,.4,.85,.1,.9,0,1],
            // times:['0','.2','.35','.55','.80','1'],
            transition:{
            duration:.8,
            ease:'easeOut',  
            delay:initialDelay,
            staggerChildren:.018,
            delayChildren:.09 + initialDelay,
            }
        },
      }
       const item={
        initial:{
            opacity:.6
        },
        enter:{
            opacity:[1,.8,.6,.68,1],
            color:[finalColor,lighthning,finalColor,lighthning,finalColor],
            
        },
         exit:{
            opacity:1
        },
      }
  return (
    <motion.span className=' flex flex-wrap justify-cente'  ref={textContainer} variants={parent} initial='initial' animate={inView && preloaderOut?'enter':'initial'} exit='exit'>
{letters.map((l,i)=>{
    return <motion.span  variants={item} key={i}>
         {l.char}
        </motion.span>
})}
    </motion.span>
  )
}

export default TunderText