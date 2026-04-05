'use client'

import TunderText from '@/components/TunderText';
import React, { useRef, useEffect,useState } from 'react'
import Core from 'smooothy'
import Section from '../layout/Section';
import GridColumn from '../layout/GridColumn';
import SlideUpText from '@/effects/SlideUpText';
import { memet,evepra,tour,homely,homestore } from '@/data';
import Image from 'next/image';
import {motion, useTransform} from 'framer-motion';
import useMouse from '@/Hooks/useMouse';

const slidesData = [
  { url:homestore, username: "@john_doe", color: '#FFFF00' },
  { url: tour, username: "@jane_smith", color: '#55DB9C' },
  { url:homely, username: "@mike_wilson", color: '#E9CCFF' },
  { url: evepra, username: "@sarah_jones", color: '#FB4903' },
  { url:tour, username: "@alex_brown", color: '#FFFFFF' },
  { url:evepra , username: "@emma_davis", color: '#4DA2FF' },
  { url: homestore, username: "@chris_taylor", color: '#E9CCFF' },
  { url:homely, username: "@lisa_martin", color: '#FB4903' },
  { url:tour, username: "@david_lee", color: '#55DB9C' },
  { url: evepra, username: "@amy_chen", color: '#FFB347' },
];

const Swiper = () => {
  const [scale,setScale]=useState(false)
 const {x,y}=useMouse({start:{x:480,y:300},stiffness:140,damping:18,mass:0.1})
const newX= useTransform(x,x=>x-50)
const newY= useTransform(y,x=>x-50)
  const wrapperRef = useRef(null);

  useEffect(()=>{
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const slides = [...wrapper.children];

    const preventSelect = (e) => e.preventDefault();
    wrapper.addEventListener('selectstart', preventSelect);
    wrapper.style.userSelect = 'none';
    wrapper.style.webkitUserSelect = 'none';
    wrapper.style.touchAction = 'pan-y';


    const slider = new Core(wrapper, {
      infinite: false,
      snap: false,
      variableWidth: true,
      lerpFactor: 0.02,
      speedDecay: 0.97,
      bounceLimit: 0,
      setOffset: ({ itemWidth, totalWidth}) =>{
        const gap = window.innerWidth * 0.02;
        const lastSlideOffset = (slidesData.length -1) * (itemWidth + gap);
        return totalWidth - lastSlideOffset;
      },
      onUpdate: (instance)=>{
        const vwOffset = window.innerWidth * .1

        slides.forEach((slide, i)=>{
          const slideWidth = slide.offsetWidth;
          const slideLeft = slide.offsetLeft + instance.current;
          const bgColor = slidesData[i].color;

          const isLast = i === slidesData.length -1;

          if (slideLeft < 0 && !isLast){
            const ratio = Math.min(1, Math.abs(slideLeft) / slideWidth);
            slide.style.cssText = `
              background-color: ${bgColor};
              border: 2px solid rgba(0,0,0,0.6);
              transform-origin: left 80%;
              transform: translateX(${instance.current + Math.abs(slideLeft) + ratio * vwOffset}px) rotate(${-15 * ratio}deg) scale(${1 - ratio * 0.4});
              position: relative;
              z-index: ${i + 1};
            `
          } else {
            slide.style.cssText = `
              background-color: ${bgColor};
              border: 2px solid rgba(0, 0, 0, 0.6);
              transform: translateX(${instance.current}px);
              z-index: ${i + 1};
            `
          }
        })
      }
    })

    let animId;
    let wasDragging = false;
    let momentum = 0;
    const MOMENTUM_MULTIPLIER = 10;
    const MOMENTUM_DECAY = 0.96;

    function animate (){
      slider.update();

      if (slider.isDragging) {
        wasDragging = true;
        momentum = 0;
      } else if (wasDragging) {
        momentum = slider.speed * MOMENTUM_MULTIPLIER;
        wasDragging = false;
        
      }
      if ( Math.abs(momentum) > .5) {
        slider.target += momentum;
        momentum *= MOMENTUM_DECAY;
        slider.target = Math.max(slider.maxScroll, Math.min(0,slider.target));
      }

      animId = requestAnimationFrame(animate);
    }

    animate();

    return ()=>{
      cancelAnimationFrame(animId);
      wrapper.removeEventListener('selectstart', preventSelect);
      slider.destroy();
    }
  }, [])


  return (
    <div className='min-h-screen '>
      <Section >
        <GridColumn>
      <div id='samples' className='  col-span-full lg:col-span-4  h-full flex flex-col items-start justify-center'>
        <h2 className='text-heading text-left text-brand-white font-custom capitalize leading-[.8]'>
      <SlideUpText once={false} preLoaderOut text={'free'}/>
             </h2>
        <h2 className='text-heading text-left text-brand-white font-custom uppercase leading-[.8]'>
      <SlideUpText once={false} preLoaderOut text={'samples'}/>
      </h2>
        <h2 className='text-para font-body font-medium text-brand-white mt-[4vw] w-[60%]'>
      <SlideUpText once={false} preLoaderOut text='A collection of email templates i crafted to fuel your daily inspiration' />
          </h2>
      </div>

      <div onMouseEnter={()=>{setScale(true)}} onMouseLeave={()=>{setScale(false)}} className='col-span-full lg:col-start-5 lgcol-span-4 h-full overflow-clip relative'>
        <motion.div animate={{scale:scale?1:0}} style={{x:newX,y:newY}} className='z-10 font-body pointer-events-none bg-brand-secondary text-brand-black font-medium capitalize mixblend-difference fixed flex items-center justify-center top-0 left-0 h-[80px] w-[80px] rounded-full overflow-hidden '>
{/* <img src={"https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68384fb014875f192dfcef4b_cursor-drag.svg"}  className="w-[120px] h-[120px] object-cover"/> */}
drag
      </motion.div>
        <div ref={wrapperRef} className="cursor[url('https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68384fb014875f192dfcef4b_cursor-drag.svg'),_grab] flex h-full items-center will-change-transform">
          {slidesData.map((slide, index) => {
            return  <div key={index} className={`shrink-0 pointer-events-none overflow-hidden  w-[10em] h-[30em] lg:w-[20em] lg:h-[33em] rounded-[2vw] flex flex-col justify-between ${index < slidesData.length -1 ? 'mr-[1vw]' : ''}`}>
                <div className='w-full h-full  rounded-xl'>
                <Image className='object-cover h-full w-full' src={slide.url}/>
                </div>
                 
                </div>
          })}
        </div>
      </div>
        </GridColumn>
      </Section>
    </div>
  )
}

export default Swiper