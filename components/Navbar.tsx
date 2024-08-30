"use client"
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
    return (
        <>
        <div className="flex w-full h-full">
        <Image 
        src="/assets/images/logo.svg"
        height={275}
        width={275}
        alt="logo"
        className="px-11 py-6"></Image>

        <div className="hidden md:flex pt-10 h-full font-mono font-normal text-gray-300">
            <p className="px-5 flex">About us
                <svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="rotate-0 h-6 w-6 pt-2 pl-1 pb-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 
                33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            </p>
            <p className="px-5">Blockchain</p>
            <p className="px-5">Academy</p>
            <p className="px-5">Platform</p>
        </div>

        <div className="md:hidden w-full h-full justify-end"/>

            <Image
            src="assets/images/hamburger.svg"
            height={80}
            width={80}
            alt="menubar"
            className="pt-2 pr-11 md:hidden cursor-pointer"
            onClick={toggleSidebar}></Image>
            
            <div
        className={`flex items-start fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Image 
        src="/assets/images/logo.svg"
        height={200}
        width={200}
        alt="logo"
        className="px-11 py-6"></Image>

        <Image
            src="assets/images/cross.svg"
            height={60}
            width={60}
            alt="menubar"
            className="px-5 py-5 md:hidden cursor-pointer "
            onClick={toggleSidebar}></Image>
            
    </div>

    

        </div>

        </>
    )
}

export default Navbar;