import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { scheduleAPI } from "@/services/scheduleAPI"; // 🌟 Import API schedule kamu

export default function Calendar() {
  // --- STATE KALENDER UTAMA ---
  const [currentDate, setCurrentDate] = useState(new Date());
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0 = Jan, 11 = Des

  // --- FETCH DATA JADWAL DARI SUPABASE ---
  useEffect(() => {
    const fetchScheduleDates = async () => {
      try {
        setLoading(true);
        const data = await scheduleAPI.fetchSchedules();
        setSchedules(data);
      } catch (err) {
        console.error("Gagal memuat tanggal kalender dari Supabase:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchScheduleDates();
  }, []);

  // --- KALKULASI LOGIKA MATRIKS HARI DI KALENDER ---
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // Hari pertama jatuh di hari apa (0=Ahad, dst)
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Jumlah hari dalam bulan ini (28-31)

  // Mengatur navigasi ganti bulan
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Nama bulan untuk header teks kalender
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Membuat array kotak kalender (menggabungkan blok kosong awal + isi tanggal)
  const calendarCells = [];
  
  // 1. Masukkan sel kosong (padding) untuk menyesuaikan hari pertama awal bulan
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarCells.push(null);
  }

  // 2. Masukkan angka tanggal asli bulan berjalan (1 sampai 28/30/31)
  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(day);
  }

  // Helper untuk mencocokkan apakah tanggal sel kalender ada di list database Supabase
  const checkHasSchedule = (day) => {
    if (!day) return false;

    // Ubah tanggal sel berjalan menjadi format standar ISO YYYY-MM-DD Supabase lokal
    const formattedDayStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    // Cari apakah ada baris date di tabel schedule yang sama persis
    return schedules.some((sch) => sch.date === formattedDayStr);
  };

  return (
    <div className="bg-white rounded-[28px] p-6 shadow-xs border border-gray-100/60 w-full max-w-sm mx-auto">
      {/* HEADER KALENDER */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="font-bold text-gray-800 tracking-tight text-base">
            {monthNames[currentMonth]} {currentYear}
          </h3>
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
            {loading ? "Syncing data..." : "Clinic Roster"}
          </p>
        </div>

        <div className="flex gap-2">
          <button 
            onClick={handlePrevMonth}
            className="w-8 h-8 rounded-full bg-[#f3f9f6] text-[#1e4620] hover:bg-[#cfe8db] transition flex items-center justify-center text-xs"
          >
            <FaChevronLeft />
          </button>

          <button 
            onClick={handleNextMonth}
            className="w-8 h-8 rounded-full bg-[#f3f9f6] text-[#1e4620] hover:bg-[#cfe8db] transition flex items-center justify-center text-xs"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* NAMA-NAMA HARI */}
      <div className="grid grid-cols-7 gap-2 text-center text-[11px] font-bold text-gray-400 mb-3 uppercase tracking-wider">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>

      {/* MATRIKS KOTAK BULANAN */}
      <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-gray-700">
        {calendarCells.map((day, idx) => {
          const hasSchedule = checkHasSchedule(day);
          
          return (
            <div
              key={idx}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all relative ${
                !day 
                  ? "bg-transparent pointer-events-none" 
                  : hasSchedule
                    ? "bg-[#addbc0] text-[#1e4620] font-bold shadow-xs border border-[#99cca6]/30 cursor-pointer hover:brightness-95"
                    : "hover:bg-gray-100 cursor-pointer text-gray-600 font-medium"
              }`}
              title={hasSchedule ? "Ada jadwal praktek aktif" : ""}
            >
              {day}
              {/* Titik kecil dekoratif jika ada jadwal */}
              {hasSchedule && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#1e4620]/60"></span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}