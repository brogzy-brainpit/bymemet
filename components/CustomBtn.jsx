import React from 'react'
import Rounded from "../common/RoundedButton"
// import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
function CustomBtn({title,href,className}) {
  return (
     <Link href={href} className ={` ${className} cursor-pointer bg-brand-text-dark p-[4px] min-w-[150px] max-w-fit z-[10] flex justify-between items-center rounded-full`}>
 <p className='text-brand-text  mx-2 font-normal text-[14px] capitalize font-bold'>{title}</p>
   <Rounded secondary={false} backgroundColor='#0096a5'>
                 <Link target='blank' href="https://www.figma.com/design/KCs3m76HBZKEPwk0CMAfYq/designs-by-Memet?node-id=0-1&t=0ciGeZJIRFvBLT7z-1" className='font-body '>designs only</Link>
               </Rounded>

     </Link>
  )
}

export default CustomBtn