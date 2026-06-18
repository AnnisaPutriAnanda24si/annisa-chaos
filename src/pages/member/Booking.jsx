import { BsFillPeopleFill } from "react-icons/bs"; 
import React from 'react';
import DoctorCard from '../../components/member/DoctorCard';
import ServiceSummary from '../../components/member/ServiceSumary';
import MembershipCard from '../../components/member/MembershipCard';
import servicesData from '../../data/servicesData.json';
import doctorsData from '../../data/doctorsData.json';

export default function Booking() {
  const activeService = servicesData?.services?.[0];
  const daftarDokter = doctorsData?.doctors || [];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 bg-[#FCF8F5] text-sans antialiased">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* KOLOM KIRI (Daftar Dokter) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Judul Halaman */}
          <div className="border-l-4 border-[#4A2810] pl-4">
            <h1 className="font-serif text-3xl font-bold text-[#4A2810]">Pilih Dokter Spesialis</h1>
            <p className="text-xs text-gray-500 mt-1">
              Menampilkan dokter spesialis untuk layanan: <span className="font-bold text-[#4A2810]">{activeService?.title || "Facial Rejuvenation"}</span>
            </p>
          </div>

          {/* Grid Konten Dokter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* OPSI OTOMATIS (Tetap Statis di Paling Depan Sesuai Gambar) */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col justify-between min-h-[220px]">
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 bg-[#F3EDE6] rounded-xl flex items-center justify-center text-gray-500 flex-shrink-0">
                  <span className="text-2xl"><BsFillPeopleFill /></span>
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#4A2810]">Siapa Saja</h3>
                  <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                    Pilih dokter yang tersedia paling cepat
                  </p>
                </div>
              </div>
              <button className="w-full bg-[#4A2810] text-white font-medium text-xs py-2.5 rounded-lg hover:bg-[#361D0B] transition-colors flex items-center justify-center gap-2">
                Pilih Otomatis <span>➔</span>
              </button>
            </div>

            {/* LOOPING DATA DOKTER DARI JSON SECARA DINAMIS */}
            {daftarDokter.map((doc) => (
              <DoctorCard 
                key={doc.id}
                name={doc.name}
                role={doc.role}
                experience={doc.experience}
                rating={doc.rating}
                statusColor={doc.statusColor}
                image={doc.image}
              />
            ))}

          </div>
        </div>

        {/* KOLOM KANAN (Sidebar Panel) */}
        <div className="space-y-5">
          <ServiceSummary selectedService={activeService} />
          <MembershipCard />
        </div>

      </div>
    </div>
  );
}