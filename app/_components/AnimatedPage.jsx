"use client"
import {AnimatePresence,motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import React from 'react'
function AnimatedPage({children}) {
    const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname} // Ensure motion animates when route changes
            initial={{ x:"100%",opacity: 0, scale: 0.4}}
            animate={{ x:"0%",opacity: 1,scale: 1}}
            exit={{ x:"100%",opacity: 0,scale: 0.9}}
            transition={{ duration: 0.1 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
  )
}

export default AnimatedPage