"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import {memet} from '../../data'
import Image from "next/image"
export default function Gallery() {

  const container = useRef(null)

  useEffect(() => {

    const tiles = container.current.querySelectorAll(".tile")

    tiles.forEach((tile) => {

      const paths = tile.querySelectorAll(".path")
      const label = tile.querySelector(".label")

      const lengths = []

      paths.forEach((p) => {
        const len = p.getTotalLength()
        lengths.push(len)

        p.style.strokeDasharray = len
        p.style.strokeDashoffset = len
      })

      tile.addEventListener("mouseenter", () => {

        gsap.killTweensOf([...paths, label])

        gsap.to(paths, {
          strokeDashoffset: 0,
          attr: { "stroke-width": 700 },
          duration: 1.5,
          ease: "power2.out"
        })

        gsap.to(label, {
          opacity: 1,
          duration: .5,
          delay: .4
        })

      })

      tile.addEventListener("mouseleave", () => {

        gsap.killTweensOf([...paths, label])

        gsap.to(paths, {
          strokeDashoffset: (i) => lengths[i],
          attr: { "stroke-width": 100 },
          duration: 1
        })

        gsap.to(label, {
          opacity: 0,
          duration: .3
        })

      })

    })

  }, [])

  return (

    <div
      ref={container}
      className=" mx-auto"
    >

      <div className="tile relative bg-slate-600 rounded-full aspect-[4/4] overflow-hidden ">
      <Image alt='memet oumar aka bokchexa' src={memet} className='aspect-[4/4] object-cover w-[15em] rounded-full' />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center scale-[1.5]">
          <svg viewBox="0 0 2453 2273" className="absolute w-full h-full">
            <path
              className="path"
              d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
              stroke="#c9a55a"
              strokeWidth="200"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

        </div>

        <div className="label absolute top-1/2 left-0 translate-x-1/2 right-0 p-6 opacity-0 text-black">
          <span className="block font-custom text-heading3 font-bold">
            About Me
          </span>
        </div>

      </div>

    </div>

  )
}








































