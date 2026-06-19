import { FaUserNurse } from "react-icons/fa"; 
import React from 'react';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white border border-gray-100/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[350px]">
      
      <div>
        <div className="w-full h-36 overflow-hidden rounded-xl mb-3">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="text-gray-800 font-bold text-sm md:text-[15px] tracking-tight leading-snug mb-1">
          {service.title}
        </h3>
        
        <div className="flex items-center space-x-1.5 text-[11px] text-gray-400">
          <span className="text-green-400 text-xs"><FaUserNurse /></span>
          <span className="font-bold text-gray-700">{service.doctors_avail} Doctors available</span>
          <span className="text-gray-400">({service.reviews} reviews)</span>
        </div>
        
        {/* Deskripsi Treatment */}
        <p className="text-[11px] text-gray-400/90 mt-2.5 leading-relaxed line-clamp-2 font-normal">
          {service.description}
        </p>
      </div>
      <div className="flex items-end justify-between pt-3 border-t border-gray-300">
        <div className="flex flex-col">
          <span className="text-base font-extrabold text-amber-950 leading-none">
            ${service.price}
          </span>
          <span className="text-[10px] text-gray-400 mt-1.5 flex items-center gap-1 font-medium">
            <span className="text-[9px]">🕒</span> {service.duration} min
          </span>
        </div>
        
        {/* Tombol Booking Estetik Khas Klinik */}

          <a className="bg-[#FAF6F0] text-amber-950 hover:bg-[#8C4A23] hover:text-white transition-colors duration-200 font-bold text-[11px] px-4 py-2 rounded-xl border border-gray-200/50 shadow-2xs" href="/booking">Booking</a>
      </div>

    </div>
  );
}