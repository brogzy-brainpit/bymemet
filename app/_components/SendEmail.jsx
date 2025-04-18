'use client'
import React, { useState } from 'react'
import { KlaviyoCode } from './emails.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function SendEmail(newContent) {
    const [html, setHtml] =useState("")
    const [email, setEmail] =useState("")
    const [preview, setPreview] =useState("preview goes here")
    const [isSending, setIsSending] =useState(false)
    async function sendMail(){
        setHtml(KlaviyoCode(newContent,newContent?.body.links,preview))
        if(html && email){
          setIsSending(true)
          await axios.post("/mail",{
            ht:html,
            subject:"template testing from memet O.",
            mailList:"dangabarin2020@gmail.com",
            preview
          }).then(res=>{
            setIsSending(false)
        toast.success("email sent successfully,check your inbox, or spam folder",{bodyStyle:{fontFamily:"'Roboto'",textTransform:"capitalize",fontSize:"13px",fontWeight:"600",}})
           
           })
           .catch(err=>{
              toast.error("something went wrong sending emails to test recipients email, please try again!!! ",{bodyStyle:{fontFamily:"'Poppins','Roboto'",textTransform:"capitalize",fontSize:"13px",fontWeight:"600"}})
          //  console.log(err)
          setIsSending(false)
          setTimeout(()=>{
            setHide(true)
          },3000)
      
      
           })
        }else{
          toast.error("please provide recipients email or subject first!!!",{bodyStyle:{zIndex:"2000 !important",fontFamily:"'Poppins','Roboto''",textTransform:"capitalize",fontSize:"13px",fontWeight:"600"}})
      
        }
      }
   
      
  return (
    <div className='topper  overflow-hidden w-full text-[11px] p-[10px] gap-2 absolute top-[0px] flex flex-col bg-[rgba(91,90,90,0.72)] h-full items-center justify-center'>

    <input type='email'  className='input max-w-[95%] dm-mono-regular text-stone-950' placeholder='enter email'/>
    <button onClick={(e)=>{sendTest(newContent)}} className='btn bg-[#1183AE] text-[#ffffff] border-0 hover:bg-[#000]  border-[none] dm-mono-regular'>send test</button>
    </div>
  )
}

export default SendEmail