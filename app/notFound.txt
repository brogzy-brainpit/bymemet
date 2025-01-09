import React from 'react'


function notFound() {
  return (
    <div  className='relative h-[100v   w-full  font-custom4 flex items-center py-[10vh] '>
    {/* <div className=" container sticky top-0 h-full flex flex-col  justify-center"> */}
    <div className=" flex justify-center container sticky top-0 h-full w-full flex-col text-[2vw] text-center dm-mono-regular bg-slate-500">
    <div className="flex-col text-[25vw] text-center dm-mono-regular bg-slate-500">
     404 
     </div>
     <div className='text-[40px] flex justify-center '>
        page not found
     </div>
      </div>
      </div>
  )
}

export default notFound