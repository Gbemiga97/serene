"use client"

import { useCursorContext } from "./CursorContext"
import Link from "next/link"
import { usePathname } from "next/navigation"

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


const Nav = () => {
    const pathname = usePathname()
    const {} = useCursorContext()

  return (
    <nav>
        <div className="container mx-auto flex gap-8 ">
            {
                links.map(({href, name}, i) => (
                    <Link key={i} href={href} className={`${pathname === href && "border-b-2 border-accent"}
                    uppercase font-secondary`}>
                        {name}
                    </Link>
                ))
            }
        </div>
    </nav>
  )
}

export default Nav