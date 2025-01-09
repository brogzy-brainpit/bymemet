import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import path from "../../assets/PATH.png"
import comrad from "../../assets/COMRAD.png"
import joymode from "../../assets/JOYMODE.png"
const slider1 = [
    {
        color: "#e3e5e7",
        // src: "https://n5su3bze2ea.b-cdn.net/preview-images/2a5da2b6-f3a7-43c1-adc1-a3ddd5bd0d75/Newsletter-from-Hismile_3-for-dollar20-bundle-is-selling-fast.webp?width=384&quality=80"
        src: joymode.src
    },
    {
        color: "#d6d7dc",
        src: comrad.src
    },
    {
        color: "#e3e3e3",
        src: path.src
    },
    {
        color: "#21242b",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1719131955/udrtawjibmoyzd5heu9f.png"
    },
   
    {
        color: "#e3e3e3",
        src: joymode.src
    },
    {
        color: "#e3e3e3",
        src:"http://res.cloudinary.com/brainpit/image/upload/v1719132204/wsknninw7lbfzomkdg4j.png"
    },
   
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1719132063/y5otqow5dkonsdc979yh.png"
    },
    {
        color: "#e5e0e1",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1719132025/p5unp7vpsjhrjeqfsmxv.png"
    },
    {
        color: "#d7d4cf",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1736417234/fodngad0l9pfbxnvptmj.png"
    },
    {
        color: "#e1dad6",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1736417350/twj7sqmqtdjy3pkwwqlm.png"
    }, {
        color: "#e1dad6",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1736417414/nf0ikns2rgnkysndeimn.png"
    } ,{
        color: "#e1dad6",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1736417434/saxsaxjwwrmuzjoraoea.png"
    }
]
const slider3 = [
    {
        color: "#d4e3ec",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1736417537/th2ajaxa0godakjvthmo.png"
    },
    {
        color: "#e5e0e1",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1736417563/vg1mqnxkcpjvnbycqslz.png"
    },
    {
        color: "#d7d4cf",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1736417663/wassn2lxzsqtivavvmzb.png"
    },
    {
       color: "#e1dad6",
       src: "http://res.cloudinary.com/brainpit/image/upload/v1736417743/zvwjjhsc2r0lnhs8cz9d.png"
   } ,
    {
        color: "#e1dad6",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1736417734/gdxgre5wqqbd5lw4kgrx.png"
    },
    {
        color: "#e1dad6",
        src: "http://res.cloudinary.com/brainpit/image/upload/v1736417833/xczgxgmosznvwa7vcp8u.png"
    }
]

export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])
    const imgTRACK = useTransform(scrollYProgress, [0.12, 0.9], [0, -250])

    return (
        <div ref={container}  className={`${styles.slidingImages}`} >
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={` ${styles.project}`}  >
                                <div className={styles.imageContainer}>
                                    <motion.img 
                                    style={{y:imgTRACK}}
                                    fill={true}
                                    alt={"image"}
                                    src={`${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider2}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project}  >
                                <div key={index} className={styles.imageContainer}>
                                    <motion.img
                                    style={{y:imgTRACK}}
                                    fill={true}
                                    alt={"image"}
                                    src={`${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>

                <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider3.map( (project, index) => {
                            return <div key={index} className={` ${styles.project}`}  >
                                <div className={styles.imageContainer}>
                                    <motion.img 
                                    style={{y:imgTRACK}}
                                    fill={true}
                                    alt={"image"}
                                    src={`${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                {/* <motion.div style={{x: x2}} className={styles.slider2}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project}  >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={path}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div> */}



                {/* <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div> */}
        </div>
    )
}
