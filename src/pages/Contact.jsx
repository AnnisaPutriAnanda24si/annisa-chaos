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
            <h2 className="font-serif text-3xl text-zinc-800 mb-6">Membership Support</h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Butuh bantuan untuk aktivasi akun atau punya pertanyaan seputar cara menjadi member? Hubungi tim kami sekarang.
            </p>
            <blockquote className="border-l-2 border-orange-400 pl-4 text-xs text-zinc-600 italic mb-10">
              *Catatan: Semua pendaftar baru akan terdaftar sebagai <strong>Tier None</strong>. Keanggotaan Anda akan otomatis naik ke tingkat premium setelah total akumulasi booking mencapai Rp1.000.000.
            </blockquote>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-orange-400 shadow-sm">
                  <IoLocationOutline size={20} />
                </div>
                <div>
                  <p className="text-zinc-800 text-sm font-medium leading-snug">
                    Skinova Beauty Clinic Center • Main Plaza Building, Floor 4
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full text-orange-400 shadow-sm">
                  <IoMailOutline size={20} />
                </div>
                <p className="text-zinc-800 text-sm font-medium">member@skinovabeauty.com</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full text-orange-400 shadow-sm">
                  <IoCallOutline size={20} />
                </div>
                <p className="text-zinc-800 text-sm font-medium">(021) 555-0129 (Ext. 4)</p>
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

          {/* KANAN: Membership Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <h2 className="font-serif text-4xl text-zinc-800 mb-4">Konsultasi Aktivasi Member</h2>
              <div className="flex flex-wrap gap-x-4 text-xs uppercase tracking-widest text-zinc-400">
                <span>Jam Kerja Layanan:</span>
                <span className="text-orange-400">Mon — Fri: <span className="text-zinc-600">08.00 AM To 05.00 PM</span></span>
                <span className="text-orange-400">Sat: <span className="text-zinc-600">09.00 AM To 01.00 PM</span></span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Nama Lengkap Anda" 
                  className="w-full bg-[#FCF8F2] border border-orange-100 p-4 text-sm outline-none focus:border-orange-300 transition"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Alamat Email (untuk Akun Member)" 
                  className="w-full bg-[#FCF8F2] border border-orange-100 p-4 text-sm outline-none focus:border-orange-300 transition"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Menanyakan status akun saat ini */}
                <select 
                  className="w-full bg-[#FCF8F2] border border-orange-100 p-4 text-sm outline-none focus:border-orange-300 transition text-zinc-700"
                  required
                >
                  <option value="" disabled selected>Apakah Anda sudah memiliki akun reguler?</option>
                  <option value="no">Belum, saya ingin mendaftar dari awal</option>
                  <option value="yes">Sudah, ingin konsultasi cara tracking akumulasi booking 1jt</option>
                  <option value="other">Pertanyaan lainnya mengenai keuntungan member</option>
                </select>
                
                <input 
                  type="tel" 
                  placeholder="Nomor WhatsApp (Aktif)" 
                  className="w-full bg-[#FCF8F2] border border-orange-100 p-4 text-sm outline-none focus:border-orange-300 transition"
                  required
                />
              </div>

              <textarea 
                placeholder="Tuliskan detail pertanyaan atau bantuan yang Anda perlukan seputar pendaftaran awal keanggotaan (Tier None)..." 
                rows="6"
                className="w-full bg-[#FCF8F2] border border-orange-100 p-4 text-sm outline-none focus:border-orange-300 transition resize-none"
                required
              ></textarea>

              <button 
                type="submit"
                className="bg-zinc-900 text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-orange-500 transition-all shadow-md"
              >
                Kirim Permohonan Konsultasi
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}