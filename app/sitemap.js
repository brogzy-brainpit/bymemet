// /app/sitemap.xml.js
import axios from '@/axios';

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

export default  async function sitemap() {
  // Fetch posts from the external API
  const blogs = await getPublished();

  // Generate URLs for each post
  const postEntries = blogs.map(({ id,slug,createdAt }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`,
    lastModified: new Date(createdAt),
    changeFrequency:"monthly",
    priority:"0.8",
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency:"monthly",
      priority:"1",
    },{
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency:"yearly",
      priority:"0.5",

    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/works`,
      lastModified: new Date(),
      changeFrequency:"weekly",
      priority:"1",
    }, {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency:"weekly",
      priority:"1",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency:"yearly",
      priority:"1",
    },
      ...postEntries, // Add all post URLs to the sitemap
    ]
}

// Revalidation period of 2 days (48 hours)
export const revalidate = 60 * 60 * 24;   // Revalidate the page every 24 hours
