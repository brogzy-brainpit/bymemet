import axios, { base } from '@/axios'
import Link from 'next/link'
// import moment from 'moment'
// import Pagination from '@/components/Pagination';
import BlogLists from './BlogLists';
import {Instagram, WhatsApp, X } from '@mui/icons-material'
import Newsletter from '@/components/Newsletter';


export async function generateMetadata({ params, searchParams }, parent) {
 const title="Email Marketing Best Practices, HTML Email Design & Expert Tips | Your Guide to Better Email Campaigns"
 const description="Discover proven strategies, best practices, and expert tips on email marketing, HTML email development, and eye-catching email design. Improve your email campaigns with actionable insights and enhance your skills to engage and convert your audience effectively."; 
 return {
    title,
    description,
    openGraph: {
      title,
      description,
      url:`${base}/blogs/`,
      // images: [{url:thumbnail}],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: `@bok_cheza`,
      title,
      description,
      // images: [{url:thumbnail}],
    },
  }
}
async function getPublished() {
  const id = "66b6151748ee1c92617b2712";
  try {
    const res = await axios.get(`/blogs/${id}/blogs/get/`);
    const allBlogs = res?.data;
    // console.log("Inside getPublished - Blogs:", allBlogs?.user?.blogs); // Debugging
    return allBlogs?.user?.blogs || []; // Return blogs or an empty array
  } catch (err) {
    console.error("Error fetching blogs:", err.message);
    throw new Error("Failed to fetch blogs!!!");
  }
}

async function page() {
let blogs = [];
  try {
    blogs = await getPublished(); // Properly await the blogs from the server-side
    // console.log("blogss>>>",blogs)
  } catch (err) {
    return ;
  }
 
    
  
  const tags=["email-design-master-class","email-love","email-design-tips",'email-design-trends-2025',"html-email-tips",'learn-html-email','learn-email-trends','awwward-emails','not-just-emails','expert-email-design']
  return (
    <div className='container relative h-[100v flex-col w-full  font-custom4 flex items-center py-[20vh] '>
    {/* <div className=" container sticky top-0 h-full flex flex-col  justify-center"> */}
    <div className="h-full flex flex-col justify-between items-center ">
     <h1 className="text-[40px] text-center capitalize font-custom gap-3 flex flex-wrap">email design and dev. blogs</h1>
      <p className='dm-mono-regular text-center text-[14px] w-[80%]'>From email design best practices to effective email marketing tips and everything in between.</p>
      </div>
    
      <div className="p-2 w-full">
        {/* buttons */}
        {/* buttons */}
{/* <div className='flex gap-2 items-center justify-center flex-wrap mb-3'>
<NoMagnet>
        <p className='dm-mono-regular'>All</p>
     </NoMagnet><NoMagnet>
        <p className='dm-mono-regular'>latest</p>
     </NoMagnet>
     <NoMagnet>
        <p className='dm-mono-regular'>design</p>
     </NoMagnet>
     <NoMagnet>
        <p className='dm-mono-regular'>development</p>
     </NoMagnet>
     <NoMagnet>
        <p className='dm-mono-regular'>marketing</p>
     </NoMagnet>
     <NoMagnet>
        <p className='dm-mono-regular'>trends</p>
     </NoMagnet>

</div> */}
      {/* Layout toggle buttons */}
      {/* <GridPicker/> */} 
      {/* Product grid/list */}
      <div   className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4`}>

        <BlogLists blogs={blogs}/>

        <div className={`bg-[#0F172A] sticky top-[60px] min-h-screen h-fit overflow-hidden border rounded-lg shadow-md lg:col-span-2`}>
            <div  className='h-full w-full flex  flex-col'>
<div className='flex gap-3 flex-col w-[100%] justify-center items-center my-4'>
                  <h2 className=' text-center dm-mono-regular text-[20px]  mb-2'>let's talk</h2>
                <div className='flex flex-col gap-5 items-center w-[80%] bg-[rgba(0,0,0,0.22)]  rounded-[14px] p-4'>
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
{/* newsletter */}
<div className='flex gap-3 flex-col w-[100%] justify-center items-center my-4'>
                <div className='flex flex-col gap-5 items-center w-[80%] bg-[rgba(0,0,0,0.22)] rounded-[14px] p-4'>
                   <Newsletter/>
                </div>
</div>
{/* tags */}
<div className='flex gap-3 flex-col w-[100%] justify-center items-center'>
                  <h2 className=' text-center dm-mono-regular text-[20px] px-4 mb-4'>tags</h2>
                <div className='p-[10px]  flex flex-wrap items-center  w-[95%] bg-[rgba(0,0,0,0.22)] rounded-[14px] overflow-hidden'>
                    {tags.map((e,index)=>{
                      return (
                        <span key={index} className='dm-mono-regular text-[12px] rounded-[4px] p-[2px] m-[4px] bg-slate-500 '>
                         #{e}
                        </span>
                      )
                    })}
                </div>
</div>
            </div>
          </div>
       
      </div>
     
    </div>
      </div>
  )
}


// page().then((blogs) => {
//   console.log("Final Blogs Output:", blogs); // Should log the blogs
// }).catch((err) => {
//   console.error("Error in page execution:", err.message);
// });
export default page

// {blogs?.map((blog,index)=>{
//   console.log("blog>>>",blog)
//     return (
//         <div key={index} className='transition-transform duration-300 hover:shadow-md hover:shadow-slate-400
//     hover:scale-105 flex flex-col gap-4 lg:flex-row mb-3 lg:m-0 bg-slate-900 p-4 rounded-lg'>
//         {/* Product Image */}
// <div className='relative overflow-hidden h-[200px] w-[100%]'>
// <img src={logo.src} alt={`${blog.topic} by ${blog.publisher}`} className={` w-full object-cover ${
//     layout === "list"
//       ? "w-full h-full object-cover":"w-full h-full object-cover" } `}
// />
//     </div>

// <div className={`text-center gap-3 flex flex-grow flex-col justify-between`}>
//     <button className='dm-mono-regular text-[14px] flex justify-center bg-[#0096A5] btn-primary btn rounded-[6px] px-1 w-fit'>
//         {blog.category}
//     </button>
//   <h3 className="text-[18px]  text-left font-semibold dm-mono-regular">{blog.topic}</h3>
//   <p className="text-[10px]  text-left font-semibold dm-mono-regular text-[#85878A]">{blog.content}</p>
// <div className='flex gap-3'>
//     <img className='w-[50px] h-[50px] rounded-full dm-mono-regular' alt='memet-oumar' src='https://bymemet.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fele.f2c79bdd.jpg&w=750&q=75'/>
//     <div className='flex flex-col justify-center items-start dm-mono-regular'>
//         <h1 className='text-[12px] dm-mono-regular font-semibold'>{blog.publisher}</h1>
//         <h1 className='text-[10px] dm-mono-regular text-[#85878A]'>
//           {moment().from(blog.createdAt,true)} 
//           ago
//           </h1>
//         </div>

// </div>
// </div>
// </div>
//     )
// })}