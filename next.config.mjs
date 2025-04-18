/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {protocol:"https",
                hostname:"www.psd2newsletters.com",
                port:"",
                pathname:"/wp-content/**"

            },
            {protocol:"https",
                port:"",
                hostname:"images.pexels.com",
                pathname:"/photos/**",
            },
            {protocol:"https",
                port:"",
                hostname:"emailsyall.com",
                pathname:"/wp-content/uploads/**",
            },
            {protocol:"https",
                port:"",
                hostname:"res. cloudinary.com",
                pathname:"/brainpit/image/upload/**",
            },
        ]
    }
};

export default nextConfig;
