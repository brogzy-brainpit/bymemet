import axios, { base, baseApi } from '@/axios'
import React from 'react'
import Link from 'next/link'
import BlogContent from './BlogContent';
import Compatibility from '@/app/_components/Compatibility';
import Newsletter from '@/components/Newsletter';
import { Instagram, WhatsApp, X } from '@mui/icons-material';


export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const param = (await params).id
  const id = "66b6151748ee1c92617b2712";
  // fetch data
  const product = await fetch(`${baseApi}/blogs/${id}/blogs/get/${param}`).then((res) => res.json()).catch(err=>{console.log(err)})
 const title= product?.user.blogs[0].topic
 const description= product?.user.blogs[0].description2
 const thumbnail= product?.user.blogs[0].thumbnail
 const url= product?.user.blogs[0].url
 const snug= product?.user.blogs[0].snug
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url:`${base}/blogs/${snug}`,
      images: [{url:thumbnail}],
      // images: [{url: `open-graph/?slug=${slug}`}],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@YourTwitterHandle",
      title,
      description,
      images: [{url:thumbnail,width:1200,height:630,alt:`image for ${title}`}],
    },
  }
}
 

async function getallBlogs(category) {
  const id = "66b6151748ee1c92617b2712";
  try {
    const res = await axios.get(`/blogs/${id}/blogs/get/`);
    const allBlogs = res?.data;
    // console.log("Inside getPublished - Blogs:", allBlogs?.user?.blogs); // Debugging
    return allBlogs?.user?.blogs.filter((e)=>{
      return e.category == category
    }) || []; // Return blogs or an empty array
  } catch (err) {
    console.error("Error fetching blogs:", err.message);
    throw new Error("Failed to fetch blogs!!!");
  }
}

async function getPublished(params) {
    const id = "66b6151748ee1c92617b2712";
    try {

      const res = await fetch(`${baseApi}/blogs/${id}/blogs/get/${params}`).then((res) => res.json()).catch(err=>{console.log(err)})
      // product?.user.blogs[0].topic

      const allBlogs = res;
      return allBlogs?.user?.blogs || []; // Return blogs or an empty array
    } catch (err) {
      console.error("Error fetching blogs:", err.message);
      throw new Error("Failed to fetch blogs!!!");
    }
  }
