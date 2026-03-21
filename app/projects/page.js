import React from 'react'
import "../globals.css"
import { ContactMail, ContactPhone, Email, Instagram, LocationCity, LocationOn, PhoneAndroid, PhoneInTalk, WhatsApp, X } from '@mui/icons-material'
import PageHeader from '../_components/PageHeader'
import nodemailer from "nodemailer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Projects from "@/components/Projects";
import { base } from '@/axios'
export const metadata = {
  title:{
    default: "contact memet Oumar",   
    template:"%s - memet's contact"
  },
  description: "Feel free to reach out through contact form or find my contact information below. Your feedback, questions, and suggestions are important to me as i strive to provide exceptional email development services to your business.",
   openGraph: {
         title:"contact Memet Oumar",
         description:"contact me through my socials and lets figure out how we can solve your email issues",
         url:`${base}/contact`,
         images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png'}],
         // images: [{url: `open-graph/?slug=${slug}`}],
         type: "website",
       },
       twitter: {
         card: "summary_large_image",
         site: "@bok_cheza",
         title:"contact Memet Oumar",
         description:"contact me through my socials and lets figure out how we can solve your email issues",
         images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png',width:1200,height:630,alt:`image for memet logo`}],
       },
};
function AllProjects() {
  return (
    <div className='hero-sectio' style={{padding:"100px 0px"}}>
      <div className='container'>
      <PageHeader page={"Projects"} title01={"Explore some of"} title02={"my projects"}/>
      <div className='pt-[450px]'>
     <Projects/>
      </div>
      </div>
    </div>
  )
}

export default AllProjects