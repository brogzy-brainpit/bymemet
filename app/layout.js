import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { Bebas_Neue, Instrument_Sans, Lora,DM_Sans,Epilogue,Anton,DM_Mono } from "next/font/google";
import { base } from "@/axios";



// const custom = Bebas_Neue({
//   variable: "--font-custom",
//   subsets: ["latin"],
//   weight: "400",
// });



const custom = localFont({
  src:  "./fonts/Galgo.otf",
  variable: "--font-custom",
});

const custom2 = localFont({
  src:  "./fonts/PorlaneSlanted.ttf",
  variable: "--font-custom2",
});


// const custom = Epilogue({
//   subsets: ["latin"],
//     style: ["normal", "italic"], // 👈 include italics
//   // weight: ["400"],
//    weight: ["900"],
//   variable: "--font-custom",
//   display: "swap",
// });
const body = Instrument_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"], // 👈 include italics
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

const accent = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"], // 👈 include italics
  weight: ["400", "700"],
  variable: "--font-accent",
  display: "swap",
});



// const custom = localFont({
//   src: "./fonts/Stubed.ttf",
//   variable: "--font-custom",
//   weight: "100 900",
// });
// const body = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-body",
//   weight: "100 900",
// });



export const metadata = {
  title:{
    default: "memet's email dev. portfolio",
    template:"%s - bymemet"
  },
  description: "professional email design and development services. by the professional developer Memet Oumar aka Bokchexa",
  openGraph: {
        title:"memet's email dev. portfolio",
        description:"professional email design and development services. by the professional developer Memet Oumar aka Bokchexa",
        url:`${base}/`,
        images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png'}],
        // images: [{url: `open-graph/?slug=${slug}`}],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@bok_cheza",
        title:"memet's email dev. portfolio",
        description:"professional email design and development services",
        images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png',width:1200,height:630,alt:`image for memet logo`}],
      },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="eHejJnZrsBXpOeV87pCXa6f5ahGHvcKZ8B8om_R4NUM" />
      <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inconsolata:wght@200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
      </link>
      </head>
      {/* <style>
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inconsolata:wght@200..900&display=swap');
</style> */}
      <body
        className={`body-noise ${custom.variable} ${custom2.variable} ${body.variable} ${accent.variable} antialiased`}
      >
      {/* <style>
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Danfo&family=Ultra&display=swap');
</style> */}
         
        {children}
    <Footer/>

      </body>
    </html>
  );
}
