'use client'
import GridColumn from "@/app/layout/GridColumn";
import Section from "@/app/layout/Section";
import { GridOff, GridOn, GridViewOutlined } from "@mui/icons-material";
import { useState } from "react";
import { AnimatePresence, motion} from "framer-motion";

function GridLines({inView}) {
const [toggleGrid,setToggleGrid]=useState(true)
// const ease=[0.9, 0, 0.1, 1];
  const ease=[0.4, 0.0, 0.2, 1]
const parentGrid={
  initial:{
     transition:{
      staggerDirection:-1,
      staggerChildren:.04,
      
    }
  },
  enter:{
    transition:{
      staggerChildren:.04,
      delayChildren:.2,
    }
  },
}
const gridChild={
  initial:{
    scaleY:0,
    transformOrigin:'bottom',
    transition:{
      duration:.4,
      ease
    }
  },
  enter:{
    scaleY:1,
    transition:{
      duration:.4,
      ease
    }
  },
}
  return (
    <div className='fixed z-[999999] h-svh top-0 w-full pointer-events-none '>
    <button onClick={()=>{setToggleGrid(!toggleGrid)}} className='text-brand-black min-w-[100px] rounded-full p-4 m-4 bg-brand-secondary font-body text-para fixed z-[99999] bottom-0 right-0  pointer-events-auto '>
        {!toggleGrid?<p>show grid <GridViewOutlined className="w-[.4em]"/></p>:<p>hide grid <GridViewOutlined className="w-[1em]"/></p>}
      </button>
 <AnimatePresence mode="wait">

      {toggleGrid && 
      
        <Section padding={false} className={'px-5 h-full'}>
           <motion.div variants={parentGrid} initial='initial' animate={inView?'enter':'initial'} exit='initial'
                 className={
                   "grid h-full w-full  top-0 left-0 grid-cols-6 lg:grid-cols-12 gap-[1.25em] lg:gap-[1.5em]"
                 }
               >
                 <motion.div variants={gridChild} className="col-span-1  h-full bg-brand-accent opacity-15"></motion.div>
                 <motion.div variants={gridChild} className="col-span-1 h-full bg-brand-accent opacity-15"></motion.div>
                 <motion.div variants={gridChild} className="col-span-1 h-full bg-brand-accent opacity-15"></motion.div>
                 <motion.div variants={gridChild} className="col-span-1 h-full bg-brand-accent opacity-15"></motion.div>
                 <motion.div variants={gridChild} className="col-span-1 h-full bg-brand-accent opacity-15"></motion.div>
                 <motion.div variants={gridChild} className="col-span-1 h-full bg-brand-accent opacity-15"></motion.div>
                 <motion.div variants={gridChild} className="col-span-1 h-full lg:block hidden bg-brand-accent opacity-15"></motion.div>
                 <motion.div variants={gridChild} className="col-span-1 h-full lg:block hidden bg-brand-accent opacity-15"></motion.div>
                 <motion.div variants={gridChild} className="col-span-1 h-full lg:block hidden bg-brand-accent opacity-15"></motion.div>
                 <motion.div variants={gridChild} className="col-span-1 h-full lg:block hidden bg-brand-accent opacity-15"></motion.div>
                 <motion.div variants={gridChild} className="col-span-1 h-full lg:block hidden bg-brand-accent opacity-15"></motion.div>
                 <motion.div variants={gridChild} className="col-span-1 h-full lg:block hidden bg-brand-accent opacity-15"></motion.div>
               </motion.div>
        </Section>
      }
 </AnimatePresence>
        </div>
  );
}

export default GridLines
