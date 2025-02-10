import React from 'react'
import "../globals.css"
import { ContactMail, ContactPhone, Email, Instagram, LocationCity, LocationOn, PhoneAndroid, PhoneInTalk, WhatsApp, X } from '@mui/icons-material'
import PageHeader from '../_components/PageHeader'
import nodemailer from "nodemailer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
export const metadata = {
  title:{
    default: "contact memet Oumar",   
    template:"%s - memet's contact"
  },
  description: "Feel free to reach out through contact form or find my contact information below. Your feedback, questions, and suggestions are important to me as i strive to provide exceptional email development services to your business.",
};
function ContactPage() {
let sent=false;
async function submit(formData){
  "use server"
  const name=formData.get("name")
  const email=formData.get("email")
  const message=formData.get("message")
  const WebsiteOwnerEmail='dangabarin2020@gmail.com'

 try {
    let config= {
        host:"smtp.gmail.com",
        port: 465,
        secure: true, // use SSL  
         auth:{  
                user:'dangabarin2020@gmail.com',
                pass:"yabccxpsciuoynqs"
            }, 
            
             
      } 
    const mail_config={
        from :`${name} <${email}>`,
        to:WebsiteOwnerEmail,
        replyTo:email,
        subject: 'client reaching out from website!!!',
        text: message,
      }
      let transport =nodemailer.createTransport(config)
     // Send the message using the previously set up Nodemailer transport
     transport.sendMail(mail_config, (err, info) => {
      if (err) {
   return toast.error("something went wrong sending email!!!",{style:{fontFamily:"Poppins"}}) 
      }
     
      // return toast.success("email sent successfully",{style:{fontFamily:"Poppins"}})
      console.log('Delivered message %s', info);
      sent=true;
  }) 
    
 } catch (error) {
  // console.log('something went wrong sending email!!!', error);

  //  return toast.error("something went wrong sending email!!!",{style:{fontFamily:"Poppins"}}) 
 }
    
  
  
}
  return (
    <div className='hero-sectio' style={{padding:"100px 0px"}}>
      <div className='container'>
      <PageHeader page={"Contact"} title01={"Contact me"} title02={"get in touch"}/>
      <div>
        <p className='py-2 dm-mono-regular' style={{color:"#ffffff",fontSize:"25px",fontWeight:"500"}}>
          Send me a message</p>
        <p className='py-2 dm-mono-regular'>
        Feel free to reach out through contact form or find my contact information 
        below. Your feedback, questions, and suggestions are important to
         me as i strive to provide exceptional  email development services to your business.
        </p>
        <div>
        <svg width="0" height="0">
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#0F79A7", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#1DB5D0", stopOpacity: 1 }} />
                </linearGradient>
            </svg>

          
            <div className='py-2 gap-2 flex items-center dm-mono-regular'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <PhoneAndroid sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            +2349063260237
            </div>
            <div className='py-2 gap-2 flex items-center dm-mono-regular'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <Email sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            memetoumar@gmail.com
            </div>
            <div className='py-2 gap-2 flex items-center dm-mono-regular'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <WhatsApp sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            <Link href="https://wa.me/2349063260237" target='_blank'>Chat on WhatsApp</Link>
            </div>
            <div className='py-2 gap-2 flex items-center dm-mono-regular'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <Instagram sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            <Link href="https://www.instagram.com/bokchexa2020/" target='_blank'>Chat on Instagram</Link>
            </div>
            <div className='py-2 gap-2 flex items-center dm-mono-regular'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <X sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            <Link href="https://x.com/bok_cheza" target='_blank'>Chat on <X style={{fontSize:"18px"}}/></Link>
            </div>
            <div className='py-2 gap-2 flex items-center dm-mono-regular'>
            <p  className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <LocationOn sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            26 Buhari Way, Kaduna KD 800211, Nigeria
            </div>
        </div>
      </div>
      <form action={submit} style={{margin:"auto",marginTop:"2.5rem"}} className=' form-control bg-slate-900 p-4 justify-center rounded-lg max-w-screen-sm md:w-[90%]'>
        <input className='input my-4 dm-mono-regular text-[#000000]' type='email' placeholder='your email' name='email' required/>
        <input className='input my-4 dm-mono-regular text-[#000000]' type='name' placeholder="what's your name" name='name'/>

        {/* <div className='flex gap-1 justify-center items-center'>
        <input className='input m-4' type='name' placeholder="what's your name" name='name'/>
        </div> */}
        <textarea  className='textarea my-4 dm-mono-regular min-h-[200px] max-h-[400px] text-[#000000]' placeholder='enter your message here' name='message' required/>
           {sent &&(
           <p className='bg-green-500 p-2 dm-mono-regular text-[12px] rounded-md'>email sent successfully</p>
           )}
           <button type='submit' className='btn custom-btn rounded-full my-2 text-stone-100' style={{width:"auto"}}>submit</button>    
      </form>
      </div>
    </div>
  )
}

export default ContactPage