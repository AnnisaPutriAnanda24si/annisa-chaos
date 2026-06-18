import React, { useState } from 'react';
import ScheduleCard from '../../components/member/ScheduleCard';

export default function Schedule() {
  // Mengubah data statis menjadi State Dinamis
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      month: "OCT",
      date: "24",
      title: "Full Body Detox Massage",
      doctor: "Dr. Sarah Jenkins",
      time: "10:30 AM",
      status: "Scheduled"
    },
    {
      id: 2,
      month: "OCT",
      date: "28",
      title: "Micro-Needling Session",
      doctor: "Dr. Amanda Clara",
      time: "02:15 PM",
      status: "Scheduled"
    },
    {
      id: 3,
      month: "NOV",
      date: "05",
      title: "HydraFacial Treatment",
      doctor: "Dr. Jason Shatsky",
      time: "09:00 AM",
      status: "Completed"
    }
  ]);

  // Fungsi Dinamis untuk Menangani Aksi Batal atau Hapus
  const handleAction = (id, type) => {
    if (type === 'cancel') {
      const konfirmasi = window.confirm("Apakah Anda yakin ingin membatalkan janji temu ini?");
      if (konfirmasi) {
        // Mengubah status secara dinamis menjadi Canceled
        setAppointments(prev => 
          prev.map(item => item.id === id ? { ...item, status: 'Canceled' } : item)
        );
      }
    } else if (type === 'hapus') {
      // Menghapus data dari list secara dinamis
      setAppointments(prev => prev.filter(item => item.id !== id));
    }
  };

  // Memisahkan kategori secara dinamis menggunakan filter array
  const upcomingBookings = appointments.filter(item => item.status.toLowerCase() === 'scheduled');
  const finishedBookings = appointments.filter(item => 
    item.status.toLowerCase() === 'completed' || item.status.toLowerCase() === 'canceled'
  );

  return (
    <div className="w-full min-h-screen bg-[#FCF8F5] text-sans antialiased">
      <div className="w-full max-w-[1000px] mx-auto px-4 py-10">
        
        {/* ================= HEADER HALAMAN ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="font-serif text-4xl font-bold text-[#4A2810] tracking-tight">
              My Appointments
            </h1>
            <p className="text-xs text-gray-500 mt-1.5 font-medium">
              Manage your journey to tranquility and rejuvenation.
            </p>
          </div>
          
          <a href='/home_member'
            className="bg-[#4A2810] hover:bg-[#361D0B] text-white font-bold text-xs px-5 py-3 rounded-lg shadow-2xs transition-colors flex items-center justify-center gap-1.5 self-start sm:self-center uppercase tracking-wider"
          >
            <span>+</span> Book New Service
          </a>
        </div>

        {/* ================= SEKSI 1: UPCOMING BOOKINGS ================= */}
        <div className="space-y-4 mb-10">
          <h2 className="font-serif text-xl font-bold text-[#4A2810] border-b border-gray-200/60 pb-2">
            Upcoming Bookings
          </h2>
          <div className="flex flex-col gap-3">
            {upcomingBookings.length > 0 ? (
              upcomingBookings.map((item) => (
                <ScheduleCard 
                  key={item.id}
                  id={item.id}
                  month={item.month}
                  date={item.date}
                  title={item.title}
                  doctor={item.doctor}
                  time={item.time}
                  status={item.status}
                  onAction={handleAction}
                />
              ))
            ) : (
              <p className="text-xs text-gray-400 italic py-4">Tidak ada jadwal kunjungan terdekat.</p>
            )}
          </div>
        </div>

        {/* ================= SEKSI 2: FINISHED BOOKINGS ================= */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-[#4A2810] border-b border-gray-200/60 pb-2">
            Finished Bookings
          </h2>
          <div className="flex flex-col gap-3">
            {finishedBookings.length > 0 ? (
              finishedBookings.map((item) => (
                <ScheduleCard 
                  key={item.id}
                  id={item.id}
                  month={item.month}
                  date={item.date}
                  title={item.title}
                  doctor={item.doctor}
                  time={item.time}
                  status={item.status}
                  onAction={handleAction}
                />
              ))
            ) : (
              <p className="text-xs text-gray-400 italic py-4">Belum ada riwayat kunjungan selesai.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}