"use client"


import { useCursorContext } from "@/components/CursorContext";
import ModalVideo from "@/components/ModalVideo";
import { motion } from "framer-motion";
import Image from "next/image";




export default function Home() {

  const {mouseEnterHandler, mouseLeaveHandler} = useCursorContext()

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
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row  h-full relative">
          {/* text */}
          <div className="w-full text-center   xl:text-left xl:w-[500px] 
          pt-[120px]">
            <h1 className="h1 mb-6">
              Natural Beauty
              <br /> Starts Here 
            </h1>
            <p className="lead max-w-xl mx-auto">
              Tailored skincare solution for a healthy complexion, offering customized care for radiant skin
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <button className="btn btn-lg">
                Book an appointment
              </button>
              <div>
                <ModalVideo />
              </div>
            </div>
          </div>
          {/* image */}
         <div className="flex-1">
         <div className="hidden xl:flex xl:fixed bottom-0">
            <Image src="/assets/home/img.png"
             width={864}
              height={650}
              quality={100}
              alt="Banner woman"
              />
            </div>
         </div>
        </div>
      </div>
    </motion.section>
  );
}
