"use client"

import { motion } from "framer-motion" 
import Image from "next/image"
import { useCursorContext } from "@/components/CursorContext"
import Form from "@/components/Form"


const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursorContext()



  return (
    <motion.section
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {
        delay: 2
      }}}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          {/* text */}
          <motion.div 
           initial={{opacity: 0, x: -60}}
           animate={{
             opacity: 1,
             x: 0,
             transition: { delay: 2, duration: 0.8, ease: "easeInOut" }
           }}
          className="flex-1 flex flex-col justify-center">
            <h3 
             onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}
            className="h3 mb-8 text-center xl:text-left">
              Contact info
            </h3>
            {/* items */}
            <div className="flex flex-col items-center xl:items-start gap-12">
              {/* item */}
              <div 
               onMouseEnter={mouseEnterHandler}
               onMouseLeave={mouseLeaveHandler}
              className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image
                  src="/assets/contact/pin.svg" fill alt=""
                  />
                </div>
              <div className="pt-1 flex-1 ">
                <h4 className="h4 mb-2">
                  Address
                </h4>
                <p className="leading-relaxed">
                  123/45 Elm St, Suite 800 <br />
                  Los Angeles, CA 90012
                </p>
                </div>
              </div>
              {/* end items */}
              {/* item */}
              <div 
               onMouseEnter={mouseEnterHandler}
               onMouseLeave={mouseLeaveHandler}
              className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image
                  src="/assets/contact/phone.svg" fill alt=""
                  />
                </div>
              <div className="pt-1 flex-1 ">
                <h4 className="h4 mb-2">
                  Phone Number
                </h4>
               <div className="pt-1 flex-1">
                <p>
                  Phone: +99(0) 999 333 667
                </p>
                <p>
                  Fax: +99(0) 999 332 678
                </p>
               </div>
                </div>
              </div>
              {/* end items */}
                 {/* item */}
                 <div
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}
                 className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image
                  src="/assets/contact/email.svg" fill alt=""
                  />
                </div>
              <div className="pt-1 flex-1 ">
                <h4 className="h4 mb-2">
                 Email Address
                </h4>
                <div className="flex flex-col gap-1">
                <p>info@youremail.com</p>
                <p>support@youremail.com</p>
                </div>
                </div>
              </div>
              {/* end items */}
            </div>
          </motion.div>
          {/* form*/}
          <motion.div
             initial={{opacity: 0, x: 60}}
             animate={{
               opacity: 1,
               x: 0,
               transition: { delay: 2, duration: 0.8, ease: "easeInOut" }
             }}
             onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}
          className="flex-1">
          <div className="bg-[#f0cfbc] w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0">
           <h3 className="h3 mb-8 text-center">
            Get in touch
           </h3>
          <Form />
          </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact