export default function sitemap() {
    return [
      {
        url: 'https://bymemet.vercel.app/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://bymemet.vercel.app/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
     
    ]
  }