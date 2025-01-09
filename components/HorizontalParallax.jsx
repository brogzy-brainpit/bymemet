"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { useScroll,motion,useTransform } from 'framer-motion'

function HorizontalParallax() {
    const horzRef= useRef(null)
    const {scrollYProgress} =useScroll({
        target:horzRef,
        offset:["start end",'end start']
    })
    const transX1= useTransform(scrollYProgress,[0,1],[0,150])
    const transX2= useTransform(scrollYProgress,[0,1],[0,-150])
    const pic=[
        {img:"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600",color:"#b0a8b9"},
        {img:"https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=600",color:"#bea6a0"},
        {img:"https://images.pexels.com/photos/90764/man-studio-portrait-light-90764.jpeg?auto=compress&cs=tinysrgb&w=600",color:"#b0a8b9"},
        {img:"https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=600",color:"#4b4453"},
        {img:"https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&w=600",color:"#faccff"},
    ]
    const pic2=[
        {img:"https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800",color:"#ff6f91"},
        {img:"https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",color:"#ff9671"},
        {img:"https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=800",color:"#008f7a"},
        {img:"https://images.pexels.com/photos/3916017/pexels-photo-3916017.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1",color:"#2c73d2"},
        {img:"https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=800",color:"#c4fcef"},
    ]
  return (
    <div ref={horzRef} className='mt-[10vh] w-full p-10 pb-0 overflow-hidden bg-black '>
        <div className='flex flex-col gap-[3vh] w-fu w-[140vw] relative left-[-25vw] '>
       <Horz x={transX1} pictures={pic} color=" #eeeeee"/>
       <Horz x={transX2} pictures={pic2} color=" #9191ba"/>

        </div>
        
        
        </div>
  )
}
 const Horz=({color,pictures,x},i)=>{
    return (
        <motion.div key={i} style={{x}} className='pointer-events-none flex w-[100%] h-[30vh] gap-[1vw]  '>
            {pictures.map(({color,img},index)=>{
                return (
                    <div key={index} className=' w-[50%] p-[20px  flex items-center justify-center'  style={{backgroundColor:color}} >
                        <div className='w-[90%] h-[90%] relative'>
                        <Image alt="image" src={img} className='object-cover' fill={true}/>
                        </div>
                        </div>
                )
            })}
        </motion.div>
    )
 }

export default HorizontalParallax