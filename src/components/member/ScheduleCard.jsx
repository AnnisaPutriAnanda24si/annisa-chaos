import React, { useState } from 'react';

export default function ScheduleCard({ id, month, date, title, doctor, time, status, onAction }) {
  const [showMenu, setShowMenu] = useState(false);
  const isCompleted = status?.toLowerCase() === 'completed';

  return (
    <div className={`flex items-center justify-between p-5 rounded-xl border transition-all bg-white relative ${
      isCompleted ? 'border-amber-100/60 bg-amber-50/20' : 'border-gray-100 shadow-2xs'
    }`}>
      {/* Sisi Kiri: Detail Jadwal */}
      <div className="flex items-center gap-5">
        {/* Penanda Tanggal Minimalis */}
        <div className="flex flex-col items-center justify-center min-w-[45px] text-center">
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{month}</span>
          <span className="text-lg font-extrabold text-gray-700 leading-tight mt-0.5">{date}</span>
        </div>

        {/* Info Treatment & Dokter */}
        <div className="space-y-0.5">
          <h3 className="text-sm font-bold text-gray-800 tracking-tight">{title}</h3>
          <p className="text-xs text-gray-400 font-medium">
            {doctor} • <span className="text-gray-500 font-semibold">{time}</span>
          </p>
        </div>
      </div>

      {/* Sisi Kanan: Status Badge & Menu Akses */}
      <div className="flex items-center gap-4">
        {isCompleted ? (
          <span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
            ✓ {status}
          </span>
        ) : (
          <span className="text-[10px] bg-white text-gray-400 border border-gray-200 px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
            {status}
          </span>
        )}

        {/* Tombol Tiga Titik Opsi Kontrol Dinamis */}
        <div className="relative">
          <button 
            type="button" 
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-400 hover:text-gray-600 text-lg font-bold p-1 leading-none focus:outline-none"
          >
            ⋮
          </button>

          {/* Dropdown Menu Aksi */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-10 text-xs">
              <button
                type="button"
                onClick={() => {
                  onAction(id, isCompleted ? 'delete' : 'cancel');
                  setShowMenu(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-gray-50 font-medium ${
                  isCompleted ? 'text-red-600' : 'text-gray-600'
                }`}
              >
                {isCompleted ? '❌ Hapus Riwayat' : '🚫 Batalkan Janji'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}