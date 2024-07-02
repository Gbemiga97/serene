"use client"


import { IoCloseOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Socials from './Socials'


const links = [
  {
      href: "/",
      name: "Home"
  },
  {
      href: "/about",
      name: "About"
  },
  {
      href: "/treatments",
      name: "Treatments"
  },
  {
      href: "/contact",
      name: "Contact"
  },
]

const MobileNav = ({setMobileNav}) => {

  const pathname = usePathname()

  return (
    <nav className="relative flex flex-col justify-between h-full p-8">
        <button 
        onClick={() => setMobileNav(false)}
        className='cursor-pointer text-accent'>
        <IoCloseOutline className='text-4xl' />
        </button>
        <ul className='flex flex-col gap-10 text-white text-xl'>
          {
            links.map(({href, name}, i) => (
              <Link 
              onClick={() => setMobileNav(false)}
              key={i} href={href} 
              className={`${pathname === href && "border-b-2 border-accent"}
              uppercase max-w-max mx-auto font-secondary`}
              >
              {name}
              </Link>
            ))
          }
        </ul>
       <Socials containerStyles="text-white text-lg flex gap-6 justify-center" />
    </nav>
  )
}

export default MobileNav