export const dynamic = "force-dynamic"
import GridColumn from '@/app/layout/GridColumn';
import Section from '@/app/layout/Section';
import axios, { base } from '@/axios'
import ProjectsSlider from '../projectsSlider';
import SlideUpText from '@/effects/SlideUpText';
import PageHeader from '@/app/_components/PageHeader';

async function getPublished() {
    const id = "66b6151748ee1c92617b2712";
    try {
      const res = await axios.get(`/blogs/${id}/get/templates`, {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
    //   /:id/blogs/get/templates
      const allBlogs = res?.data;
    //   console.log("Inside getPublished - Blogs:", allBlogs?.user?.templates); // Debugging
      return allBlogs?.user?.templates || []; // Return blogs or an empty array
    } catch (err) {
      console.error("Error fetching blogs:", err.message);
      throw new Error("Failed to fetch blogs!!!");
    }
  }
  export const metadata = {
    title:"Osmo supply - email case study",
    description: "explore the kind of emails i designed and developed for osmo supply.",
     openGraph: {
           title:"my email dev. work samples",
           description:"explore the kind of emails i designed and developed for my clients and agencies.",
           url:`${base}/works`,
           images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png'}],
           // images: [{url: `open-graph/?slug=${slug}`}],
           type: "website",
         },
         twitter: {
           card: "summary_large_image",
           site: "@bok_cheza",
           title:"my email dev. work samples",
           description:"explore the kind of emails i designed and developed for my clients and agencies.",
           images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png',width:1200,height:630,alt:`image for memet logo`}],
         },
  };
  
  async function page() {

//   let templates = [];
  
//     try {
//       templates = await getPublished(); // Properly await the templates from the server-side
//       // console.log(templates)
//     } catch (err) {
//       return ;
//     }
  return (
    <div className='min-h-svh '>
          <PageHeader page={"osmo"} title01={"portfolio"} title02={"osmo supply"}/>

    <Section>
        <GridColumn>
        <div className='col-span-full lg:col-span-6 '>
            <h2 className='text-para font-body text-brand-white mb-[4vw]'>
      <SlideUpText once={false} preLoaderOut text='A collection of email templates i crafted to fuel your daily inspiration' />
          </h2>
        </div>
            <div className='col-span-full lg:col-start-1 lgcol-span-4'>
                <ProjectsSlider/>
            </div>
        </GridColumn>
        </Section>    
        </div>
  )
}

export default page