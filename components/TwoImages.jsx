import { useScroll,motion } from 'framer-motion'
import React from 'react'

function TwoImages() {
   
  return (
    <div className=' container  breaker gap-5 flex justify-between items-center'>
        <div className='breaker-child w-[70%] '>
            <img src='https://assets-global.website-files.com/6629ca2f6851b8bebd4dab17/6629ca2f6851b8bebd4dab84_DSC01245-2-min-min-p-800.jpg'/>
        </div>
      
        <div className='breaker-child overflow-hidden'>
            <motion.div style={{scale:1.2,transition:"all linear 0.2s"}}  whileHover={{scale:1}}>

            <img src='https://assets-global.website-files.com/6629ca2f6851b8bebd4dab17/6629ca2f6851b8bebd4dab40_Jan_2024_Photoshoot_7_flipped-p-500.jpg'/>
            </motion.div>
        </div>
        
        </div>
  )
}

export default TwoImages