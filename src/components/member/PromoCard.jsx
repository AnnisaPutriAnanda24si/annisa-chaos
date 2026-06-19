import React from 'react';
import MembershipCard from './MembershipCard';

export default function PromoCard() {
  return (
    <div className='flex gap-4'>
          <div className="w-full relative rounded-2xl bg-gradient-to-r from-[#703311] via-[#A05C35] to-[#D49B70] min-h-[260px] flex items-center overflow-hidden shadow-sm">
      {/* Overlay dekoratif gradasi cahaya seperti gambar asli */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40 bg-radial-gradient">
        <img 
          src="https://plus.unsplash.com/premium_photo-1664187387330-d09bb508b791?auto=format&fit=crop&q=80&w=500" 
          alt="Products" 
          className="w-full h-full object-cover mix-blend-luminosity"
        />
      </div>

      <div className="p-8 md:p-10 z-10 max-w-xl text-white">
        <span className="text-[10px] font-bold uppercase tracking-widest bg-black/20 text-orange-200 px-2.5 py-1 rounded-md mb-4 inline-block">
          Promo
        </span>
        <h1 className="text-2xl md:text-3xl font-serif font-bold mb-3 leading-tight text-white">
          Glow Up with Our Deluxe Facial Package
        </h1>
        <p className="text-orange-100/80 text-xs md:text-sm leading-relaxed mb-6">
          Enjoy 30% off on all Premium Skin Care services this month. Limited slots available.
        </p>
        <button className="bg-white text-[#52250C] font-semibold text-xs px-5 py-2.5 rounded-md hover:bg-orange-50 transition shadow-sm">
          Book Now
        </button>
      </div>
    </div>
   <MembershipCard/> 
    </div>

  );
}