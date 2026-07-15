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
  const [selectedCategory, setSelectedCategory] = useState('All Services');

  const searchInputRef = useRef(null);

  // Fungsi untuk memfilter data berdasarkan search query DAN kategori yang dipilih
  const applyFilterAndSearch = (category = selectedCategory) => {
    const query = searchInputRef.current?.value?.toLowerCase() || '';
    
    let tempServices = initialServices;

    // 1. Saring berdasarkan Kategori
    if (category !== 'All Services') {
      tempServices = tempServices.filter((item) => {
        const itemCategory = item.category?.toLowerCase();
        
        // Pemetaan kategori di UI ke kategori database JSON kamu
        if (category === 'Skin Care') {
          return itemCategory === 'lips care' || itemCategory === 'peeling';
        }
        if (category === 'Injectables') {
          return itemCategory === 'acne treatment' && item.title.toLowerCase().includes('injection');
        }
        if (category === 'Wellness') {
          // Wellness & Acne Treatment peeling
          return itemCategory === 'acne treatment' && !item.title.toLowerCase().includes('injection');
        }
        if (category === 'Hair Removal') {
          // Kita petakan Hair Care ke Hair Removal untuk kecocokan dummy UI
          return itemCategory === 'hair care';
        }
        return itemCategory === category.toLowerCase();
      });
    }

    // 2. Saring berdasarkan Search Query
    if (query.trim()) {
      tempServices = tempServices.filter((item) =>
        item.title?.toLowerCase().includes(query) || // Diganti dari item.name ke item.title
        item.description?.toLowerCase().includes(query)
      );
    }

    setFilteredServices(tempServices);
  };

  // Jalankan filter ulang setiap kali kategori berubah
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    applyFilterAndSearch(category);
  };

  // Trigger pencarian saat tombol search ditekan
  const handleSearch = () => {
    applyFilterAndSearch(selectedCategory);
  };

  // const handleSearch = () => {
  //   const query = searchInputRef.current?.value?.toLowerCase() || '';

  //   if (!query.trim()) {
  //     setFilteredServices(initialServices); // Reset if blank
  //     return;
  //   }

  //   const matches = initialServices.filter((item) =>
  //     item.name?.toLowerCase().includes(query) ||
  //     item.description?.toLowerCase().includes(query)
  //   );

  //   setFilteredServices(matches);
  // };

  return (
    <>
      <PromoCard />
      <SearchBar inputRef={searchInputRef} onSearch={handleSearch} />
      
      {/* Kirim state dan handler ke component Filter */}
      <Filter 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      /> 
      
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
    </>
  );
}