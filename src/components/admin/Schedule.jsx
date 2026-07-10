import React, { useState, useEffect } from "react";
import { bookingAPI } from "@/services/bookingAPI"; // 🌟 Import API booking yang sudah dibuat
import { FiCalendar, FiClock, FiUser, FiActivity } from "react-icons/fi";

export default function UpcomingBookings() {
  // 1. State untuk menyimpan data dari Supabase
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch data dari Supabase saat komponen pertama kali dimuat
  useEffect(() => {
    const getUpcomingData = async () => {
      try {
        setLoading(true);
        const data = await bookingAPI.fetchBookings(); // Mengambil data join dari Supabase
        setBookings(data);
      } catch (err) {
        console.error("Gagal mengambil data untuk widget:", err);
      } finally {
        setLoading(false);
      }
    };

    getUpcomingData();
  }, []);

  // 3. Dapatkan tanggal hari ini (Format murni YYYY-MM-DD untuk komparasi)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 4. Proses Filter & Sort data dari Supabase (Hanya ambil 5 terdekat ke depan)
  const upcomingBookings = bookings
    .filter((booking) => {
      if (!booking.schedule?.date) return false;
      const bookingDate = new Date(booking.schedule.date);
      bookingDate.setHours(0, 0, 0, 0);
      // Hanya tampilkan yang jadwalnya HARI INI atau HARI BERIKUTNYA, dan tidak Cancelled
      return bookingDate >= today && booking.status !== "Cancelled";
    })
    .sort((a, b) => new Date(a.schedule.date) - new Date(b.schedule.date))
    .slice(0, 5);

  // Format tanggal hari ini untuk Sub-header widget
  const formattedToday = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "Confirmed": return "bg-blue-50 text-blue-600 border-blue-100";
      case "Completed": return "bg-green-50 text-green-600 border-green-100";
      default: return "bg-amber-50 text-amber-600 border-amber-100"; // Pending
    }
  };

  return (
    <div className="w-full bg-white rounded-[28px] p-6 shadow-xs border border-gray-100/50 flex flex-col justify-between">
      <div>
        {/* HEADER */}
        <div className="flex justify-between items-start mb-6 border-b border-gray-50 pb-4">
          <div>
            <h3 className="font-bold text-lg text-gray-800 tracking-tight">
              Upcoming Appointments
            </h3>
            <p className="text-xs font-medium text-gray-400 mt-0.5 flex items-center gap-1">
              <FiCalendar className="w-3 h-3" /> {formattedToday}
            </p>
          </div>
          <span className="bg-gray-100 text-gray-600 font-bold px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider">
            Live Supabase
          </span>
        </div>

        {/* LOADING STATE */}
        {loading ? (
          <div className="text-center py-12 text-xs font-medium text-gray-400 animate-pulse">
            Loading upcoming slots from database...
          </div>
        ) : (
          /* LIST APPOINTMENTS FROM SUPABASE */
          <div className="space-y-4">
            {upcomingBookings.map((item) => {
              const appointmentDate = item.schedule?.date
                ? new Date(item.schedule.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "—";

              return (
                <div
                  key={item.booking_id}
                  className="group relative bg-gray-50/40 hover:bg-gray-50 border border-gray-100/70 p-4 rounded-2xl transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  {/* Info Pasien & Dokter */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-400 font-mono">
                        BKG-{String(item.booking_id).padStart(3, "0")}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border tracking-wide uppercase ${getStatusStyle(item.status)}`}>
                        {item.status}
                      </span>
                    </div>

                    <h4 className="font-bold text-gray-800 text-sm flex items-center gap-1.5 pt-0.5">
                      <FiUser className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      {item.patient?.full_name || "Unknown Patient"}
                    </h4>

                    <p className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                      <FiActivity className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      Doctor: <span className="text-gray-700 font-semibold">{item.schedule?.doctor?.doctor_name || "Assigned Doctor"}</span>
                    </p>
                    
                    <p className="text-xs text-gray-400 pl-5 italic font-medium">
                      Treatment: {item.treatment?.treatment_name || "General Checkup"}
                    </p>
                  </div>

                  {/* Waktu & Ruangan */}
                  <div className="flex sm:flex-col items-end justify-between sm:justify-center border-t sm:border-t-0 border-gray-100 pt-2.5 sm:pt-0 gap-2 shrink-0 text-right">
                    <div className="text-left sm:text-right space-y-0.5">
                      <div className="text-xs font-bold text-gray-700 flex items-center justify-start sm:justify-end gap-1">
                        <FiCalendar className="w-3 h-3 text-[#4caf50]" />
                        {appointmentDate}
                      </div>
                      <div className="text-[11px] font-mono text-gray-400 flex items-center justify-start sm:justify-end gap-1 font-medium">
                        <FiClock className="w-3 h-3 text-gray-400" />
                        {item.schedule?.start_time?.substring(0, 5) || "00:00"} - {item.schedule?.end_time?.substring(0, 5) || "00:00"}
                      </div>
                    </div>

                    <span className="bg-[#ffebee] text-[#f44336] font-bold px-3 py-1 rounded-full text-[11px] border border-[#ffcdd2]/30 tracking-wide">
                      {item.schedule?.room_number || "Room —"}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* FALLBACK JIKA TIDAK ADA DATA JANJI TEMU */}
            {upcomingBookings.length === 0 && (
              <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50/20">
                <FiCalendar className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-400">No upcoming active appointments found in database.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* FOOTER ACTION */}
      <button className="mt-6 w-full py-3 rounded-full bg-[#addbc0] text-[#1e4620] hover:bg-[#99cca6] transition text-xs font-bold shadow-xs">
        View All Appointments Log
      </button>
    </div>
  );
}