import React from 'react';

export default function Sidebar_admin() {
  const menus = [
    { name: 'Reports', icon: 'bar_chart', active: true },
    { name: 'Library', icon: 'bolt', active: false },
    { name: 'People', icon: 'groups', active: false },
    { name: 'Activities', icon: 'assignment', active: false },
  ];

  return (
    <aside className="w-64 bg-white min-h-screen border-r border-gray-100 flex flex-col px-6 py-8">
      {/* Logo Tesla */}
      <div className="mb-10 px-2">
        <h1 className="text-[#E82127] text-2xl font-black tracking-[0.2em]">TESLA</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1">
        {menus.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              item.active 
              ? 'bg-[#EFF4FF] text-[#1B59F8]' 
              : 'text-[#94979A] hover:bg-gray-50'
            }`}
          >
            <span className="material-icons-outlined !text-[20px]">{item.icon}</span>
            {item.name}
          </button>
        ))}

        {/* Support Section */}
        <div className="pt-8 pb-3 px-4">
          <p className="text-[10px] font-black text-[#B0B3B8] uppercase tracking-widest">Support</p>
        </div>
        
        <button className="w-full flex items-center gap-3 px-4 py-3 text-[#94979A] font-bold text-sm hover:bg-gray-50 rounded-xl">
          <span className="material-icons-outlined !text-[20px]">lightbulb</span>
          Get Started
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-[#94979A] font-bold text-sm hover:bg-gray-50 rounded-xl">
          <span className="material-icons-outlined !text-[20px]">settings</span>
          Settings
        </button>
      </nav>

      {/* User Profile Footer */}
      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3 px-2">
        <img 
          src="https://i.pravatar.cc/150?u=sam" 
          alt="Avatar" 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="overflow-hidden text-left">
          <p className="text-sm font-bold text-[#1A1C1E] truncate">Sam Wheeler</p>
          <p className="text-[11px] text-[#94979A] truncate font-medium">samwheeler@example.com</p>
        </div>
      </div>
    </aside>
  );
}