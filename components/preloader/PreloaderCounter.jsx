import React, { useEffect } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";

function PreloaderCounter() {
  const loading= useMotionValue(0)
  // const ease=[0.9, 0, 0.1, 1];
  const ease=[0.4, 0.0, 0.2, 1];
  const Nloading= useTransform(loading,(v)=>Math.floor(v))
  // const loadingAt95= useTransform(loading,(v)=>Math.min(v,95))
  const loadingAt95= useTransform(loading,[0,90,100],[0,90,95])
  
  const x= useMotionTemplate`calc(${loadingAt95}vw - ${loadingAt95}%)`
  useEffect(()=>{
animate(loading,100,{delay:.2,duration:2,ease})
  },[])
  // [0.76, 0, 0.24, 1]
  const slideUpParent = {
    initial: {},
    enter: {
      transition: {
        staggerChildren: 0.01,
        delayChildren: 0.4,

      },
    },
    exit: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  };
  const wrapper={
    initial:{},
    initial:{},
    exit:{
        clipPath: 'inset(0 0 100% 0)',
      // scale:2,
       transition:{
        delay:1,
        duration:2.8,
        ease,
      }
    },
  }
  const [out,setOut]=React.useState(false)
// const imgs=["/images/service01.png",
//   "/images/service02.png",
//   "/images/service03.png",
//   "/images/service04.png",
//   "/images/service05.png"
// ]
const imgs=["/images/001.png",
  "/images/002.png",
  "/images/003.png",
  "/images/004.png",
  "/images/005.png"
]
  return (
    <motion.div variants={wrapper} initial='initial' animate='enter' exit='exit' className=" fixed  top-0 left-0 w-full h-full bg-neutral800  bg-transparent z-[9998] flex flex-col items-center justify-center">
     <motion.div initial={{scaleX:0,transformOrigin:'right'}} animate={{scaleX:out?0:1,transformOrigin:out?'right':'left'}} onAnimationComplete={()=>{setOut(true)}} transition={{duration:1,delay:.2,ease:'easeOut'}} className='bg-brand-black h-[.5em] w-full absolute top-0 left-0'>
     </motion.div>
      <motion.div
      style={{
        x,
        position:'fixed',
        bottom:0,
        left:0,
        whiteSpace:'nowrap'
      }}
  variants={slideUpParent}
  initial="initial"
  exit="exit"
  animate="enter"
  className="mx-auto text-heading  font-custom uppercase font-semibold tracking-wider text-brand-black flex flex-wrap text-balance max-w-[94%] lg:max-w-[38em] justify-center absolute bottom-[1em] lg:bottom-[.1em] -translate-y-[40%]"
>
<motion.span className="scale-y-[1.8]">{Nloading}</motion.span> 
<motion.span className="scale-y-[1.8]">%</motion.span> 
</motion.div>


  {/* <motion.div
  variants={slideUpParent}
  initial="initial"
  exit="exit"
  animate="enter"
  className="mx-auto bg-red-500 flex flex-wrap text-balance max-w-[94%] lg:max-w-[38em] justify-center absolute bottom-[1em] lg:bottom-[1em] -translate-y-[50%]"
>
  {
    text.split(" ").map((word, index) => (
      <span key={index} className="overflow-hidden mr-2 inline-block">
        <motion.span
          variants={slideUp}
          className="inline-block text-white text-para leading-[.9] font-body"
        >
          {word}
        </motion.span>
      </span>
    ))
  }
</motion.div> */}

    </motion.div>
  );
}

export default PreloaderCounter;
