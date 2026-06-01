import React from 'react';

export default function StatCard({ bgColor, icon, label, value }) {
  return (
    <div className={`${bgColor} rounded-[24px] p-5 relative overflow-hidden`}>
      {/* Ornamen Latar Belakang */}
      <div className="absolute right-5 top-4 text-[80px] text-white/20 select-none pointer-events-none">
        ✦
      </div>

      <div className="flex items-center gap-4 relative z-10">
        {/* Lingkaran Ikon */}
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-700 text-lg">
          {icon}
        </div>

        {/* Konten Teks */}
        <div>
          <p className="text-xs text-gray-500">
            {label}
          </p>
          <h2 className="text-[34px] font-semibold">
            {value}
          </h2>
        </div>
      </div>
    </div>
  );
}