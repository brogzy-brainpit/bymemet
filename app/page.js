'use client'
// import Gallery from "@/components/Gallery";
// import HorizontalParallax from "@/components/HorizontalParallax";
import Images from "@/components/Images";
// import Landing from "@/components/ExLanding";
// import Landing2 from "@/components/Landing2";
import Landing from "@/components/Landing";
// import OurExpertise from "@/components/OurExpertise";
import Parallax from "@/components/Parallax";
import Preloader from "@/components/preloader/Preloader";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Texter from "@/components/Texter";
import Projects from "@/components/Projects";
import SlidingImages from '@/components/SlidingImages';
// import TwoImages from "@/components/TwoImages";
import SmoothScroll from "@/effects/SmoothScroll";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ReviewShow from '@/app/_components/Reviews';
import Compatibility from "./_components/Compatibility";
import LandingTrusted from "@/components/LandingTrusted";
import ScrollSplitMarquee from "@/components/ScrollSplitMarquee";
import BrandsGrid from "@/components/BrandsGrid";
import Swiper from "./_components/Swiper";
import GridLines from "./_components/GridLines";
import Showcase from "./_components/Showcase";


export default function Home() {
  const [isLoading,setIsLoading]=useState(true)
   const [inView,setInView]=useState(false)

  useEffect(()=>{

   const timer= setTimeout(() => {
      setIsLoading(false)
    document.body.style.cursor="default"
    window.scrollTo({top:0})
    setInView(true)
    }, 2500);
    ()=>clearTimeout(timer)
  },[])
  return (
   <div className="relativ">
    <SmoothScroll>
    {/* <GridLines inView={inView} /> */}
    <AnimatePresence mode="wait">
    {isLoading &&< Preloader key={'preloader001'} isLoading={isLoading}/>}
    </AnimatePresence>
    
   <Landing isLoading={isLoading} inView={inView}/>
   <ScrollSplitMarquee/>
   <Services/>
      <Showcase/>
      <Swiper/>
      
   {/* <Texter/> */}
   {/* <ReviewShow/> */}
   {/* <BrandsGrid/> */}



{/* 
    <SlidingImages/>
   <Parallax/> 
   <Projects header/>
   <RecentWorks/>
    {/* <Custom/> */}
   {/* <TwoImages/> */}
   {/* <Images/> */}
    {/* <div className="h-[50vh]"></div> */}
    {/* <OurExpertise/> */}
    {/* <Gallery/> */}
{/* <Compatibility/> */}
    {/* <HorizontalParallax/> */}
    </SmoothScroll>
    {/* <div className="h-[100vh]"></div> */}

   </div>
  );
}









