import React from 'react';
// Keluar 2 tingkat (ke src), lalu masuk ke components/member/
import PromoCard from '../../components/member/PromoCard';
import SearchBar from '../../components/member/SearchBar';
import Filter from '../../components/member/Filter';



// Keluar 2 tingkat (ke src), lalu masuk ke components/ServiceCard
// (Berdasarkan gambar, ServiceCard.jsx terletak langsung di bawah folder components, bukan di dalam member)
import ServiceCard from '../../components/member/ServiceCard';

// Keluar 2 tingkat (ke src), lalu masuk ke data/servicesData.json
import dataUtama from '../../data/servicesData.json';

export default function Home() {
  // Ambil array services dengan aman. Jika dataUtama belum keload, default ke array kosong []
  const servicesData = dataUtama?.services || [];

  return (
    <>
      <PromoCard />
      <SearchBar />
      <Filter />
      
      {/* Grid Konten Utama - Disamakan gap-nya dengan desain asli */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {servicesData.length > 0 ? (
          servicesData.map((item) => (
            /* 
              TIPS AGAR PASTI MUNCUL: 
              Kita kirim sebagai 'service={item}' DAN kita urai juga menggunakan '{...item}' 
              supaya komponen ServiceCard lama ataupun baru milikmu bisa membaca datanya dengan lancar!
            */
            <ServiceCard key={item.id} service={item} {...item} />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-400 text-xs">
            Data layanan tidak ditemukan. Periksa file servicesData.json Anda.
          </div>
        )}
      </div>

      {/* Tombol View More */}
      <div className="flex justify-center pt-8">
        <button className="border border-gray-200 text-gray-500 text-[11px] font-bold px-5 py-2 rounded-xl bg-white hover:bg-orange-50/40 transition flex items-center gap-1.5 shadow-xs">
          View More Services <span className="text-[8px] text-gray-400">▼</span>
        </button>
      </div>
    </>
  );
}