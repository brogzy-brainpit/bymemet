"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useScroll,motion,useTransform } from 'framer-motion'
import GalleryCursor from '@/allCursors/GalleryCursor'

function HorizontalParallax() {
    const horzRef= useRef(null)
    const [attention,setAttention] =useState(true)
    const {scrollYProgress} =useScroll({
        target:horzRef,
        offset:["start end",'end start']
    })
    const transX1= useTransform(scrollYProgress,[0,1],[0,80])
    const transX2= useTransform(scrollYProgress,[0,1],[0,-80])
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
    const AllProject=[
        {title:" snap kitchen",
            viniette:"https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=800"
            },
            {title:"girls scout",
                viniette:"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600"
                },
                {title:"pine cove",
                    viniette:"https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=600"
                    },
                    {title:"dolls kill",
                        viniette:"https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=600"
                        },
                        {title:"kindred",
                            viniette:"https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=600"
                            },
        
    ]
  return (
    <div  ref={horzRef} className='my-[4vh] w-full overflow-hidden relative '>
       <div onMouseEnter={()=>{setAttention(true)}} onMouseLeave={()=>{setAttention(false)}} className='h-full w-full bg-red-30 p-[2vw]'>
       {/* <GalleryCursor /> */}
            <h1 className='text-heading2 font-custom'>project i worked on </h1>
        <div className='flex flex-col gap-[1vh]   '>
            {AllProject.map(({title,viniette},index)=>{
                return (
                    <>

                    <Project img={viniette} title={title} attention={attention}/>
                    
                    </>

                )
            })}

        </div>
        
        
        </div>
        </div>
  )
}
 const Project=({title,img,attention},i)=>{
    return (
        <div className='clip-p'>
     <div key={i} className='font-custom bg-slate-20 border-b-emerald-200 border-b py-6 text-regular capitalize'>
        {title}
     </div>
        </div>
        
    )
 }

export default HorizontalParallax