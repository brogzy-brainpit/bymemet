"use client"
import axios from '@/axios'
import Image from 'next/image'
import React, { useState } from 'react'
import NoMagnet from "@/common/RoundedButton/NoMagnet";
import instagram from "./instagram.png"
import twitter from "./twitter.png"
import github from "./github.png"
import Link from 'next/link'
import moment from 'moment'
import Pagination from '@/components/Pagination';
const truncateContent = (content, wordLimit = 16) => {
    const words = content.split(' '); // Split the content by spaces
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'; // Join the first 'wordLimit' words and add '...'
    }
    return content; // Return the full content if it's within the limit
  };


function BlogLists({blogs}) {
    const [allBlogs,setAllBlogs]= useState(blogs)
    const layout = "grid"; // "grid" or "list"
    let perPage =4 ;

        const [currentPage, setCurrentPage]=useState(1)
        const [indexOfLastblog]=useState(currentPage * perPage)
        const [indexOfFirstblog]=useState(indexOfLastblog - perPage)
    const [currentBlogs,setCurrentBlogs]=useState(allBlogs?.slice(indexOfFirstblog,indexOfLastblog))
    // const currentBlogs= allBlogs?.slice(indexOfFirstblog,indexOfLastblog)
    const designBlogs= currentBlogs.filter(ab=>ab.category=="design")
    const pageNumbers=[];
    const filterBlogs=(value)=>{
        if(value=="all"){
            return setAllBlogs(blogs)
            // return setAllBlogs(allBlogs?.slice(indexOfFirstblog,indexOfLastblog))
        }else if(value=="latest"){
            setAllBlogs( blogs?.sort((a, b) => {
              console.log(a)
                const dateA = moment(a.createdAt);
                const dateB = moment(b.createdAt);
            
                if (dateA.isBefore(dateB)) return 1;
                if (dateA.isAfter(dateB)) return -1;
                return 0;
            }))

        }else{
            return  setAllBlogs(blogs.filter(ab=>ab.category==value))
        }
      }

      const paginate=(pageNumber)=>{
        console.log(currentPage)
        return setCurrentPage(pageNumber)
      }

      for(let i=0; i <  Math.ceil(blogs?.length / perPage); i++){
        pageNumbers.push(i)
      }
  return (
    <div className={`lg:col-span-4 flex gap-2 flex-col`} >
            <h2 style={{borderLeft:"3px gray solid"}} className='dm-mono-regular text-[30px] px-4 mb-4'>All blogs</h2>
            <div className='flex gap-2 items-center justify-center flex-wrap mb-3'>
            <NoMagnet onClick={()=>{filterBlogs("all")}}>
        <p className='dm-mono-regular' >All</p>
     </NoMagnet>
     <NoMagnet onClick={()=>{filterBlogs("tips")}}>
        <p className='dm-mono-regular' >Tips</p>
     </NoMagnet>
     <NoMagnet onClick={()=>{filterBlogs("latest")}}>
        <p className='dm-mono-regular' >latest</p>
     </NoMagnet>
     <NoMagnet onClick={()=>{filterBlogs("design")}}>
        <p className='dm-mono-regular' >design</p>
     </NoMagnet>
     <NoMagnet onClick={()=>{filterBlogs("html-emails")}}>
        <p className='dm-mono-regular' >Html-emails</p>
     </NoMagnet>
     <NoMagnet onClick={()=>{filterBlogs("marketing")}}>
        <p className='dm-mono-regular' >marketing</p>
     </NoMagnet>
     <NoMagnet onClick={()=>{filterBlogs("trends")}}>
        <p className='dm-mono-regular' >trends</p>
     </NoMagnet>

</div>     
 
{allBlogs.length>0?allBlogs?.map((blog,index)=>{
    return (
      <Link href={`/blogs/${blog?.slug}`}>
        <div key={index} className='transition-transform duration-300 hover:shadow-md hover:shadow-slate-400
    hover:scale-105 flex flex-col gap-4 lg:flex-row mb-3 lg:m-0 bg-slate-900 p-4 rounded-lg'>
        {/* Product Image */}
<div className='relative overflow-hidden min-h-[160px] h-[100%] w-[100%] flex-[2]'>
<img src={blog?.thumbnail} alt={`${blog.topic} by ${blog.publisher}`} className={`dm-mono-regular w-full object-cover ${
    layout === "list"
      ? "w-full h-full object-cover":"w-full h-full object-cover" } `}
/>
    </div>

<div className={`text-center gap-1 flex flex-[3] flex-col justify-between`}>
<div className='flex flex-col gap-2'>
    <p className='dm-mono-regular text-[14px] flex justify-center items-center bg-[#0096A5] p-[4px] border-[#0096A5] rounded-[6px] px-1 w-fit'>
        {blog.category}
    </p>
  <h3 className="text-[18px]  text-left font-semibold dm-mono-regular">{blog.topic}</h3>
  <p style={{wordBreak:"break-all"}} className="text-[10px] break-words text-left font-semibold dm-mono-regular text-[#85878A]">
    {truncateContent(blog.description2)}
    </p></div>
<div className='flex gap-3 justify-between'>
<div className='flex gap-3'>
    <img className='w-[50px] h-[50px] rounded-full dm-mono-regular' alt='memet-oumar' src={blog?.avatar}/>
    <div className='flex flex-col justify-center items-start dm-mono-regular'>
        <h1 className='text-[12px] dm-mono-regular font-semibold'>{blog.publisher}</h1>
        <h1 className='text-[10px] dm-mono-regular text-[#85878A]'>
          {moment().from(blog.createdAt,true)} ago
          </h1>
        </div>
        </div>

 <div className='flex flex-row justify-center items-end dm-mono-regular'>
        <h1 className='text-[10px] dm-mono-regular text-[#85878A]'>
         initial release
          </h1>
        </div>
        </div>
        

</div>
</div>
      </Link>
    )
}):
<>
<div className='dm-mono-regular flex justify-center
    gap-4 lg:flex-row mb-3 lg:m-0 bg-slate-900 p-4 rounded-lg'>
no blogs founds
</div>
</>
}
{/* <Pagination blogs={allBlogs} setAllBlogs={setAllBlogs} /> */}
{/* <div className='flex justify-center'>
{currentBlogs?.length===0?(
  ""
):(
  <div className='flex items-center justify-center'>
    <button className=' bg-blue-700 p-[4px] rounded-lg dm-mono-regular btn btn-primary mx-[10px] text-[12px]' onClick={()=>paginate(currentPage-1)} disabled={currentPage===1}>
      prev</button>
    {pageNumbers.slice(Math.max(currentPage -3,0),Math.min(currentPage+1,pageNumbers.length)).
    map(number=>(
      <button className={`${currentPage===number?"flex justify-center items-center p-[4px] h-[18px] w-[18px] rounded-full bg-blue-700 text-[8px] dm-mono-regular":'p-[6px] rounded-sm text-[12px] dm-mono-regular'}`} key={number} onClick={()=>{paginate(number)}}> 
        {number}
      </button>
    ))}
      <button className='bg-blue-700 p-[4px] rounded-lg dm-mono-regular btn btn-primary mx-[10px] text-[12px]' onClick={()=>paginate(currentPage+1)} disabled={currentBlogs?.length>perPage}>
    next</button>
    </div>
)}
</div> */}
           
          </div>
  )
}

export default BlogLists