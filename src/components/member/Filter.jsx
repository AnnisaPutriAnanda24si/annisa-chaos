import React from 'react';
import { BsFillPersonFill } from "react-icons/bs"; 
import { BiInjection } from "react-icons/bi"; 
import { IoIosBody } from "react-icons/io"; 
import { HiScissors } from "react-icons/hi"; 
import { BiFace } from "react-icons/bi"; 
import { BiBorderAll } from "react-icons/bi"; 

function FilterButton({ name, icon, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        group
        flex
        flex-col
        items-center
        min-w-[95px]
        transition-all
        duration-300
      "
    >
      <div
        className={`
          w-14
          h-14
          rounded-full
          flex
          items-center
          justify-center
          text-2xl
          transition-all
          duration-300

          ${
            isActive
              ? "bg-[#1C1C1C] text-white shadow-lg"
              : "bg-[#FAF7F2] border border-[#1C1C1C]/10 text-[#555555] shadow-sm hover:bg-white hover:text-[#E67E22] hover:-translate-y-1 hover:shadow-md"
          }
        `}
      >
        {icon}
      </div>

      <span
        className={`
          mt-3
          text-sm
          font-urbanist
          transition-colors

          ${
            isActive
              ? "text-[#1C1C1C] font-semibold"
              : "text-[#555555] group-hover:text-[#1C1C1C]"
          }
        `}
      >
        {name}
      </span>
    </button>
  );
}

export default function Filter({ selectedCategory, onCategoryChange }) {
  // Array data button agar kode lebih kering (DRY) dan gampang dikelola
  const categories = [
    { name: "All Services", icon: <BiBorderAll /> },
    { name: "Skin Care", icon: <BiFace /> },
    { name: "Hair Removal", icon: <HiScissors /> },
    { name: "Body Contouring", icon: <IoIosBody /> },
    { name: "Wellness", icon: <BsFillPersonFill /> },
    { name: "Injectables", icon: <BiInjection /> },
  ];

  return (
    <section className="w-full bg-[#FAF7F2] pb-2">
      <div className="w-full bg-[#FAF7F2]">
        <div
          className="
            w-full
            bg-white
            rounded-3xl
            shadow-sm
            border
            border-[#1C1C1C]/5
            px-8
            py-8
          "
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.35em] text-xs text-[#E67E22] font-urbanist">
                Categories
              </p>
              <h3 className="mt-2 font-playfair text-2xl text-[#1C1C1C]">
                Explore Treatments
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {categories.map((cat) => (
                <FilterButton
                  key={cat.name}
                  name={cat.name}
                  icon={cat.icon}
                  isActive={selectedCategory === cat.name}
                  onClick={() => onCategoryChange(cat.name)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}