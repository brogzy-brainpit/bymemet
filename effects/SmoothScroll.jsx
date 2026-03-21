"use client"
import React, { useEffect } from 'react'
import Lenis from 'lenis'

function SmoothScroll({children}) {

useEffect(()=>{
    const lenis = new Lenis({
        // easing: (t) => t * (2 - t), // Use a custom easing function
      });
      
      // lenis.on('scroll', ({ scroll }) => {
      //   // Increase or decrease the speed based on the user's scroll
      //   lenis.speed = 0.2 // slows down the scroll by 20%
      // })
      // To start listening to the scroll events
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)
},[])
  return (
    <div>
        {children}
    </div>
  )
}

export default SmoothScroll
