import Link from 'next/link'
import React from 'react'

function PageHeader({title01,title02,page}) {
  return (
    <div className='mt-5 p-2 w-full'>
    <p className='text-brand-secondary t-medium uppercase t-align-center font-body'>
       {title01}
      </p>
    <h4 className='my-4 font-custom text-heading2 leading-[1] capitalize t-align-center'>
        {title02}
      </h4>
      <div className='flex justify-center my-3'>
      <div className='trial-items bg-brand-accent'>
        <ul>
          <li className='linkOne font-body text-para '>
            <Link href={"/"}>Home</Link>
          </li>
          <li className='font-body text-para'> 
              {page}
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default PageHeader