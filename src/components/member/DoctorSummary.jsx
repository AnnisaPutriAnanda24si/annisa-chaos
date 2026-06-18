import React from 'react';

export default function DoctorSummary({ doctor }) {
  // Antisipasi jika data belum selesai dimuat
  if (!doctor) return <div className="text-xs text-gray-400">Memuat profil dokter...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
      {/* Foto Besar Dokter */}
      <div className="w-full md:w-[280px] aspect-square rounded-2xl overflow-hidden shadow-2xs border border-white flex-shrink-0">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Detail Kompetensi */}
      <div className="flex-1 space-y-4">
        {/* Label Peran / Spesialisasi Utama */}
        <span className="bg-orange-100 text-orange-700 font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full inline-block">
          {doctor.role}
        </span>
        
        {/* Nama Dokter */}
        <h1 className="font-serif text-4xl font-extrabold text-[#4A2810] tracking-tight">
          {doctor.name}
        </h1>

        {/* Statistik Kunjungan & Pengalaman */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-500 font-semibold">
          <div className="flex items-center gap-1">
            <span className="text-amber-400 text-sm">★</span> 
            <span className="text-gray-800 font-bold">{doctor.rating}/5</span> dari 124 reviews
          </div>
          <div className="flex items-center gap-1.5 md:border-l md:border-gray-200 md:pl-6">
            <span className="text-gray-400">💼</span> 
            <span className="text-gray-800 font-bold">{doctor.experience || '12 Years'}</span> pengalaman di medis kecantikan
          </div>
        </div>

        {/* Deskripsi Biografi Singkat */}
        <p className="text-xs text-gray-500 leading-relaxed font-medium">
          {doctor.name} adalah spesialis dermatologi senior dengan fokus pada peremajaan kulit dan terapi laser. Beliau dikenal karena pendekatan personalnya dalam menangani masalah kulit kompleks.
        </p>

        {/* Daftar Spesialisasi Treatment (Tags) */}
        <div className="space-y-2 pt-2">
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Spesialisasi Treatment</h4>
          <div className="flex flex-wrap gap-1.5">
            {["Facial Rejuvenation", "Chemical Peel", "Anti-Aging Therapy"].map((tag, i) => (
              <span key={i} className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}