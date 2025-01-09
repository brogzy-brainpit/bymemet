import { useSpring,motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

function Magnetic({children,...props}) {
    const magnet =useRef(null)
    const mouse= {x:useSpring(0,{damping:15,stiffness:150,mass:0.1}),y:useSpring(0,{damping:15,stiffness:150,mass:0.1})}
    // useEffect(()=>{
 
    // },[])
    const mouseMove=(e)=>{
        const {clientX,clientY} =e
        const {height,width,top,left}=magnet.current.getBoundingClientRect()
          const x=clientX-(left+ width/2)
          const y=clientY-(top + height/2 )
        mouse.x.set(x)
        mouse.y.set(y);
    }
    const MouseLeave=()=>{
        mouse.x.set(0)
        mouse.y.set(0);
    //     const {height,width,top,left}=magnet.current.getBoundingClientRect()
    //  console.log({height,width})
    }
  return (
    <motion.div {...props}  style={{x:mouse.x,y:mouse.y}}
     ref={magnet} 
     onMouseMove={mouseMove} 
     onMouseLeave={MouseLeave}>

        {children}
    </motion.div>
  )
}

export default Magnetic