import GridColumn from '@/app/layout/GridColumn'
import Section from '@/app/layout/Section'
import SlideUpText from '@/effects/SlideUpText'
import { useScroll,motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

function Services() {
  return (
<div >
<Section>
<GridColumn className={'mb-10'}>
  <div className='col-span-full'>
<h1 once={true}  className="text-heading leading-[.8] mb-4 font-custom">
    <SlideUpText once={false} initialDelay={.4}  text={'How i can Help?'}/>
    </h1>
  </div>
<div className='row-start-2 col-span-2 lg:col-span-4'>
<h1 once={true}  className=" text-brand-secondary text-heading3 mb-4 font-body">
        <SlideUpText initialDelay={.6} once={false} className="leading-[1] inline-flex overflow-hidden text-[20px] text-brand-secondary font-body" text={"(Services)"}/>
</h1>
</div>
<div className='lg:col-start-7 col-span-4 lg:col-span-5'>
  <h1 once={false}  className=" text-brand-white text-para mb-4 font-body">
        <SlideUpText  initialDelay={1} once={false} delay={.0002} className="leading-[1] inline-flex overflow-hidden text-para text-customColor font-body" text={"frustrated with emails that don't reflect your brand or drive growth? i craft premium email experiences that captivate and help you focus on growing your business."}/>
</h1>
</div>

    

</GridColumn>

<Service/>
</Section>
</div>
  )
}

const Service=()=>{
    return <div className='h-[330vh] relative'>
        <div className='noise h-[100vh] sticky top-[10%] lg:top-[0%] border-t py-3 border-stone-500'>
        <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='text-heading2 leading-[.6] text-brand-secondary font-custom  '>01</h1>
    <h1 className='text-heading2 leading-[.6] capitalize font-custom '>
    email design
      </h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"/>
   </div>
           <GridColumn >
    <div className='lg:col-start-6 col-start-1 lg:col-span-6 col-span-6 '>
   
      <div className='flex gap-6  py-3 items-center '>
            <h1 className='text-para text-brand-secondary font-body'>1.01</h1>
            
            <h1 className='text-para font-custo font-body'>Crafting visually appealing and brand-specific email templates.</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-para text-brand-secondary font-body'>1.02</h1>
            <h1 className='text-para font-body'>Ensuring designs are optimized for conversions and engagement. </h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-para text-brand-secondary font-body'>1.03</h1>
            <h1 className='text-para font-body'>Email Code Optimization</h1>
        </div>
    </div>

           </GridColumn>

</div>
<div className=' noise h-[100vh] sticky top-[20%] lg:top-[17%] border-t py-3 border-stone-500'>
            <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='text-heading2 leading-[.6] text-brand-secondary font-custom '>02</h1>
    <h1 className='text-heading2 leading-[.6] font-custom capitalize'>Email Development</h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/4tOmYgqGG5ImynJhHuG6k6/bfdee331cc56aa0f1ab40a4c83510a28/L9.svg"/>
   </div>
           <GridColumn >
    <div className='lg:col-start-6 col-start-1 lg:col-span-6 col-span-6 '>
  
      <div>
      <div className='flex gap-6  py-3 items-center '>
            <h1 className='text-para text-brand-secondary font-body'>2.01</h1>
            <h1 className='text-para font-body'>Building mobile-friendly and fully responsive emails.</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-para text-brand-secondary font-body'>2.02</h1>
            <h1 className='text-para font-body'>Ensuring consistent rendering across devices and email clients.</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-para text-brand-secondary font-body'>2.03</h1>
            <h1 className='text-para font-body'>Writing clean, optimized, and well-documented HTML/CSS for emails.</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-para text-brand-secondary font-body'>2.04</h1>
            <h1 className='text-para font-body'> Compatibility testing with major email clients like Gmail, Outlook, Apple Mail, etc.</h1>
        </div>
       
      </div>
    </div>
</GridColumn>

</div>
<div className=' noise h-[100vh] sticky top-[28%] lg:top-[36%] border-t py-3 border-stone-500'>
            <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='text-heading2 leading-[.6] text-brand-secondary font-custom '>03</h1>
    <h1 className='text-heading2 leading-[.6] font-custom capitalize'>Automation Setup</h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/5X88SBFFc4hVAjMYmFK4js/7c8ae3f8120db2ff6f7ee315d3096266/Q8.svg"/>
   </div>
            <GridColumn >
    <div className='lg:col-start-6 col-start-1 lg:col-span-6 col-span-6 '>
      <div className='flex gap-6  py-3 items-center '>
            <h1 className='text-para text-brand-secondary font-body'>3.01</h1>
            <h1 className='text-para font-body'>Setting up automated workflows for welcome series, abandoned cart, and post-purchase emails.</h1>
        </div>
        <div className='flex gap-6 border-t py-3 border-stone-500 items-center '>
            <h1 className='text-para text-brand-secondary font-body'>3.02</h1>
            <h1 className='text-para font-body'>Designing and coding emails for platforms like Mailchimp, Klaviyo, HubSpot, or Salesforce Marketing Cloud.</h1>
        </div>
      
    </div>
</GridColumn>

</div>

    </div>
}
export default Services



