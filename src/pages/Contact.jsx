import React from 'react';
import { 
  IoLocationOutline, 
  IoMailOutline, 
  IoCallOutline, 
  IoLogoInstagram, 
  IoLogoYoutube, 
  IoLogoTwitter, 
  IoLogoPinterest 
} from "react-icons/io5";

export default function Contact() {
  return (
    <div className="bg-[#FFFBF5] min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* KIRI: Contact Information Card */}
          <div className="lg:col-span-5 bg-[#F8F3ED] p-10 md:p-14 shadow-sm">
            <h2 className="font-serif text-3xl text-zinc-800 mb-6">Contact Information</h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10">
              Feel free to reach out to us for appointments, inquiries, or to experience the tranquility of Serene Beauty. We're here to make your beauty journey as serene as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-orange-400 shadow-sm">
                  <IoLocationOutline size={20} />
                </div>
                <div>
                  <p className="text-zinc-800 text-sm font-medium leading-snug">
                    1901 Thornridge Cir. Shiloh, Hawaii 81063, USA
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full text-orange-400 shadow-sm">
                  <IoMailOutline size={20} />
                </div>
                <p className="text-zinc-800 text-sm font-medium">reach@serenebeauty.com</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full text-orange-400 shadow-sm">
                  <IoCallOutline size={20} />
                </div>
                <p className="text-zinc-800 text-sm font-medium">(629) 555-0129</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-12">
              {[IoLogoInstagram, IoLogoYoutube, IoLogoTwitter, IoLogoPinterest].map((Icon, idx) => (
                <a key={idx} href="#" className="bg-white p-3 rounded-full text-zinc-800 hover:bg-orange-400 hover:text-white transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* KANAN: Question Form */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <h2 className="font-serif text-4xl text-zinc-800 mb-4">Have a Question?</h2>
              <div className="flex flex-wrap gap-x-4 text-xs uppercase tracking-widest text-zinc-400">
                <span>Business Hours:</span>
                <span className="text-orange-400">Mon — Fri: <span className="text-zinc-600">08.00 AM To 09.00 PM</span></span>
                <span className="text-orange-400">Sat: <span className="text-zinc-600">09.00 AM To 06.00 PM</span></span>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-[#FCF8F2] border border-orange-100 p-4 text-sm outline-none focus:border-orange-300 transition"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#FCF8F2] border border-orange-100 p-4 text-sm outline-none focus:border-orange-300 transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="What Service You Want?" 
                  className="w-full bg-[#FCF8F2] border border-orange-100 p-4 text-sm outline-none focus:border-orange-300 transition"
                />
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full bg-[#FCF8F2] border border-orange-100 p-4 text-sm outline-none focus:border-orange-300 transition"
                />
              </div>

              <textarea 
                placeholder="Message" 
                rows="6"
                className="w-full bg-[#FCF8F2] border border-orange-100 p-4 text-sm outline-none focus:border-orange-300 transition resize-none"
              ></textarea>

              <button 
                type="submit"
                className="bg-zinc-900 text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-orange-500 transition-all shadow-md"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}