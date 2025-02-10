'use client'
import React, { useState } from 'react'

function Pagination({blogs}) {
    let perPage =4 ;

    const [currentPage, setCurrentPage]=useState(1)
const indexOfLastblog= currentPage * perPage
const indexOfFirstblog= indexOfLastblog - perPage
const currentBlogs= blogs?.slice(indexOfFirstblog,indexOfLastblog)
const designBlogs= currentBlogs.filter(ab=>ab.category=="design")
const pageNumbers=[];

// console.log('newBlogs',currentBlogs)
    const paginate=(pageNumber)=>{
        return setCurrentPage(pageNumber)
      }

      for(let i=1; i <= Math.ceil(blogs?.length / perPage); i++){
        pageNumbers.push(i)
      }
      
  return (
    <div className='flex justify-center'>
{blogs?.length===0?(
  ""
):(
  <div className='flex items-center justify-center'>
    <button className=' bg-blue-700 p-[4px] rounded-lg dm-mono-regular btn btn-primary mx-[10px] text-[12px]' onClick={()=>paginate(currentPage-1)} disabled={currentPage===1}>
      prev</button>
    {pageNumbers.slice(Math.max(currentPage -3,0),Math.min(currentPage+2,pageNumbers.length)).
    map(number=>(
      <button className={`${currentPage===number?"flex justify-center items-center p-[4px] h-[18px] w-[18px] rounded-full bg-blue-700 text-[8px] dm-mono-regular":'p-[6px] rounded-sm text-[12px] dm-mono-regular'}`} key={number} onClick={()=>{paginate(number)}}> 
        {number}
      </button>
    ))}
      <button className='bg-blue-700 p-[4px] rounded-lg dm-mono-regular btn btn-primary mx-[10px] text-[12px]' onClick={()=>paginate(currentPage+1)} disabled={blogs?.length<perPage}>
    next</button>
    </div>
)}
</div>
  )
}

export default Pagination