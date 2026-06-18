import { BsFillPersonFill } from "react-icons/bs"; 
import { BiInjection } from "react-icons/bi"; 
import { IoIosBody } from "react-icons/io"; 
import { HiScissors } from "react-icons/hi"; 
import { BiFace } from "react-icons/bi"; 
import { BiBorderAll } from "react-icons/bi"; 
import React from 'react';

function FilterButton({ name, icon, isActive }) {
  return (
    <button className="flex flex-col items-center focus:outline-none group min-w-[70px]">
      {/* Icon Box */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg border transition-all
        ${isActive 
          ? 'bg-[#4A2810] border-[#4A2810] text-white' 
          : 'bg-[#FAF6F0] border-gray-100 text-gray-500 group-hover:border-orange-200'}`}
      >
        {icon}
      </div>
      {/* Label Text */}
      <span className={`text-[10px] font-medium mt-2 text-center tracking-tight transition-colors
        ${isActive ? 'text-[#4A2810] font-bold' : 'text-gray-400 group-hover:text-gray-600'}`}>
        {name}
      </span>
    </button>
  );
}

export default function Filter() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 mt-6">
      {/* Main Container Wrapper */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4">
        
        {/* Header Row (Categories Title & Sort By Dropdown) */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-gray-700">Categories</span>
          
          <div className="flex items-center space-x-1.5">
            <span className="text-[10px] text-gray-400">Sort by:</span>
            <select className="text-[10px] font-bold text-[#8C4A23] bg-transparent border-none p-0 pr-4 focus:ring-0 cursor-pointer focus:outline-none">
              <option>Most Popular</option>
              <option>Lowest Price</option>
              <option>Highest Rating</option>
            </select>
          </div>
        </div>

        {/* Buttons Content Row */}
        <div className="flex items-center justify-between overflow-x-auto gap-4 md:gap-2 pb-1 no-scrollbar">
          <FilterButton name="All Services" icon={<BiBorderAll />} isActive={true} />
          <FilterButton name="Skin Care" icon={<BiFace />} isActive={false} />
          <FilterButton name="Hair Removal" icon={<HiScissors />} isActive={false} />
          <FilterButton name="Body Contouring" icon={<IoIosBody />} isActive={false} />
          <FilterButton name="Wellness" icon={<BsFillPersonFill />} isActive={false} />
          <FilterButton name="Injectables" icon={<BiInjection />} isActive={false} />
        </div>

      </div>
    </div>
  );
}