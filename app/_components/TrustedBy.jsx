import React from 'react'
import Marquee from "react-fast-marquee";

function TrustedBy() {
    const companies=[
        {img:"https://emailsyall.com/wp-content/uploads/2023/09/home_chef_ey.png"},
        {img:"https://emailsyall.com/wp-content/uploads/2023/09/cameo_ey.png"},
        {img:"https://emailsyall.com/wp-content/uploads/2023/09/fundrise_ey.png"},
        {img:"https://emailsyall.com/wp-content/uploads/2023/09/mosaic_ey.png"},
        {img:"https://emailsyall.com/wp-content/uploads/2021/12/ey_girl_scouts.png"},
        {img:"https://emailsyall.com/wp-content/uploads/2020/09/npr_logo.png"},
        {img:"https://emailsyall.com/wp-content/uploads/2023/09/south_dakota_ey.png"},
        {img:"https://emailsyall.com/wp-content/uploads/2021/12/ey_discovery.png"},
        
      ]
  return (
    <div className='container py-2'>
 <Marquee gradient={true} gradientWidth={140} >
        {companies.map(({img},index)=>{
          return (
      <img key={index} style={{height:"90px",padding:"0px 25px"}} className='normal-ig' src={img}/>
          )
        })}
    

        </Marquee>

    </div>
  )
}

export default TrustedBy