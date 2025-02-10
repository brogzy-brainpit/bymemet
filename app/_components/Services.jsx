"use client"
import React from 'react'
import "aos/dist/aos.css"
// find styles in Hero.css
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
function Services() {
  return (
    <div className='container section-3 flex-wrapper py-20 mx-19'>
         <div className='item-01 aos aos-init aos-animate'  data-aos-delay="400" data-aos="flip-left">
       <div className='bg-transparent' >
        <h4 className='text-4xl t-bold t-align-left t-padding-v' data-to="1" data-speed="2000">
        {/* good service, great results! */}
        <span className="inline-grid">
        <span style={{display:"flex",justifyContent:"flex-start"}} className=" pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]" aria-hidden="true" data-text="good service, great results! "></span>
         <span className=" t-padding-v t-bold t-large [&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]" >
         good service, great results!
         </span>
         </span>
        </h4>
</div>
</div>

       <Cards suf={"+"} pre={""} start={0} no={976}  paragraph={"satisfied customers"} delay={"300"}/>
       <Cards pre={"$"} suf={"k"} text={"$30k"} start={0} no={30} paragraph={" in revenue"} delay={"500"}/>
       <Cards pre={""} suf={"k+"} text={"1k+"} start={866}  no={1} paragraph={"templates delivered"} delay={"700"}/>
        </div>
  )
}

function Cards({text,paragraph,no,pre,suf,start}) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the component is in view
});
  return (
    <div className='item-01 aos aos-init aos-animate' data-aos-delay="400" data-aos="flip-left">
       <div className=''>
        <h4 ref={ref} className='text-8xl custom-t-color text-red-500 t-bold t-align-center t-padding-v' data-to="1" data-speed="2000">
          <span className='text-7xl' style={{marginRight:"4px"}}>
          {/* {no} */}
          </span>
          {/* {text} */}
          {inView && (
                    <CountUp className='text-6xl custom-t-color text-red-500 t-bold t-align-center t-padding-v' suffix={suf} prefix={pre} start={start} end={no} duration={3} />
                )}
          </h4>
        <p className='t-medium t-align-center m-auto' style={{width:"90%"}}>{paragraph}</p>
</div>
</div>
  )
}

export default Services