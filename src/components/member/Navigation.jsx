import { BiSpa } from "react-icons/bi"; 
import { AiFillSetting } from "react-icons/ai"; 
import { IoIosNotifications } from "react-icons/io"; 
import React from 'react';

function NavMenus() {
  return (
    <div className="flex items-center space-x-1 text-sm font-medium text-gray-500">
      <a href="/home_member" className="bg-[#8C4A23] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">Services</a>
      {/* <a href="#" className="hover:text-[#8C4A23] px-3 py-1.5 transition text-xs">Doctors</a> */}
      <a href="/schedule" className="hover:text-[#8C4A23] px-3 py-1.5 transition text-xs">My Bookings</a>
      {/* <a href="#" className="hover:text-[#8C4A23] px-3 py-1.5 transition text-xs">Schedule</a> */}
    </div>
  );
}

function UserMenu() {
  return (
    <div className="flex items-center space-x-4">
      <button className="text-gray-400 hover:text-gray-600">
        <span className="text-lg"><IoIosNotifications /></span>
      </button>
      <button className="text-gray-400 hover:text-gray-600">
        <span className="text-lg"><AiFillSetting /></span>
      </button>
      <div className="flex items-center space-x-2 border-l border-gray-200 pl-4">
        <div className="text-right">
          <p className="text-xs font-bold text-gray-800 leading-none">Stevan Dux</p>
          <p className="text-[10px] text-gray-400 font-medium mt-0.5">Premium Member</p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" 
          alt="Avatar" 
          className="w-8 h-8 rounded-full object-cover border border-amber-900/10"
        />
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="w-full bg-[#FCF8F5] border-b border-orange-100/40 px-6 py-3 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Brand Brand */}
        <div className="flex items-center space-x-2">
          <span className="text-[#8C4A23] text-xl"><BiSpa /></span>
          <span className="font-serif text-lg font-bold text-[#4A2810] tracking-wide">Serene Beauty</span>
        </div>

        <NavMenus />
        <UserMenu />
      </div>
    </nav>
  );
}