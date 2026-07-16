import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import MembershipCard from './MembershipCard';

export default function PromoCard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data 3 Promo Skinova
  const promoSlides = [
    {
      tag: "Deluxe Package",
      title: "Glow Up with Our Deluxe Facial Package",
      description: "Enjoy 30% off on all Premium Skin Care services for your first time booking.",
      image: "https://plus.unsplash.com/premium_photo-1664187387330-d09bb508b791?auto=format&fit=crop&q=80&w=500",
      gradient: "from-[#703311] via-[#A05C35] to-[#D49B70]"
    },
    {
      tag: "Birthday Treat",
      title: "Spesial Ulang Tahun: Rayakan Hari Bahagiamu!",
      description: "Dapatkan potongan harga khusus 10% untuk seluruh jenis treatment di bulan kelahiran Anda dengan menunjukkan KTP.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=500",
      gradient: "from-[#1C352D] via-[#325A4E] to-[#588B76]" // Tema Greenery Medis
    },
    {
      tag: "Skincare Deal",
      title: "Glowing Sehat dengan Diskon Kategori Skincare",
      description: "Hemat hingga 20% perawatan skincare harian pilihan dokter spesialis kami.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBeXvTRpD48rx89ZNkWQqQlUz47scsYe8d1LNHvP2hrw_c2YxuyQnZVI&s=10?auto=format&fit=crop&q=80&w=500",
      gradient: "from-[#1F2937] via-[#4B5563] to-[#9CA3AF]" // Tema Gray Premium
    }
  ];

  // Auto-play interval setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? promoSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === promoSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='flex flex-col lg:flex-row gap-4 w-full items-stretch'>
      {/* Kiri: Slider Carousel */}
      <div className="w-full lg:w-2/3 relative rounded-2xl min-h-[260px] flex items-center overflow-hidden shadow-sm group select-none">
        
        {/* Render Slide Aktif dengan Animasi Fade Singkat */}
        {promoSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} flex items-center transition-opacity duration-500 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Overlay Dekoratif Gambar */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 bg-radial-gradient">
              <img 
                src={slide.image} 
                alt={slide.tag} 
                className="w-full h-full object-cover mix-blend-luminosity"
              />
            </div>

            {/* Konten Teks */}
            <div className="p-8 md:p-10 z-10 max-w-xl text-white text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-black/30 text-orange-200 px-2.5 py-1 rounded-md mb-4 inline-block font-urbanist">
                {slide.tag}
              </span>
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-3 leading-tight text-white">
                {slide.title}
              </h1>
              <p className="text-orange-100/80 text-xs md:text-sm leading-relaxed font-urbanist">
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        {/* Tombol Navigasi Panah (Hanya muncul/jelas saat di-hover) */}
        <button 
          onClick={handlePrev} 
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition opacity-0 group-hover:opacity-100"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={handleNext} 
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition opacity-0 group-hover:opacity-100"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>

        {/* Indikator Dots Posisi Slide */}
        <div className="absolute bottom-4 left-8 z-20 flex gap-2">
          {promoSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-6 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Kanan: Komponen Membership Card Bawaan */}
      <div className="w-full lg:w-1/3 flex">
        <MembershipCard />
      </div>
    </div>
  );
}