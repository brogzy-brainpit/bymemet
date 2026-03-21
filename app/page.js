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
import Circular from "@/components/Circular";
import BrandsGrid from "@/components/BrandsGrid";
import Swiper from "./_components/Swiper";
import GridLines from "./_components/GridLines";


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
    <GridLines inView={inView} />
    <AnimatePresence mode="wait">
    {isLoading &&< Preloader/>}
    </AnimatePresence>
    <SmoothScroll>
   <Landing inView={inView}/>
   <ScrollSplitMarquee/>
      <Swiper/>
   {/* <Landing/> */}
   <Circular/>
   <BrandsGrid/>
   <LandingTrusted text companies={[
  {img:"https://emailsyall.com/wp-content/uploads/2023/09/home_chef_ey.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2023/09/cameo_ey.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2023/09/fundrise_ey.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2023/09/mosaic_ey.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2021/12/ey_girl_scouts.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2020/09/npr_logo.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2023/09/south_dakota_ey.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2021/12/ey_discovery.png"},
  
]}/>

{/* 
    <SlidingImages/>
   <Services/>
   <Projects header/>
   <RecentWorks/>
   <Parallax/> */}
    {/* <Custom/> */}
   {/* <TwoImages/> */}
   {/* <Images/> */}
    {/* <div className="h-[50vh]"></div> */}
    {/* <Texter/> */}
    {/* <OurExpertise/> */}
    {/* <Gallery/> */}
<ReviewShow/>
{/* <Compatibility/> */}
    {/* <HorizontalParallax/> */}
    </SmoothScroll>
    {/* <div className="h-[100vh]"></div> */}

   </div>
  );
}









