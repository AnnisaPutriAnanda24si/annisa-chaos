import React, { useState, useRef } from 'react';

// Keluar 2 tingkat (ke src), lalu masuk ke components/member/
import PromoCard from '../../components/member/PromoCard';
import SearchBar from '../../components/member/SearchBar';
import Filter from '../../components/member/Filter';

import ServiceCard from '../../components/member/ServiceCard';

import dataUtama from '../../data/servicesData.json';

export default function Home() {
  const initialServices = dataUtama?.services || dataUtama || [];
  const [filteredServices, setFilteredServices] = useState(initialServices);

  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const query = searchInputRef.current?.value?.toLowerCase() || '';

    if (!query.trim()) {
      setFilteredServices(initialServices); // Reset if blank
      return;
    }

    const matches = initialServices.filter((item) =>
      item.name?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query)
    );

    setFilteredServices(matches);
  };

  return (
    <>
      <PromoCard />
      <SearchBar inputRef={searchInputRef} onSearch={handleSearch} />
      <Filter /> {/* Belum ada logika untuk filternya */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {filteredServices.length > 0 ? (
          filteredServices.map((item) => (
            <ServiceCard key={item.id} service={item} {...item} />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-400 text-xs">
            Data layanan tidak ditemukan.
          </div>
        )}
      </div>

      <div className="flex justify-center pt-8">
        <button className="border border-gray-200 text-gray-500 text-[11px] font-bold px-5 py-2 rounded-xl bg-white hover:bg-orange-50/40 transition flex items-center gap-1.5 shadow-xs">
          View More Services <span className="text-[8px] text-gray-400">▼</span>
        </button>
      </div>
    </>
  );
}