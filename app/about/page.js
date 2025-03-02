import React from 'react'
import "../globals.css"
import Image from 'next/image'
import AboutImage from "../../assets/jahid.jpg"
import PageHeader from '../_components/PageHeader'
import Link from 'next/link'
import {
  free,ele
 
} from '../../data'
import Compatibility from '../_components/Compatibility'
import { base } from '@/axios'

// import ReviewShow from '../_components/Reviews'
export const metadata = {
title:{
  default: "about memet Oumar",   
},
description: "get to know your unique email designer & developer",
openGraph: {
      title:"about memet Oumar",
      description:"get to know your unique email designer & developer",
      url:`${base}/about`,
      images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png'}],
      // images: [{url: `open-graph/?slug=${slug}`}],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@bok_cheza",
      title:"about memet Oumar",
      description:"get to know your unique email designer & developer",
      images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png',width:1200,height:630,alt:`image for memet logo`}],
    },
};
function AboutPage() {
  return (
    <div className='hero-sectio ' style={{padding:"100px 0px"}}>
      
      <div className='container'>
     <PageHeader page={"About"} title01={"About memet"} title02={"who i am?"}/>
      <div className='breaker py-16'>
      <div className='breaker-child' style={{width:"45% !important"}}>
      <div className='w-full p-2.5 flex justify-center'>
        <Image alt='about-person-image' className='py-2 h-auto rounded-xl'  src={ele} style={{color:"#000F38",fontSize:"25px",fontWeight:"500",width:"100%"}}/>  
        {/* <img src='https://themebing.com/wp/amike/wp-content/uploads/elementor/thumbs/me-01-oiscg5p6xhb0wn2ew54ye53hi21rk30p2dh5pmlw5c.png' /> */}
      </div>
      </div>
      <div className='breaker-child '>
       
        <p className='py-2 t-medium dm-mono-regular'>
        Let’s rewind to 2017—a year that changed everything for me. I’m Memet Oumar, the founder, owner, and the one-guy powerhouse behind inboxified and byMemet. Back then, I was a web developer with an appetite for challenges, and when I was asked to code my first email, I dove in headfirst. In the midst of crafting that email, a lightbulb moment hit: coding emails is really just putting together a bunch of boxes. That insight not only led to a triumphant first email but also sparked the emergence of a true email coding enthusiast.
        </p>
        <p className='py-2 t-medium dm-mono-regular'>

Since that memorable day, I’ve made it my mission to push email coding practices and standards to new heights. I firmly believe that every email user deserves a quality experience—regardless of whether their email client is cutting-edge or a bit old-school. It’s simply not acceptable for anyone to be stuck with a subpar experience because of technical limitations. For me as a developer—and for you as someone who relies on sending these messages—we must collaborate to meet users where they are. If making an email shine in Outlook means writing extra code, then I’m all in. Every email client comes with its own quirks, but it’s my responsibility to navigate those challenges and craft emails that deliver their message in the best possible way. 
</p>
 {/* <div className='breaker'>
       <div className='breaker-child'>
       <div className='my-2'>
        <span className='text-red-500 capitalize t-bold'>Name:</span>
        <p>memet oumar</p>

        </div>
        <div className='my-2'>
        <span className='text-red-500 capitalize t-bold'>Email:</span>
        <p>  <Link target='_blank' href="mailto:memetoumar@gmail.com">memetoumar@gmail.com</Link></p>
       


        </div>
       
</div>
<div className='breaker-child'>
        <div className='my-2'>
        <span className='text-red-500 capitalize t-bold'>Phone:</span>
        <p><Link target='_blank' href="tel:+2349063260237">+2349063260237</Link></p>
        </div>
       <div className='my-2'>
        <span className='text-red-500 capitalize t-bold'>Fiverr</span>
        <p>@bymemet</p>
        </div>
       
</div>
       </div> */}
      </div>
      
      </div>
   
      <h3 className='t-large t-bold mb-4 capitalize dm-mono-regular'>
          what you can expect?
        </h3>
<p className='py-2 t-medium dm-mono-regular'>
Once you contact me, we’ll set up an introductory call or chat to flesh out what kind of project you have. The most common request I get is to take a PSD, AI, or Sketch file and code it into an email that looks great in all clients. If you know the email client makeup of your audience, I can suggest some coding techniques that may enhance your subscriber experience. We then agree on a due date, and I begin coding. When production is complete, I will send you a ZIP file containing the HTML document and optimized images, as well as a link to screenshots of how your email will look in all major email clients.
</p>
<p className='py-2 t-medium dm-mono-regular'>
The process is the same for an email template. If you need a modular system, I will need access to your email service provider platform so that I may set up the modules and create the first couple of emails.
</p>
      
<Compatibility/>
            {/* <ReviewShow/> */}
      </div>
    </div>
  )
}

export default AboutPage











































