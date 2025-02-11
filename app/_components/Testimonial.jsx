"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// import Star from "@mui/icons-material/Star";
import { reviews } from "@/info";
import { Star } from "@mui/icons-material";
// import FormatQuoteOutlined from "@mui/icons-material/FormatQuote";
export default function TestimonialsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
           {reviews.map((e,index)=>{
            return  <div key={index} className="bg-[transparent]">
            <div  className="flex p-4">
            <div className="pr-1">
            <svg width="0" height="0">
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#0F79A7", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#1DB5D0", stopOpacity: 1 }} />
                </linearGradient>
            </svg>
            {/* <FormatQuoteOutlined sx={{color:"blue",fontSize:"45px"}} style={{ fill: "url(#gradient1)"}} /> */}
                
        {/* <Image alt="review quote" src={quote} height={30} width={30} style={{width:"40px",height:"40px",marginRight:"30px",borderRadius:"50%"}}/> */}
            </div>
            <div className="hero-desc">
                <p className='dm-mono-regular capitailze italic mb-3 ' style={{fontWeight:"500"}}>
                {e.para}
                </p>
                <div style={{display:"flex"}}>
                    {Array(5).fill().map((e,index)=>{
                      return <Star key={index} sx={{ color: '#1183AE', fontSize: 20 }}/>
                      // return <StarHalfOutlined sx={{ color: 'blue', fontSize: 18 }}/>
                    })}
                </div>
            </div>
        </div>
        <div  className="flex bg-slate-54400 p-4">
            <div>
        <img alt="service reviewers image" src={e.img} height={70} width={60} className="w-12 h-auto mr-5 rounded-full"/>
            </div>
            <div>
                <h4 className='capitailze t-bold dm-mono-regular'>{e.name}</h4>
               <p className="dm-mono-regular">{e.title}</p>
            </div>
        </div>
        </div>
           })}
           
            
        </Slider>
    );
}
