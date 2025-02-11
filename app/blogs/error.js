'use client'
function error(error) {
    console.log(error.error.message)
  return (
    <div className='container relative h-[100vh] flex-col w-full  font-custom4 flex items-center py-[20vh] '>
        
        <p className="dm-mono-regular text-[40px] md:text-[80px]">
        {/* {error?.error.message} */}
        can't fetch blog
        </p>
        </div>
  )
}

export default error