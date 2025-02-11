// /pages/api/og.js (or another API route for generating the image)

import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function handler(req, res) {
  const { slug } = req.query
  const interSemiBold = await readFile(
    join(process.cwd(), 'assets/Inter-SemiBold.ttf')
  )

  // Fetch blog data based on the slug (replace with your actual logic)
  const blogData = await fetchBlogData(slug)

  // Generate the image using the blog's title or other dynamic data
  const image = new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {blogData.title}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )

  // Set content-type header and send the image as response
  res.setHeader('Content-Type', contentType)
  res.status(200).send(image)
}

async function fetchBlogData(slug) {
  // Replace with actual API call or database query
  const res = await fetch(`https://your-api.com/blogs/${slug}`)
  return res.json()
}
