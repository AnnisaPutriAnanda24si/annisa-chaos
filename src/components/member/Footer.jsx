import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3EDE6] mt-12 border-t border-gray-200/40 text-gray-600">
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
        {/* Info Klinik */}
        <div>
          <h2 className="font-serif text-base font-bold text-[#4A2810] mb-2">Serene Beauty</h2>
          <p className="text-gray-400 leading-relaxed max-w-xs text-[11px]">
            Combining high-end medical expertise with a luxury spa experience to reveal your most radiant self.
          </p>
          <div className="flex space-x-3 mt-4 text-gray-400">
            <span className="cursor-pointer hover:text-[#8C4A23]">🌐</span>
            <span className="cursor-pointer hover:text-[#8C4A23]">✉️</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#4A2810] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-500 text-[11px]">
            <li><a href="#" className="hover:text-[#8C4A23]">Our Doctors</a></li>
            <li><a href="#" className="hover:text-[#8C4A23]">Service List</a></li>
            <li><a href="#" className="hover:text-[#8C4A23]">Membership</a></li>
            <li><a href="#" className="hover:text-[#8C4A23]">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#4A2810] mb-3">Support</h3>
          <ul className="space-y-2 text-gray-500 text-[11px]">
            <li><a href="#" className="hover:text-[#8C4A23]">Help Center</a></li>
            <li><a href="#" className="hover:text-[#8C4A23]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#8C4A23]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#8C4A23]">Booking Guide</a></li>
          </ul>
        </div>
      </div>

      {/* Garis Hak Cipta */}
      <div className="border-t border-gray-200/50 py-3 px-6 max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-400">
        <p>© 2026 Serene Beauty Clinic. All rights reserved.</p>
        <div className="space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}