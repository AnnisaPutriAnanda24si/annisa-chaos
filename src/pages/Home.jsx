import React from 'react';
import { useState } from 'react';
// Lazy Imports untuk Components
const Navbar = React.lazy(() => import('../components/Navbar'));
const Footer = React.lazy(() => import('../components/Footer'));
const BookingModal = React.lazy(() => import('../components/BookingModal'));
const ServiceCard = React.lazy(() => import('../components/ServiceCard'));

import servicesData from '../data/services.json'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = (title) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };
  
  return (
    <div className="min-h-screen bg-[#FFFBF5] font-sans text-zinc-900">

      {/* Hero Section Singkat (Opsional, sesuai gambar bagian atas) */}
      <header className="px-10 py-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          The Place Of <span className="text-orange-400 italic">Beauty</span>
        </h1>
        <p className="max-w-md text-sm text-zinc-500 leading-relaxed">
          Explore our expert services tailored for you. 
          Find the perfect look that makes you feel confident.
        </p>
      </header>

      {/* Looping Kategori Menggunakan Map */}
      <main className="space-y-20 pb-20">
        {servicesData.map((section, idx) => (
          <section key={idx} className="px-10">
            {/* Section Header */}
            <div className="flex justify-between items-end mb-10 border-b border-zinc-200 pb-4">
              <h2 className="text-3xl font-serif tracking-tight">{section.category}</h2>
              <button className="bg-zinc-900 text-white px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-orange-500 transition-colors">
                Explore All
              </button>
            </div>

            {/* Grid Items Menggunakan Map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
              {section.items.map((item, itemIdx) => (
                <ServiceCard 
                  key={itemIdx}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  onBook={handleOpenModal}
                />
              ))}
            </div>
          </section>
        ))}

        <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={selectedService} 
      />

      </main>

    </div>
  );
}