async function page({params}) {
    let blog = [];
    let allblog = [];
    try {
        blog = await getPublished(params?.id); // Properly await the blogs from the server-side
        allblog = await getallBlogs(blog[0]?.category); // Properly await the blogs from the server-side
      console.log("single blog is here>>>",allblog)
    } catch (err) {
        return ;
      }
    // console.log(params)

    // try {
    //     blogs = await getPublished(params.id); // Properly await the blogs from the server-side        
    //   } catch (err) {
    //     return ;
    //   }
    
  const layout = "grid"; // "grid" or "list"
  const tags=["email-design-master-class","email-design-tips",'email-design-trends-2025',"html-email-tips",'learn-html-email','learn-email-trends','awward-emails','not-just-emails','expert-email-design']
  

  
  return (
    <div className='container relative h-[100v flex-col w-full  font-custom4 flex items-center py-[20vh] '>
    {/* <div className=" container sticky top-0 h-full flex flex-col  justify-center"> */}
    <div className="h-full flex flex-col justify-between items-center ">
     <h1 className="text-[40px] text-center capitalize font-custo dm-mono-regular gap-3 flex flex-wrap">{blog[0]?.topic}</h1>
      {/* <p className='dm-mono-regular text-center text-[14px] w-[80%]'>From email design best practices to effective email marketing tips and everything in between.</p> */}
      </div>
    
      <div className="p-2 w-full">
      <div   className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4`}>

        <div className={`bg-[#0F172A] rounded-[20px]  lg:col-span-4 flex  flex-col relative`} >
         
        <div className='border-[2px] border-zinc-500 p-[4px] rounded-[20px]'>
              <img src={blog[0]?.thumbnail} width={400} height={300} className='md:h-[350px] h-[300px] rounded-t-[20px] object-cover w-full'/>
            </div>
            {/* lorem20 abeh fgf f wfwfgw hwgfg wfwhfwfgwg wifg wifgiuow */}
         <BlogContent createdAt={blog[0].createdAt} img={blog[0].avatar}  body={blog[0].content}/>
            <div className=' w-full py-[60px] md:px-[10px] px-[0px] relative dm-mono-regular mt-[-40px] z-[0] rounded-[20px] bg-[#0F172A] border-[2px] border-zinc-500'>
            <p className='dm-mono-regular text-[20px] pb-[30px]'> contents related to {blog[0]?.category}</p>
          <div className='flex flex-wrap gap-2 w-full justify-center'>
          {allblog?.map(({topic,thumbnail,slug},index)=>{
            return (
            <Link href={`/blogs/${slug}`}>
              <div key={index} className='flex flex-wrap w-[47%] md:w-[190px] h-auto rounded-2xl overflow-hidden '>
                <div className='relative w-full'>
                  <img className='w-full object-cover' src={thumbnail}/>
                  <p className='w-full text-[11px] p-[10px] absolute top-[0px] bg-[rgba(0,0,0,0.72)] h-full flex items-end'>{topic}</p>
                </div>
                </div></Link>
            )
          })}
          </div>
              
            </div>
          </div>

        <div className={`sticky top-[60px] min-h-screen h-fit overflow-hidden border rounded-lg shadow-md lg:col-span-2`}>
            <div  className='h-full w-full flex  flex-col'>

<div className='flex  gap-3 flex-col w-[100%] justify-center items-center my-4'>
                  <h2 className=' text-center dm-mono-regular text-[20px]  mb-2'>let's talk</h2>
                <div className='relative mt-4 flex flex-col gap-5 items-center w-[80%] bg-[#0F172A] rounded-[14px] p-4 pt-[20px]'>
                     <div class="entry">
                    <a class="entry-author-image">
                      <img alt="blogs published by memet" src={blog[0]?.avatar} class="avatar avatar-84 photo lazyloaded" height="84" width="84" data-src="https://mailbakery.s3.amazonaws.com/wp-content/uploads/2017/04/27071827/Iveta.jpg" decoding="async" data-eio-rwidth="84" data-eio-rheight="84"/>
                      	</a>
                  </div>
                   <p className='dm-mono-regular'>Want to find out how I can solve problems specific to your business? Let's talk.</p>
                   <div className='flex gap-4'>
                    <Link target='blank' href={"https://x.com/bok_cheza"}>
                   <div className='p-3 rounded-full flex justify-center items-center h-[50px] w-[50px] bg-stone-900 '>
                     <X sx={{color:"#0096A5",fontSize:"30px"}}/>
                    </div>
                    </Link>
                    <Link href="https://wa.me/2349063260237" target='_blank'>
                    <div className=' p-3 rounded-full flex justify-center items-center h-[50px] w-[50px] bg-stone-900 '>
                    <WhatsApp sx={{color:"#0096A5",fontSize:"30px"}}/>
                    </div>
                    </Link>
                    <Link target='blank' about='link-to-memets instagram' href={"https://www.instagram.com/bokchexa2020/"}>
                    <div className='p-3 rounded-full flex justify-center items-center h-[50px] w-[50px] bg-stone-900 '>
                    <Instagram sx={{color:"#0096A5",fontSize:"30px"}}/>
                    </div>
                    </Link>
                   

                   </div>
                </div>
</div>
<div className='flex gap-3 flex-col w-[100%] justify-center items-center my-4'>
                <div className='flex flex-col gap-5 items-center w-[80%] bg-[#0F172A] rounded-[14px] p-4'>
                   <Newsletter/>
                </div>
</div>
<div className='w-full flex gap-3 flex-col justify-center items-center'>
                  <h2 className=' text-center dm-mono-regular text-[20px] px-4 mb-4'>tags</h2>
                <div className='p-[10px]  flex flex-wrap items-center  w-[80%] bg-[#0F172A] rounded-[14px] overflow-hidden'>
                    {blog[0]?.tag.split(",").map((e)=>{
                      return (
                        <span className='dm-mono-regular text-[12px] rounded-[4px] p-[2px] m-[4px] bg-slate-500 '>
                         #{e.trim()}
                        </span>
                      )
                    })}
                </div>
</div>

            </div>
          </div>
       
      </div>
     
    </div>
    <Compatibility/>
      </div>
  )
}

function Button({text}){
    return (
        <button className='px-4 py-2 rounded-full border btn dm-mono-regular'>{text}</button>
    )
}
export default page