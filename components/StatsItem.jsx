"use client"

import CountUp from "react-countup"
import { motion } from "framer-motion"
import { useCursorContext } from "./CursorContext"


const StatsItem = ({countNum, countText, text}) => {

    const {mouseEnterHandler, mouseLeaveHandler} = useCursorContext()


  return (
    <motion.div
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    className="text-center font-primary">
        <div className="text-[40px] text-accent mb-4">
            <CountUp end={countNum} delay={2.4} duration={6} />
            <span>{countText}</span>
        </div>
        <p className="text-lg">{text}</p>
    </motion.div>
  )
}

export default StatsItem