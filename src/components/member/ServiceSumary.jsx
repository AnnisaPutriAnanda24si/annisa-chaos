import { FaExchangeAlt } from "react-icons/fa"; 
import { BiFace } from "react-icons/bi"; 
import { AiFillStar } from "react-icons/ai"; 
import React from 'react';

export default function ServiceSummary({ selectedService, selectedDoctor }) {
  if (!selectedService) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center text-xs text-gray-400">
        Memuat layanan...
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-xs">
      <h2 className="font-serif text-base font-bold text-[#4A2810] mb-4">Ringkasan Layanan</h2>
      
      {/* Kolase Grid Banner */}
      <div className="w-full rounded-xl overflow-hidden mb-4 border border-gray-100">
        <div className="grid grid-cols-2 gap-px bg-gray-200">
          <img src={selectedService.image} alt="Spa 1" className="w-full h-30 object-cover" />
          <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=200" alt="Spa 2" className="w-full h-16 object-cover opacity-90" />
        </div>
      </div>

      {/* Detail Layanan Terpilih */}
      <div className="pt-2">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-base font-bold text-[#4A2810]">{selectedService.title}</h3>
          <span className="text-base"><BiFace /></span>
        </div>
        <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
          {selectedService.description}
        </p>
      </div>

      {/* Durasi & Estimasi Harga */}
      <div className="mt-4 pt-3 border-t border-dashed border-gray-200 space-y-2 text-xs">
        <div className="flex justify-between text-gray-400">
          <span>Durasi</span>
          <span className="font-bold text-gray-700">{selectedService.duration || '60'} Menit</span>
        </div>  
        <div className="flex justify-between items-end pt-1">
          <span className="text-gray-400">Estimasi Harga</span>
          <span className="text-sm font-extrabold text-[#4A2810]">
            {selectedService.price?.toString().includes('Rp') ? selectedService.price : `Rp ${(selectedService.price * 14000 || 850000).toLocaleString('id-ID')}`}
          </span>
        </div>
      </div>
      {selectedDoctor && selectedDoctor.name && (
        <div className="mt-5 pt-4 border-t border-gray-100">
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
            Dokter Spesialis Yang Dipilih
          </span>
          <div className="flex items-center gap-3 bg-amber-50/40 border border-amber-100/40 p-2.5 rounded-xl mb-3">
            <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-10 h-10 rounded-full object-cover border border-white" />
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-[#4A2810] truncate">{selectedDoctor.name}</h4>
              <p className="text-[10px] text-gray-400 truncate">{selectedDoctor.role}</p>
              <div className="flex items-center gap-0.5 text-[9px] text-gray-500 mt-0.5">
                <span className="text-amber-500"><AiFillStar /></span> {selectedDoctor.rating}
              </div>
            </div>
          </div>
<a href="/booking" className="w-full border border-gray-300 text-gray-600 font-bold text-[11px] py-2 rounded-xl bg-white hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 shadow-2xs">
                <span><FaExchangeAlt /></span> Ganti Dokter
</a>

        </div>
      )}
    </div>
  );
}