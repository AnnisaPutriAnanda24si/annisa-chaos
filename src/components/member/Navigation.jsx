import { BiSpa } from "react-icons/bi"; 
import { AiFillSetting } from "react-icons/ai"; 
import { IoIosNotifications } from "react-icons/io"; 
import React from 'react';

export default function Navbar() {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <nav className="w-full bg-[#FCF8F5] border-b border-orange-100/40 py-4 sticky top-0 z-50">
      {/* Changed from max-w-[1200px] mx-auto to a true full-width layout with edge padding */}
      <div className="w-full px-12 flex items-center justify-between">
        
        {/* LEFT GROUP: Logo & Nav items sitting comfortably to the left side */}
        <div className="flex items-center space-x-12">
          {/* Brand Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <span className="text-[#8C4A23] text-2xl"><BiSpa /></span>
            <span className="font-serif text-xl font-bold text-[#4A2810] tracking-wide">Serene Beauty</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="/home_member" 
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                currentPath === '/home_member' || currentPath === '/booking'
                  ? "bg-[#8C4A23] text-white shadow-xs" 
                  : "text-gray-500 hover:text-[#8C4A23]"
              }`}
            >
              Services
            </a>
            <a 
              href="/schedule" 
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                currentPath === '/schedule'
                  ? "bg-[#8C4A23] text-white shadow-xs" 
                  : "text-gray-500 hover:text-[#8C4A23]"
              }`}
            >
              My Bookings
            </a>
          </div>
        </div>

        {/* RIGHT GROUP: Pushed all the way to the far right edge */}
        <div className="flex items-center space-x-5 flex-shrink-0">
          <button type="button" className="text-gray-400 hover:text-gray-600 transition-colors text-xl focus:outline-none">
            <IoIosNotifications />
          </button>
          <button type="button" className="text-gray-400 hover:text-gray-600 transition-colors text-xl focus:outline-none">
            <AiFillSetting />
          </button>
          
          <div className="flex items-center space-x-3 border-l border-gray-200 pl-5">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-800 leading-none">Stevan Dux</p>
              <p className="text-[11px] text-gray-400 font-medium mt-1">Premium Member</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" 
              alt="Avatar" 
              className="w-9 h-9 rounded-full object-cover border border-amber-900/10 shadow-2xs"
            />
          </div>
        </div>

      </div>
    </nav>
  );
}