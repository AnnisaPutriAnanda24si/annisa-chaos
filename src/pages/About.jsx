import React from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";

export default function About() {
  return (
    <div className="bg-[#FFFBF5] min-h-screen">
      {/* 1. Header Section (Our Story) */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-orange-400 mb-4 font-bold">
          Our <span className="text-zinc-800">Journey</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl text-zinc-800 mb-6 leading-tight">
            Skinova Beauty Clinic
          </h1>
          <p className="text-zinc-800 font-serif text-sm md:text-base leading-relaxed mb-6">
            Didirikan dengan visi menghadirkan perawatan estetika medis berstandar tinggi yang personal dan terpercaya. Skinova hadir sebagai ruang aman bagi Anda untuk merawat kesehatan kulit sekaligus menikmati transformasi kecantikan yang natural dan berkelanjutan.
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed italic">
            Kami percaya bahwa kecantikan adalah sebuah perjalanan. Melalui inovasi teknologi medis terbaru dan komitmen pelayanan yang hangat, kami meluncurkan program keanggotaan berjenjang yang dimulai dari pendaftaran awal (Tier None) dan bertransisi secara otomatis menjadi keanggotaan premium setelah akumulasi transaksi pelanggan mencapai Rp1.000.000.
          </p>
        </div>

        {/* 3 Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="aspect-video overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600" alt="Facial treatment room" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-video overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600" alt="Aesthetic consultation" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-video overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600" alt="Premium skincare technology" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 2. Founder / Head Dermatologist Section */}
      <section className="py-20 px-6 md:px-16 bg-[#F8F3ED]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800" 
              alt="Dr. Sarah Amalia" 
              className="w-full aspect-[4/5] object-cover shadow-2xl"
            />
          </div>
          
          <div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">THE EXPERT FOUNDER</span>
            <h2 className="font-serif text-4xl text-zinc-800 mt-2 mb-6">dr. Sarah Amalia, Sp.DVE</h2>
            <p className="text-zinc-600 text-sm leading-relaxed mb-10">
              Sebagai pendiri sekaligus dokter spesialis dermatologi utama di Skinova, dr. Sarah berdedikasi menciptakan rencana perawatan yang berbasis bukti klinis (*evidence-based*) serta mendukung transparansi sistem keanggotaan yang adil untuk seluruh pasien kami sejak hari pertama konsultasi.
            </p>

            {/* Achievement List */}
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200">
              {[
                { id: "01", title: "Certified Aesthetic Dermatologist", desc: "Sertifikasi keahlian klinis estetika medis tingkat lanjut nasional dan internasional." },
                { id: "02", title: "Customer-Centric Program Pioneer", desc: "Merancang sistem akumulasi pendaftaran member transparan berbasis total booking." },
                { id: "03", title: "Eco-Friendly Clinic Initiative", desc: "Mempelopori penggunaan bahan perawatan yang ramah lingkungan dan aman untuk kulit sensitif." }
              ].map((item) => (
                <div key={item.id} className="flex gap-6 relative">
                  <div className="w-6 h-6 rounded-full bg-zinc-900 text-white text-[10px] flex items-center justify-center font-bold z-10">
                    {item.id}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-800 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-zinc-800">Meet <span className="text-orange-400">Our Experts</span></h2>
            <p className="text-zinc-400 text-xs mt-2 uppercase tracking-widest">Tim medis profesional di balik kesehatan kulit Anda</p>
          </div>
          <button className="bg-zinc-900 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500 transition shadow-lg">
            Explore All Team
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { name: "dr. James Ethan", role: "Clinical Aesthetic Doctor", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400" },
            { name: "Cynthia Makafui, Amd.Kep", role: "Lead Beauty Therapist", img: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=400" },
            { name: "Angela Goodwill", role: "Senior Medical Consultant", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" }
          ].map((member, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-zinc-200 mb-6 relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <h3 className="font-bold text-zinc-800 text-lg">{member.name}</h3>
              <p className="text-zinc-400 text-[11px] uppercase tracking-widest mb-4">{member.role}</p>
              <button className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center w-full group-hover:text-zinc-900 transition-colors">
                Read More <IoArrowForwardOutline className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}