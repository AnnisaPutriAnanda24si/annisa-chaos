import React from 'react';

export default function ReviewCard({ name, rating, comment, date }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-2xs space-y-3">
      {/* ⭐ Bintang Rating */}
      <div className="flex gap-0.5 text-amber-400 text-sm">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < Math.floor(rating) ? '★' : '☆'}</span>
        ))}
      </div>

      {/* Teks Komentar */}
      <p className="text-xs text-gray-600 italic font-medium leading-relaxed">
        "{comment}"
      </p>

      {/* Profil Singkat User */}
      <div className="flex items-center gap-3 pt-1">
        <div className="w-8 h-8 rounded-full bg-[#F3EDE6] flex items-center justify-center font-bold text-[#4A2810] text-xs">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-800">{name}</h4>
          <p className="text-[10px] text-gray-400 font-medium">Verified Patient • {date}</p>
        </div>
      </div>
    </div>
  );
}