import React from 'react'
import {
    floating1, 
    floating2, 
    floating3, 
    floating4, 
    floating5, 
  
} from '../data'

function ExLanding() {
  return (
    <div className=' w-full relative landing-background h-screen  overflow-hidden flex items-end justify-center' >
         <div className="bg single-vimeo-background  absolute top-0 left-0 w-full h-full aspect-video pb-[56.25%">
    <iframe
       
        src="https://player.vimeo.com/video/932863266?api=1&amp;background=1" 
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; encrypted-media"
        webkitAllowFullScreen
        mozAllowFullScreen
      ></iframe>
  </div>
        <h2 className='absolute text-[30vw]  translate-y-[35%] font-bold'>videographer</h2>
    </div>
  )
}

export default ExLanding


//     <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center landing-background">
//   <div className="absolute top-0 left-0 w-full h-full aspect-video pb-[56.25%">
//     {/* This container maintains the aspect ratio */}
//       <iframe
//         className=" w-full h-full min-h-[130vh] min-w-[100vw]"
//         src="https://player.vimeo.com/video/932863266?api=1&amp;background=1"
       
//         frameBorder="0"
//         allowFullScreen={true}
//         allow="autoplay; encrypted-media"
//         webkitAllowFullScreen
//         mozAllowFullScreen
//       ></iframe>
//   </div>
//   <h2 className="absolute text-[20vw] font-bold translate-y-[27%] text-white">
//     videographer
//   </h2>
// </div>

  