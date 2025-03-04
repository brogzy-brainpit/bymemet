import SlideUpText from '@/effects/SlideUpText'
import { useScroll,motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

function Services() {
    const textRef=useRef(null)
    const textRef2=useRef(null)
    const {scrollYProgress}= useScroll({
      target:textRef,
      offset:["start end",'start 0.25']
    })
    const {scrollYProgress:ss}= useScroll({
      target:textRef2,
      offset:["start end",'start 0.25']
    })
    const secondPara= "how i can help".split(" ")
    const secondPara2= "not your regular email developer".split(" ")

  return (
<div className=' container flex flex-col gap-[5vh] py-5'>
{/* <h1 className='py-4 text-[16px] text-customColor dm-mono-regular ' >
{secondPara.map((word,i)=>{
        var start= i/secondPara.length;
        var end= start+ (1/secondPara.length);
        return <Word key={i} range={[start,end]} word={word} progress={scrollYProgress}/>
      })}

</h1> */}
<h1 ref={textRef2} once={true}  className="text-[40px] font-custom gap-3 flex flex-wrap" gap='10px'>
{secondPara2.map((word,i)=>{
    var start= i/secondPara2.length;
    var end= start+ (1/secondPara2.length);
    return <Word key={i} range={[start,end]} word={word} progress={ss}/>
  })}
</h1>
<div className='flex grid-cols-12 gap-x-4 md:grid'>


<div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs sm:flex-row md:col-start-6'>
{/* <div className='flex gap-[30px]'> */}
    {/* <SlideUpText duration={0.1} delay={0.1} className="leading-[1] inline-flex overflow-hidden text-[20px] text-stone-500 dm-mono-regular" text={"()"}/> */}
    <SlideUpText duration={0.1} delay={0.1} className="leading-[1] inline-flex overflow-hidden text-[16px] text-customColor dm-mono-regular" text={"Let’s face it, coding emails is time-consuming and hard! It takes a specialized set of skills to do it right, and many marketers cut corners by sending image-only emails. i do it both!!!"}/>
</div>
</div>
<h1 ref={textRef} once={true}  className="text-[40px] font-custom gap-3 flex flex-wrap" gap='10px'>
    {secondPara.map((word,i)=>{
        var start= i/secondPara.length;
        var end= start+ (1/secondPara.length);
        return <Word key={i} range={[start,end]} word={word} progress={scrollYProgress}/>
      })}
    </h1>
<div className='flex grid-cols-12 gap-x-4 md:grid'>


    <div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs sm:flex-row md:col-start-6'>
    {/* <div className='flex gap-[30px]'> */}
        <SlideUpText duration={0.1} delay={0.1} className="leading-[1] inline-flex overflow-hidden text-[20px] text-stone-500 dm-mono-regular" text={"(Services)"}/>
        <SlideUpText duration={0.1} delay={0.1} className="leading-[1] inline-flex overflow-hidden text-[16px] text-customColor dm-mono-regular" text={"frustrated with emails that don't reflect your brand or drive growth? i craft premium email experiences that captivate and help you focus on growing your business."}/>
    </div>
</div>

<Service/>
</div>
  )
}

const Word=({word,progress,range})=>{
    const textOpacity= useTransform(progress,range,[0,1])
    return(
  <span className='relative text-customColor'>
    <span style={{opacity:0.09}}   className='mr-[10px] absolute' >{word}</span>
    <motion.span style={{opacity:textOpacity}}   className='mr-[10px]' >{word}</motion.span>
  
  </span>
    )
  }
const Service=()=>{
    return <div className='h-[330vh] relative'>
        <div className='noise h-[100vh] sticky top-[15%] border-t py-3 border-stone-500'>
        <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='md:text-[40px] text-[30px] font-custom capitalize '>01</h1>
    <h1 className='md:text-[40px] text-[30px]  font-custom= capitalize font-custom dm-mono-regula'>email design</h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"/>
   </div>
        <div className='flex grid-cols-12 gap-x-4 md:grid'>

    <div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs  md:col-start-6'>
   
      <div>
      <div className='flex gap-6  py-3 items-center '>
            <h1 className='text-[16px] text-stone-500 dm-mono-regular'>01</h1>
            <h1 className='text-[16px] font-custo dm-mono-regular'>Crafting visually appealing and brand-specific email templates.</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-[16px] text-stone-500 dm-mono-regular'>02</h1>
            <h1 className='text-[16px] dm-mono-regular'>Ensuring designs are optimized for conversions and engagement. </h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-[16px] text-stone-500 dm-mono-regular'>03</h1>
            <h1 className='text-[16px] dm-mono-regular'>Email Code Optimization</h1>
        </div>
      </div>
    </div>
</div>

</div>
<div className=' noise h-[100vh] sticky top-[27%] border-t py-3 border-stone-500'>
            <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='md:text-[40px] text-[30px] font-custom capitalize '>02</h1>
    <h1 className='md:text-[40px] text-[30px]  font-custom capitalize'>Email Development</h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/4tOmYgqGG5ImynJhHuG6k6/bfdee331cc56aa0f1ab40a4c83510a28/L9.svg"/>
   </div>
        <div className='flex grid-cols-12 gap-x-4 md:grid'>

    <div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs  md:col-start-6'>
   
      {/* <p className='text-para'>
      A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.
      </p> */}
      <div>
      <div className='flex gap-6  py-3 items-center '>
            <h1 className='text-[16px] text-stone-500 dm-mono-regular'>01</h1>
            <h1 className='text-[16px] dm-mono-regular'>Building mobile-friendly and fully responsive emails.</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-[16px] text-stone-500 dm-mono-regular'>02</h1>
            <h1 className='text-[16px] dm-mono-regular'>Ensuring consistent rendering across devices and email clients.</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-[16px] text-stone-500 dm-mono-regular'>03</h1>
            <h1 className='text-[16px] dm-mono-regular'>Writing clean, optimized, and well-documented HTML/CSS for emails.</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-[16px] text-stone-500 dm-mono-regular'>04</h1>
            <h1 className='text-[16px] dm-mono-regular'> Compatibility testing with major email clients like Gmail, Outlook, Apple Mail, etc.</h1>
        </div>
       
      </div>
    </div>
</div>

</div>
<div className=' noise h-[100vh] sticky top-[38%] border-t py-3 border-stone-500'>
            <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='md:text-[40px] text-[30px] font-custom capitalize '>03</h1>
    <h1 className='md:text-[40px] text-[30px]  font-custom capitalize'>Automation Setup</h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/5X88SBFFc4hVAjMYmFK4js/7c8ae3f8120db2ff6f7ee315d3096266/Q8.svg"/>
   </div>
        <div className='flex grid-cols-12 gap-x-4 md:grid'>

    <div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs  md:col-start-6'>
   
      {/* <p className='text-para'>
      A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.
      </p> */}
      <div>
      <div className='flex gap-6  py-3 items-center '>
            <h1 className='text-[16px] text-stone-500 dm-mono-regular'>01</h1>
            <h1 className='text-[16px] dm-mono-regular'>Setting up automated workflows for welcome series, abandoned cart, and post-purchase emails.</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-[16px] text-stone-500 dm-mono-regular'>02</h1>
            <h1 className='text-[16px] dm-mono-regular'>Designing and coding emails for platforms like Mailchimp, Klaviyo, HubSpot, or Salesforce Marketing Cloud.</h1>
        </div>
      
      </div>
    </div>
</div>

</div>

    </div>
}
export default Services



