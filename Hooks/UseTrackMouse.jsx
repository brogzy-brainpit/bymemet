"use client"
import { useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
function UseTrackMouse(cursorSize) {
    let springOption={stiffness:300,damping:20,mass:0.4};
    var mouse={
        // x:useSpring(0,springOption)
        // ,y:useSpring(0,springOption)
        x:useMotionValue(0)
        ,y:useMotionValue(0)
    }

    const movingMouse=(e)=>{
        const {clientX,clientY}=e
        mouse.x.set(clientX-cursorSize/2)
        mouse.y.set(clientY-cursorSize/2)

    }

    useEffect(()=>{
        window.addEventListener("mousemove",movingMouse)
return ()=>{ window.removeEventListener("mousemove",movingMouse)}
    },[])
  return mouse
}

export default UseTrackMouse