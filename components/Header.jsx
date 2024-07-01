"use client"

import Link from "next/link"
import { useCursorContext } from "./CursorContext"
import { motion } from "framer-motion"
import Image from "next/image"
import {AiOutlineMenu} from 'react-icons/ai' 


export const Header = () => {

    const {mouseEnterHandler, mouseLeaveHandler} = useCursorContext()


  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
        {/* topbar */}
        <div className="bg-secondary-100 mb-6 xl:mb-[50px] py-4 xl:py-0">
            topbar
        </div>
        <div className="container mx-auto">
            {/* logo */}
            <div>
                <Link href='/'>
                <Image src="/assets/logo.svg" width={120} height={44} priority alt="serene" />
                </Link>
            </div>
            {/* mobile nav trigger */}
            <div className="xl:hidden cursor-pointer">
                <AiOutlineMenu className="text-3xl text-primary" />
            </div>
        </div>
    </header>
)
}
