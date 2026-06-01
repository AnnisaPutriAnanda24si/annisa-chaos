import React from 'react';

export default function DashboardCard({ title, filterText, children }) {
  return (
    <div className="bg-white rounded-[28px] p-6">
      {/* Bagian Header Card */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h3 className="font-semibold text-lg text-[#1A2E26]">
            {title}
          </h3>
        </div>

        {filterText && (
          <button className="bg-[#dff0e6] px-4 py-2 rounded-full text-sm flex items-center gap-2 text-[#00B074] font-medium">
            {filterText}
          </button>
        )}
      </div>

      {/* Bagian Konten Grafik / Isi Utama */}
      {children}
    </div>
  );
}