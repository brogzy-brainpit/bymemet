'use client'
import Footer from "@/components/Footer";
// import Gallery from "@/components/Gallery";
// import HorizontalParallax from "@/components/HorizontalParallax";
// import Images from "@/components/Images";
// import Landing from "@/components/ExLanding";
// import Landing2 from "@/components/Landing2";
import Landing3 from "@/components/Landing3";
// import OurExpertise from "@/components/OurExpertise";
import Parallax from "@/components/Parallax";
import Preloader from "@/components/Preloader";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Texter from "@/components/Texter";
import Projects from "@/components/Projects";
import SlidingImages from '@/components/SlidingImages';
// import TwoImages from "@/components/TwoImages";
import SmoothScroll from "@/effects/SmoothScroll";
import { AnimatePresence } from "framer-motion";
// import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading,setIsLoading]=useState(true)
   const [inView,setInView]=useState(false)

  useEffect(()=>{

    setTimeout(() => {
      setIsLoading(false)
    document.body.style.cursor="default"
    window.scrollTo({top:0})
    setInView(true)
    }, 2420);
  },[])
  return (
   <div className="relativ">
    <AnimatePresence mode="wait">
    {isLoading &&< Preloader/>}
 
    </AnimatePresence>
    <SmoothScroll>
   {/* <Landing/> */}
   <Landing3 inView={inView}/>
   <Services/>
   <Projects/>
   <RecentWorks/>
   <Parallax/>
    {/* <Custom/> */}
   {/* <TwoImages/> */}
   {/* <Images/> */}
    {/* <div className="h-[50vh]"></div> */}
    <Texter/>
    {/* <OurExpertise/> */}
    {/* <Gallery/> */}
    <SlidingImages/>
    {/* <HorizontalParallax/> */}
    <Footer/>
    </SmoothScroll>
    {/* <div className="h-[100vh]"></div> */}

   </div>
  );
}









