import React from 'react'


function notFound() {
  return (
    <div  className='relative  w-full h-full  font-custom4 flex items-center py-[12vh] '>
    {/* <div className=" container sticky top-0 h-full flex flex-col  justify-center"> */}
    <div className=" flex justify-center items-center container h-full w-full flex-col text-[2vw] text-center dm-mono-regular">
    <div className="flex-col text-[20vw] text-center dm-mono-regular ">
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





