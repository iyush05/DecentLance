"use client"

import { useState } from "react"

const Sidebar = () => {


  const toggleSidebar = () => {
  };
    return (
        <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
    </div>
    )
}

export default Sidebar