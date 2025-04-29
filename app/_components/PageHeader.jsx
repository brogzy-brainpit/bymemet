import Link from 'next/link'
import React from 'react'

function PageHeader({title01,title02,page}) {
  return (
    <div className='mt-5 p-2 w-full'>
    <p className='custom-t-color t-medium uppercase t-align-center dm-mono-regular'>
       {title01}
      </p>
    <h4 style={{marginTop:"10px"}} className='font-custom  t-large capitalize t-align-center'>
        {title02}
      </h4>
      <div className='flex justify-center my-3'>
      <div className='trial-items'>
        <ul>
          <li className='linkOne font-custom '>
            <Link href={"/"}>Home</Link>
          </li>
          <li className='font-custom '> 
              {page}
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default PageHeader