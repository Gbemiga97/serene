"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"



const PageTransition = ({children}) => {
    const pathname = usePathname()



  return (
    <AnimatePresence>
        <motion.div 
        key={pathname} className="w-screen h-screen fixed z-30 bg-white top-0 pointer-events-none"
        initial={{opacity: 1}} 
        animate={{
            opacity: 0, 
            transition: {
                delay: 1,
                duration: 1,
                ease: "easeIn"
                }}}>
            {children}
        </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition