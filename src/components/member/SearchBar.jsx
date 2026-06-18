import React from 'react';

export default function SearchBar() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 mt-6">
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-3">
        {/* Input Wrapper */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search for services or treatments..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#8C4A23] transition-colors"
          />
        </div>
        
        {/* Button Search */}
        <button 
          type="submit" 
          className="bg-[#8C4A23] hover:bg-[#733B1A] text-white font-medium text-xs px-6 py-3 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm"
        >
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </button>
      </form>
    </div>
  );
}