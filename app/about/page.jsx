"use client"
import { motion } from "framer-motion"
import { useCursorContext } from "@/components/CursorContext"
import Image from "next/image"
import StatsItem from "@/components/StatsItem"



const About = () => {

  const {mouseEnterHandler, mouseLeaveHandler} = useCursorContext()



  return (
    <motion.section initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {
        delay: 2
      }}}
      className="min-h-screen flex items-center overflow-x-hidden"
      >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
          {/* image */}
          <motion.div
          initial={{opacity: 0, x: -60}} animate={{opacity: 1, x: 0}} 
          transition={{
            delay: 2,
            duration: 0.8, 
            ease: "easeInOut"
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="relative w-[304px] h-[423px] xl:w-[384px] mb-8 xl:mx-0">
            <Image src="/assets/about/img.jpg" fill quality={100} priority alt="about woman"
             className="object-contain " />
          </motion.div>
          {/* text */}
          <motion.div 
           initial={{opacity: 0, x: 60}} animate={{opacity: 1, x: 0}} 
           transition={{
             delay: 2.4,
             duration: 0.8, 
             ease: "easeInOut"
           }}
          className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left
          mx-auto xl:mx-0">
            <motion.h2 
             onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Committed to Your Skin's Health and 
              </motion.h2>
              <motion.p 
               onMouseEnter={mouseEnterHandler}
               onMouseLeave={mouseLeaveHandler}
              className="lead max-w-[600px] mx-auto xl:mx-0">
                Tailored skincare solutions for a healthy complexion, offering customized care for radiant skin
              </motion.p>
              {/* Count Up */}
              <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
                <div>
                  <StatsItem countNum={13} text="Years On Market" />
                </div>
                <div>
                  <StatsItem countNum={35} countText="k+" text="Happy Clients" />
                </div>
                <div>
                  <StatsItem countNum={97} countText="%" text="Natural Ingredients" />
                </div>
              </div>
              {/* btn */}
              <motion.button
               onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
               className="btn mx-auto xl:mx-0">
                Contact us
              </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )  
}

export default About