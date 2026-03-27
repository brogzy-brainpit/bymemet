/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */


import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import MarqueeX from './MarqueeX'
import { useScroll, useTransform ,motion, useMotionTemplate, useMotionValueEvent, useAnimation, useSpring} from 'framer-motion'
import Section from '@/app/layout/Section'
import GridColumn from '@/app/layout/GridColumn'
// import DisplacedParagraph from '@/components/DisplacedParagraph';


function ScrollSplitMarquee() {
    
    const container = useRef(null)
    const [speed1, setSpeed1] = useState(120)
    const [flip, setFlip] = useState(false)
      const control= useAnimation()
    
   const {scrollYProgress} = useScroll({target:container,offset:["start start","end end"]})
 const carden={
    initial:(i)=>({
    rotateX:i==1?'180deg':'0deg',
    transition:{duration:.25}
  }),
    flip:(i)=>({
     rotateX:i==1?'0deg':'180deg',
    transition:{duration:.25}
  })
   }
  useEffect(()=>{
       if(flip){
  control.start('flip')
  }else{
   control.start('initial')
  }
  },[flip,control])

useMotionValueEvent(scrollYProgress,'change',(v)=>{
 
const run=()=>{
   if(v>.35){
      setFlip(true)
  }else if(v<=.35){
      setFlip(false)
  }
} 
requestAnimationFrame(run)
})
  const offset= useTransform(scrollYProgress,[0.05,.65],[0,140/2])
  const Mrq22= useTransform(scrollYProgress,[0.05,.65],[50,0])
  const Mrq222= useTransform(scrollYProgress,[0.05,.65],[50,100])
const Mrq1 = useMotionTemplate`
  calc(${Mrq22}% + ${offset}px)
`;

const Mrq2 = useMotionTemplate`
  calc(${Mrq222}% - ${offset}px)
`;
  
   const height= useTransform(scrollYProgress,[0,.65],['0%','99%'])
    const  text= 'I design results-driven email experiences that connect with your audience, boost interaction, and turn passive readers into subscribers who open, click, and convert.'.split(' ')

  const accent1Words = [
  "results-driven",
  "convert.",
  'open,',
  'audience'
];
  const accent2Words = [
  "connect",
  "click,"
];
const hook="About Me"
const curiosity="...i design i code i test"
    return (
  <div ref={container} className='h-[600vh] '>
      <div  className='h-screen sticky top-0 overflow-hidden  flex items-center justify-center'>
        <motion.div style={{height}} className=' w-full h-[20%] flex items-center justify-center overflow-hidden'>
<Section>
  <GridColumn>
<div className='col-span-full lg:col-span-8 lg:col-start-3'>
<p className='flex flex-wrap justify-center text-center font-body leading-[1.5 lg:leading-[1.4] text-heading3  text-balance  text-brand-white'>
  {text.map((word,i)=>{
   
const isAccent1 = accent1Words.includes(word);
const isAccent2 = accent2Words.includes(word);
    const total=text.length
    const OUT_START=.5
    const OUT_END=.8
     const outWindow = OUT_END - OUT_START;
              const start = OUT_START + (i / total) * outWindow;
              const end = start + outWindow / total;
    const opacity= useSpring(useTransform(scrollYProgress,[start,end],[0.05,1]),{stiffness:180,damping:12})
    const scale= useSpring(useTransform(scrollYProgress,[start,end],[0,1]),{stiffness:180,damping:12})
    // const y= useSpring(useTransform(scrollYProgress,[start,end],[20,0]),{stiffness:180,damping:20})
    // const x= useSpring(useTransform(scrollYProgress,[start,end],[20,0]),{stiffness:180,damping:20})
    return <span key={i} className='relative mr-[.34em] flex gap-2'>
      <motion.span style={{opacity,scale:isAccent1 || isAccent2?scale:1}} 
       className={`inline-block leading-[1 my-[2px] align-middle ${isAccent1? "italic font-accent bg-brand-accent rounded-full px-2" :isAccent2? "italic font-accent bg-brand-secondary rounded-full px-2":""} `}
      >{word}</motion.span>
      {/* <motion.span style={{opacity:.1,y,x}} className='absolute inline-block'>{word}</motion.span> */}
    </span>
  })}
</p>

</div>
  </GridColumn>

</Section>

{/* <DisplacedParagraph
 text='ddd Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita optio blanditiis velit labore excepturi consequuntur libero, ipsa non est laudantium aliquam laborum dicta dolores debitis vel officia voluptatem vero.' className='max-w-[30em] text-center font-custom italic text-[clamp(4em,_6vw,_7em)] text-brand-white'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita optio blanditiis velit labore excepturi consequuntur libero, ipsa non est laudantium aliquam laborum dicta dolores debitis vel officia voluptatem vero.
</DisplacedParagraph> */}
        </motion.div>

        <motion.div style={{top:Mrq1}} className=' w-full h-[140px] border-none [clip-path:polygon(0%_0%,_100%_0%,_100%_calc(50%_+_0.53px),_0%_calc(50%_+_0.53px))]  absolute top-1/2 left-0  -translate-y-1/2 '>
      <motion.div animate={control} variants={carden} custom={1}
       className='[perspective:_1000px] [backface-visibility:hidden]  div1 absolute top-0
        bgpurple-600 bg-brand-accent h-[50%] flex items-center justify-cente italic w-full'>
 <MarqueeX numbers={6} speed={-speed1}  className='border-none bg-gree-600' >
        <h2 className=' font-custom italic flex items-center justify-center gap-4
         uppercase bgemerald-700 text-brand-white text-[clamp(4em,_6vw,_7em)]'>
           {/* {curiosity} */}
           i design
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/5X88SBFFc4hVAjMYmFK4js/7c8ae3f8120db2ff6f7ee315d3096266/Q8.svg"/>
      i code
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/5X88SBFFc4hVAjMYmFK4js/7c8ae3f8120db2ff6f7ee315d3096266/Q8.svg"/>
     i test
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/5X88SBFFc4hVAjMYmFK4js/7c8ae3f8120db2ff6f7ee315d3096266/Q8.svg"/>
     i fix
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/5X88SBFFc4hVAjMYmFK4js/7c8ae3f8120db2ff6f7ee315d3096266/Q8.svg"/>

           {/* Email Developer  */}
          </h2>
        </MarqueeX>
      </motion.div>


      <motion.div animate={control} variants={carden} custom={2}
       className='[perspective:_1000px] flex
        items-center h-full div2 [backface-visibility:hidden]  border-none bg-brand-secondary' >
      <MarqueeX speed={speed1} numbers={5}   >
        <h2 className='font-custom scale-y-[1.8] lg:scale-y-[1] font-bold  flex items-center justify-center
         gap-4 uppercase bgemerald-700 text-brand-black text-heading'>
          {hook}
          
           <img src='/images/crypto/tron.svg' className='w-20 h-20'/>
          </h2>
        </MarqueeX>
      </motion.div>
        </motion.div>

        <motion.div style={{top:Mrq2}}  className='w-full h-[140px] flex 
        border-none [clip-path:polygon(0%_calc(50%_+_0.53px),_100%_calc(50%_+_0.53px),_100%_100%,_0%_100%)]
         absolute top-1/2 left-0  -translate-y-1/2 '>
       <motion.div animate={control} variants={carden} custom={1}
       className='[perspective:_1000px] [backface-visibility:hidden]   div1 absolute bottom-0
        bgpurple-600 bg-brand-accent h-[50%] flex  items-center justify-cente italic w-full'>
       <MarqueeX numbers={6} speed={speed1}  className='border-none bg-gree-600' >
        <h2 className=' font-custom italic flex items-center justify-center gap-4
         uppercase bgemerald-700 text-brand-white text-[clamp(4em,_6vw,_7em)]'>
          {curiosity}
           <img src='/images/crypto/bitcoin.svg' className='w-10 h-10'/>
          </h2>
        </MarqueeX>
      </motion.div>
      <motion.div animate={control} variants={carden} custom={2}
       className='[perspective:_1000px] flex w-full
        items-center h-inhe  [backface-visibility:hidden]  border-none bg-brand-secondary' >
      <MarqueeX speed={speed1} numbers={5}  >
        <h2 className='font-custom scale-y-[1.8] lg:scale-y-[1] font-bold flex items-center justify-center gap-4 uppercase
         bgemerald-700 text-brand-black text-heading'> 
          {hook}
           <img src='/images/crypto/tron.svg' className='w-20 h-20'/>
          </h2>
        </MarqueeX>
      </motion.div>

        </motion.div>
    </div>

  </div>
  )
}

export default ScrollSplitMarquee