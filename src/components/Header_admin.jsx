import React from 'react';

export default function Header_admin() {
  return (
    <header className="flex justify-between items-center py-6">
      <h1 className="text-2xl font-bold text-[#1A1C1E]">Reports</h1>
      
      <button className="flex items-center gap-2 text-[#6C6F73] hover:text-black transition-colors font-bold text-sm">
        <span className="material-icons-outlined !text-[20px]">file_download</span>
        Download
      </button>
    </header>
  );
}