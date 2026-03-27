'use client'
import {useRef, useState } from 'react'
import img1 from "../../assets/rhino03.jpg"
import img2 from "../../assets/tiger04.jpg"
import img3 from "../../assets/giraffe03.jpg"
import Link from 'next/link'
import Image from 'next/image'
import { useScroll, useTransform,motion } from 'framer-motion'
import MouseWrapper from '../../Hooks/MouseWrapper'
import Section from '../layout/Section'
import GridColumn from '../layout/GridColumn'
import SlideUpText from '@/effects/SlideUpText'


function Showcase() {
  return (
<Service/>
  )
}


const Service=()=>{
   const containerRef = useRef(null);
   const { scrollYProgress:scaleCard} = useScroll({
     target: containerRef,
     offset:['start start','end end']
   });  

    return(
       <div ref={containerRef} className={'mb-[25vh]'}>
         <Section padding className={'px5 bg-red800 relative flex justify-center items-center gap-10 flex-col'}>
       <GridColumn>
       <div className='  col-span-full lg:col-span-4  h-full flex flex-col items-start justify-center'>
              <h2 className='text-heading2 text-left text-brand-white font-custom uppercas leading-[.8]'>
            <SlideUpText once={false} preLoaderOut text={'Recent'}/>
                   </h2>
             
              <h2 className='text-heading text-left text-brand-white font-custom uppercase leading-[.8]'>
            <SlideUpText once={false} preLoaderOut text={'Projects'}/>
            </h2>
            </div>
       </GridColumn>
{cards.map((card,index)=>{
   const targetScale= 1-((cards.length - index) *0.05)
   return <Card {...card} key={index} i={index} progress={scaleCard} range={[index*0.25,1]} targetScale={targetScale}/>
})}       
         </Section>
        </div>

)
}
export default Showcase

function Card({i,url,img,title,paragraph,targetScale,range,progress,color,bgColor}) {
   const targetRef = useRef(null);
   const { scrollYProgress:scaleCardImage} = useScroll({
     target: targetRef,
     offset:['start end','start start']
   });
   const scale = useTransform(scaleCardImage, [0, 1], [1.3, 1]);

   const scaleCard = useTransform(progress, range, [1, targetScale]);
   return(   
      <div className='sticky top-0 h-80svh] w-[100%] flex items-center justify-center bg-slate600'>
   <motion.div  key={i} ref={targetRef} style={{backgroundColor:bgColor,scale:scaleCard,y:`calc(6% + ${i*25}px)`}} className= 'px-4 pb-4 mx-auto w-[100%] rounded-3xl overflow-hidden noise h[88%]'>
   <div  className='col-start-5 col-span-4 flex items-center justify-center p-6 bgslate-500  overflow-clip'>
   <h2 className='font-custom text-brand-black text-center text-heading2 leading-[.9]  '>
      <SlideUpText once={false} preLoaderOut text={title}/>
      </h2>
      </div>
  <GridColumn className={' h-fll'}>
   <div  className='col-start-1 col-span-6 p-  overflow-hidden rounded-3xl bg-slate-500'>
    <Link href={url} className='h-auto w-1/2 overflow-hidden'>
    <motion.img style={{scale}} src={img} alt="Property" className="object-cover aspect-[7/4]  h-full w-full grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"/>
    </Link>
   </div>
   <div  className='py-4 col-span-6 overflow-hidden'>
   {/* <h2 className='font-custom text-heading2 leading-[.7] mb-4 '>{title}</h2> */}
   <h2 className='font-body text-para text-brand-black'>{paragraph}</h2>
   <h2 className='font-accent py-5 italic text-para text-brand-black'>[ Design • coding • Testing ]</h2>
   </div>
  </GridColumn>
     </motion.div>

      </div>
   )
}

const cards= [
   {id:'1234',
      url:"/projects/house",
      // title:'“brand ABC”',
      title:'OsmO sUpPLy',
      title2:'[ Théâtre D’opéra Spatial — Jason Allen ]',
      paragraph:'The Copy Magazine features solely A.I. generated photorealistic images with fictional figures that have real names. The magazine explores the implications and biases of generative AI in the high-end fashion industry.',
      img:img1.src,
      bgColor: '#FB4903',
      color: '#FFF'
   },
   {id:'123',
      url:"/projects/home",
      title:'KOyAb',
      title2:'[ Copy magazine — Carl-Axel Wahlstrom ]',
      subimg1:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F2TBAb72E342xUxmh9QoNkg%2F5914f25e53da99887465a79951b0c75f%2Fdetailshot2.png&w=1920&q=75',
      subimg2:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1aLb5xMdHUQr8iLHFzcXpM%2F8ff1ea51a9f495616b2ccf93bcf0a462%2Fdetailshot1.png&w=1200&q=75',
      paragraph:'Jason Allen won first prize in the Colorado State Fair’s annual art competition with an AI generated artwork. The work has sparked controversy across the internet — leaving people argue on the topic of authenticity, and plagarism.',
      img:img2.src,
      color:'#000',
      bgColor:'#4DA2FF',
   },
   {id:'123',
      url:"/projects/office",
      title:'MisTrAL A.I',
      title2:'[ Twin Sisters in Love — Annika Nordenskiöld ]',
      subimg1:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F2TBAb72E342xUxmh9QoNkg%2F5914f25e53da99887465a79951b0c75f%2Fdetailshot2.png&w=1920&q=75',
      subimg2:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1aLb5xMdHUQr8iLHFzcXpM%2F8ff1ea51a9f495616b2ccf93bcf0a462%2Fdetailshot1.png&w=1200&q=75',
      paragraph:'Annika wins first prize at the worlds first AI photography festival, sparking debates about the authenticity and ethics of AI-generated images — especially within photography',
      img:img3.src,
      color:'#fff',
      bgColor: '#E9CCFF'
   },
     {id:'123',
      url:"/projects/others",
      title:'ProgrAmMa',
      title2:'[ Twin Sisters in Love — Annika Nordenskiöld ]',
      subimg1:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F2TBAb72E342xUxmh9QoNkg%2F5914f25e53da99887465a79951b0c75f%2Fdetailshot2.png&w=1920&q=75',
      subimg2:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1aLb5xMdHUQr8iLHFzcXpM%2F8ff1ea51a9f495616b2ccf93bcf0a462%2Fdetailshot1.png&w=1200&q=75',
      paragraph:'Annika wins first prize at the worlds first AI photography festival, sparking debates about the authenticity and ethics of AI-generated images — especially within photography',
      img:img1.src, 
      bgColor: '#FFB347',
      color: '#FFF',

   },
     {id:'123',
      url:"/projects/house-newer",
      title:'iNtUiTive',
      title2:'[ Twin Sisters in Love — Annika Nordenskiöld ]',
      subimg1:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F2TBAb72E342xUxmh9QoNkg%2F5914f25e53da99887465a79951b0c75f%2Fdetailshot2.png&w=1920&q=75',
      subimg2:'https://www.sogaiart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F81v3u1xy08cp%2F1aLb5xMdHUQr8iLHFzcXpM%2F8ff1ea51a9f495616b2ccf93bcf0a462%2Fdetailshot1.png&w=1200&q=75',
      paragraph:'Annika wins first prize at the worlds first AI photography festival, sparking debates about the authenticity and ethics of AI-generated images — especially within photography',
      img:img1.src,
      bgColor: '#55DB9C',
      color: '#000',

   },

]

