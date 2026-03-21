"use client";
import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import BlobBackground from "./BlobBackground";
import SlideUpText from "@/effects/SlideUpText";
import TunderText from "./TunderText";
import Section from "@/app/layout/Section";
import GridColumn from "@/app/layout/GridColumn";

function StepDot({key, cx, cy, r, angle, label, scrollYProgress, circumference, isActive }) {
  const rad = (angle * Math.PI) / 180;
  let x = cx + r * Math.cos(rad);
  let y = cy + r * Math.sin(rad);

  const arcPos = ((angle + 90 + 360) % 360) / 360 * circumference;

  const { useTransform } = require("framer-motion");
  const opacity = useTransform(
    scrollYProgress,
    [arcPos / circumference - 0.001, arcPos / circumference],
    [0, 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [arcPos / circumference - 0.001, arcPos / circumference],
    [0.6, 1]
  );

  if (angle === 0) x += 45;
  if (angle === 180) x -= 45;
  const labelDy = angle === -90 ? -20 : angle === 90 ? 28 : 6;

  return (
    <g key={key}>
      <motion.circle
        cx={cx + r * Math.cos(rad)}
        cy={cy + r * Math.sin(rad)}
        r="10"
        // style={{ opacity, scale }}
        strokeWidth={2}
        stroke={isActive ? "#7461C3" : "#0096A5"}  /* 🔑 active dot color */
        fill={isActive ? "#7461C3" : ""}  /* 🔑 active dot color */
      />
      <motion.text
        x={x}
        y={y}
        textAnchor="middle"
        fill="#F7F0BC"
        dy={labelDy}
        style={{ opacity }}
        className="font-custom text-[18px] md:text-[20px]"
      >
        {label}
      </motion.text>
    </g>
  );
}


export default function ProcessCircle() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const r = 160;
  const cx = 300;
  const cy = 300;
  const circumference = 2 * Math.PI * r;

  const steps = [
    {
      label: "Design",
      angle: -90,
      description:
        "Send us your raw footage along with any notes, music choices, or preferences.",
    },
    {
      label: "coding",
      angle: 0,
      description:
        "I carefully code you a custom code using the best email practice to make sure it renders perfectly across all email providers like gmail, yahoo, outlook and so on.",
    },
    {
      label: "test",
      angle: 90,
      description:
        "The footage is crafted into a cinematic wedding film with smooth cuts, color grading, and sound design.",
    },
    {
      label: "Deliver",
      angle: 180,
      description: "You get a polished film, ready to share with your couple — fast, clean, and stress-free."
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  // 🔑 Watch scroll progress and set the active step instantly
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        steps.length - 1,
        Math.floor(latest * steps.length)
      );
      setActiveStep(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, steps.length]);

  const { useTransform } = require("framer-motion");
  const strokeOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  );

  return (
    <section ref={containerRef} className="h-[400vh] bgblack text-#F7F0BC ">
             <Section>
              <GridColumn>
           <h2 className=' col-start-1 col-span-4 text-heading text-left text-brand-white font-custom uppercase leading-[.8]'>
                   <TunderText preloaderOut={true}
                    text='OUR' 
                     initialDelay={0}/>
                     </h2>
           <h2 className=' col-start-2 col-span-4 row-start-2 text-heading text-left text-brand-white font-custom uppercase leading-[.8]'>
                      <TunderText preloaderOut={true}
                    text='PROCESS' 
                     initialDelay={0}/>
                     </h2>

              </GridColumn>

                   </Section>
      <div id="ourProcess" className="sticky top-0 flex flex-col h-screen items-center justify-center">
    <BlobBackground className='h-full'>
      {/* <SlideUpText text={'OUR PROCESS'} center delay={0.04} duration={0.5} className="text-footer text-center leading-[1] font-custom text-brand-text-dark transition-all duration-500 ease-in-out"/> */}
        <svg
          className="bg-red300 w-ful w-[380px] lg:w-[600px] h-auto"
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Circle track */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress stroke */}
        {/* Progress stroke with glow effect */}
<motion.circle
  cx={cx}
  cy={cy}
  r={r}
  transform={`rotate(-90 ${cx} ${cy})`}
  stroke="#F7F0BC"
  strokeWidth="6"
  strokeLinecap="round"
  fill="none"
  filter="url(#glow)"
  style={{
    strokeDasharray: circumference,
    strokeDashoffset: strokeOffset,
  }}
/>

{/* Glow filter definition */}
<defs>
  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
    {/* Red glow */}
    <feDropShadow
      dx="0"
      dy="0"
      stdDeviation="8"   // controls blur strength
      floodColor="#ffffff" // reddish glow
    />
  </filter>
</defs>


          {/* Dots + Labels */}
          {steps.map((s,i) => (
            <StepDot isActive={activeStep === i} 
              key={s.label}
              cx={cx}
              cy={cy}
              r={r}
              angle={s.angle}
              label={s.label}
              circumference={circumference}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* ✅ Instant description (only one at a time) */}
          <foreignObject
            x={cx - r * 0.9}
            y={cy - r * 0.9}
            width={r * 1.8}
            height={r * 1.8}
          >
            <motion.div
              key={activeStep}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1,scale:1}}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center h-full text-brand-text-dark px-4"
            >
            
              <SlideUpText className="font-custom text-heading  max-w-[95%]" text= {steps[activeStep].description} duration={0.40} delay={0.002} gap="1em" center/>
              {/* <p className="font-custom text-sm md:text-lg leading-snug max-w-[97%] mx-auto">
                {steps[activeStep].description}
              </p> */}
            </motion.div>
          </foreignObject>
        </svg>
</BlobBackground>
      </div>
    </section>

  );
}
