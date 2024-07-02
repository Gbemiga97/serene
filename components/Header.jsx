"use client"

import Link from "next/link"
import { useCursorContext } from "./CursorContext"
import { motion } from "framer-motion"
import Image from "next/image"
import {AiOutlineMenu} from 'react-icons/ai' 
import { useState } from "react"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import Socials from "./Socials"
import { FaPhoneAlt } from "react-icons/fa"
import {IoMdMail} from 'react-icons/io'


export const Header = () => {

    const {mouseEnterHandler, mouseLeaveHandler} = useCursorContext()
    const [mobileNav, setMobileNav] = useState(false)


  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
        {/* topbar */}
        <div className="bg-secondary-100 mb-6 xl:mb-[50px] py-4 xl:py-2">
            <div className="container mx-auto h-full">
                <div className="flex items-center justify-between h-full">
                 {/* phone & email */}
                <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6
                w-full justify-between xl:w-auto xl:justify-normal">
                    {/* phone */}
                    <div className="flex items-center gap-2 text-white">
                        <FaPhoneAlt />
                        <span>+99(0) 333 667</span>
                    </div>
                    {/* email */}
                    <div className="flex items-center gap-2 text-white">
                        <IoMdMail />
                        <span>info@youremail.com</span>
                    </div>
                </motion.div>
                {/* socials */}
                <motion.div 
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="hidden xl:block">
                    <Socials containerStyles="flex gap-6 text-white " />
                </motion.div>
                </div>
              
            </div>
        </div>
        <div className="container mx-auto flex items-center justify-between px-6 ">
            {/* logo */}
            <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            >
                <Link href='/'>
                <Image src="/assets/logo.svg" width={120} height={44} priority alt="serene" />
                </Link>
            </motion.div>
            {/* mobile nav trigger */}
            <button 
            onClick={() => setMobileNav(true)}
            className="xl:hidden cursor-pointer">
                <AiOutlineMenu className="text-3xl text-primary" />
            </button>
            {/* mobile Nav */}
            <motion.div
            initial={{right: "-100%"}}
            animate={{right: mobileNav ? 0 : "-100%"}}
             className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50">
                <MobileNav setMobileNav={setMobileNav} />
            </motion.div>
            {/* desktop nav */}
            <motion.div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="hidden xl:block">
                <Nav />
            </motion.div>
        </div>
    </header>
)
}
