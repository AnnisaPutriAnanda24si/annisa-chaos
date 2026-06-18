import React from 'react';
import AppointmentForm from '../../components/member/AppointmentForm';
import ServiceSummary from '../../components/member/ServiceSumary';
import MembershipCard from '../../components/member/MembershipCard';

// Impor data JSON layanan dan dokter yang sudah dibuat sebelumnya
import servicesData from '../../data/servicesData.json';
import doctorsData from '../../data/doctorsData.json';

export default function CheckoutPage() {
  // Mengambil data pertama sebagai fallback/default simulasi sesuai gambar
  const selectedService = servicesData?.services?.[0] || {
    title: "Facial Rejuvenation",
    description: "A premium treatment designed to restore skin elasticity and natural glow through advanced dermatological techniques.",
    duration: 60,
    price: 850000,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=200"
  };

  const selectedDoctor = doctorsData?.doctors?.[0] || {
    name: "Amanda Clara",
    role: "Skin & Beauty Therapist",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200"
  };

  return (
    <div className="w-full min-h-screen bg-[#FCF8F5] text-sans antialiased">
      <div className="w-full max-w-[1200px] mx-auto px-4 py-8">
        
        {/* ================= HEADER HALAMAN ================= */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-[#4A2810] tracking-tight">
            Select Your Appointment
          </h1>
          <p className="text-xs text-gray-500 mt-1.5 font-medium">
            Choose your preferred date and time for a serene experience.
          </p>
        </div>

        {/* ================= GRID UTAMA CKECHOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* KOLOM KIRI: FORM JADWAL & PEMBAYARAN (Space 2/3) */}
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>

          {/* KOLOM KANAN: SIDEBAR RINGKASAN & MEMBERSHIP (Space 1/3) */}
          <div className="space-y-6">
            {/* Mengirimkan data service dan data dokter terpilih */}
            <ServiceSummary 
              selectedService={selectedService} 
              selectedDoctor={selectedDoctor} 
            />
            
            {/* Kartu Status Membership */}
            <MembershipCard />
          </div>

        </div>
        
      </div>
    </div>
  );
}