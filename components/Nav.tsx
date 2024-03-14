"use client"
import { usePathname } from 'next/navigation';
import React from 'react'

// Navbar with dynamic styling depending on pathname
function Nav() {
    const pathname = usePathname();
    const generalLinkstyle = "p-4 hover:bg-gray-400"
    const selectedLinkstyle = "p-4 hover:bg-gray-400 bg-gray-300 text-gray-700 hover:text-gray-500 font-semibold border-b-4 border-yellow-400"

    return (
        <nav className="bg-gray-600 ">
            <div className="max-w-screen-xl mx-auto">
                <div className="">
                    <ul className="flex flex-row justify-around text-white">
                        <li className={pathname == "/" ? selectedLinkstyle : generalLinkstyle}>
                            <a href="/" aria-current="page">Les excuses de dev</a>
                        </li>
                        <li className={pathname == "/lost" ? selectedLinkstyle : generalLinkstyle}>
                            <a href="/lost">Lost</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
