import React, { Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../../components/guest/Hero";
import Button from "../../components/guest/Button";
import FeatureSection from "../../components/guest/FeatureSection";
import FAQ from "../../components/guest/FAQ";
import TestimonialSection from "../../components/guest/TestimonialSection";
import CTA from "../../components/guest/CTA";

// Import Data Dummy Services
import servicesData from '../../data/servicesData.json';

// Lazy Import ServiceCard untuk optimasi performa
const ServiceCard = React.lazy(() => import("../../components/ServiceCard"));

const LandingPage = () => {
  const navigate = useNavigate();

  // Arahkan ke login jika user mencoba booking langsung dari Landing Page guest
  const handleRedirectToLogin = () => {
    navigate("/login");
  };

  const featuredServices = servicesData?.services?.slice(0, 3) || [];

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />


      {/* ================= SECTION TREATMENT & PROMO HIGHLIGHT ================= */}
      <main className="py-20 bg-[#FFFBF5]">
        <div className="px-6 md:px-10 max-w-7xl mx-auto space-y-16">
          
          {/* PROMO HIGHLIGHT CARD (Mengadopsi Style FeatureCard) */}
          <div
            className="
              bg-white
              rounded-xl
              p-8 md:p-12
              shadow-sm
              border
              border-gray-100
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              flex flex-col md:flex-row
              items-center justify-between
              gap-8
            "
          >
            {/* Sisi Kiri: Informasi Diskon Besar */}
            <div className="flex items-center gap-6 md:gap-8 flex-col sm:flex-row text-center sm:text-left">
              {/* Bagian Angka Diskon yang Sangat Menonjol */}
              <div
                className="
                  w-28 h-28 md:w-32 md:h-32
                  rounded-full
                  bg-[#FAF7F2]
                  flex flex-col
                  items-center
                  justify-center
                  shrink-0
                  border border-orange-100
                "
              >
                <span className="font-playfair text-3xl md:text-4xl font-bold text-[#E67E22] leading-none">
                  30%
                </span>
                <span className="font-urbanist text-[10px] font-bold uppercase tracking-widest text-[#555555] mt-1">
                  Discount
                </span>
              </div>

              {/* Teks Penjelas Promo */}
              <div className="space-y-2">
                <p className="uppercase tracking-[0.35em] text-xs font-semibold text-[#E67E22] font-urbanist">
                  Exclusive New Member Offer
                </p>
                <h3 className="font-playfair text-3xl md:text-4xl text-[#1C1C1C] leading-tight">
                  Nikmati Perawatan Pertama Anda <br className="hidden md:inline" />
                  dengan Potongan Harga Khusus.
                </h3>
                <p className="font-urbanist text-[#555555] text-sm md:text-base leading-relaxed max-w-xl">
                  Daftarkan diri Anda hari ini sebagai member baru Skinova dan langsung klaim diskon sebesar 30% untuk seluruh jenis treatment kecantikan unggulan kami.
                </p>
              </div>
            </div>

            {/* Sisi Kanan: Action Button */}
            <div className="shrink-0">
              <Button
                to="/register"
                variant="primary"
                size="lg"
              >
                Ambil Promo Sekarang
              </Button>
            </div>
          </div>

          {/* ================= FEATURED TREATMENTS GRID ================= */}
          <div>
            {/* Section Header */}
            <div className="flex justify-between items-end mb-12 border-b border-orange-100 pb-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair text-[#1C1C1C]">
                  Our Featured <span className="text-[#E67E22] italic">Treatments</span>
                </h2>
                <p className="text-xs text-[#555555] uppercase tracking-[0.25em] mt-2 font-urbanist">
                  Layanan unggulan dengan potongan harga spesial member baru
                </p>
              </div>
              
              {/* Tombol Explore All mengarah ke halaman login */}
              <Link 
                to="/login" 
                className="bg-[#1C1C1C] text-white px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#E67E22] transition-colors font-urbanist"
              >
                Explore All
              </Link>
            </div>

            {/* Grid Items (Menampilkan 3 Card) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
              <Suspense fallback={<div className="text-zinc-400 text-sm font-urbanist">Loading services...</div>}>
                {featuredServices.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Badge Diskon 30% Member Baru disesuaikan dengan warna #E67E22 */}
                    <span className="absolute top-4 left-4 z-10 bg-[#E67E22] text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 shadow-md font-urbanist">
                      NEW MEMBER -30%
                    </span>
                    
                    <ServiceCard 
                      title={item.title}
                      price={item.price}
                      image={item.image}
                      onBook={handleRedirectToLogin} 
                    />
                  </div>
                ))}
              </Suspense>
            </div>
          </div>

        </div>
      </main>
      {/* ==================================================================== */}


      {/* 3. Feature Section */}
      <FeatureSection />

      {/* 4. FAQ */}
      <FAQ />

      {/* 5. Testimonial */}
      <TestimonialSection />

      {/* 6. CTA */}
      <CTA />
    </>
  );
};

export default LandingPage;