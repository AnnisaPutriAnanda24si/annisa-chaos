import { BsShieldFillCheck } from "react-icons/bs"; 
import { AiFillStar } from "react-icons/ai"; 
import React from 'react';

export default function DoctorCard({ name, role, experience, rating, image, statusColor }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col justify-between min-h-[220px]">
      <div className="flex items-start gap-4">
        {/* Frame Foto & Indikator Status */}
        <div className="relative w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <span className={`absolute bottom-1 right-1 w-3 h-3 ${statusColor} border-2 border-white rounded-full`}></span>
        </div>

        {/* Info Detail Dokter */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-serif text-base font-bold text-[#4A2810] leading-tight truncate">{name}</h3>
            {rating && (
              <span className="text-[10px] bg-amber-50 text-amber-700 font-bold px-1.5 py-0.5 rounded border border-amber-100 flex items-center gap-0.5 flex-shrink-0">
                {rating} <span className="text-[8px]"><AiFillStar /></span>
              </span>
            )}
          </div>
          <p className="text-[11px] text-gray-400 font-medium mt-0.5 truncate">{role}</p>
          <p className="text-[9px] font-bold text-gray-400 tracking-wider mt-3 flex items-center gap-1">
            <BsShieldFillCheck /> {experience}
          </p>
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <a href="/doctor/1" className="border border-gray-300 text-gray-600 font-bold text-[11px] py-2 rounded-lg hover:bg-gray-50 transition-colors text-center">
          Cek Profil
        </a>
<a href="/checkout" className="bg-[#4A2810] text-white font-bold text-[11px] py-2 rounded-lg hover:bg-[#361D0B] transition-colors flex items-center justify-center gap-1">
    Buat Janji <span>➔</span>
</a>
          

      </div>
    </div>
  );
}