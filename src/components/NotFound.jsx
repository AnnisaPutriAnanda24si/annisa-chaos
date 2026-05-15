import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-[#FFFBF5]">
      {/* Angka 404 Besar dengan Font Serif */}
      <h1 className="text-[120px] md:text-[180px] font-serif leading-none text-zinc-200 relative">
        404
        <span className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl text-zinc-800 italic mt-8">
          Lost in <span className="text-orange-400 ml-2 not-italic">Beauty</span>
        </span>
      </h1>

      <div className="max-w-md mt-4">
        <h2 className="text-xl md:text-2xl font-serif text-zinc-800 mb-4">
          Halaman tidak ditemukan
        </h2>
        <p className="text-sm text-zinc-500 leading-relaxed mb-10 uppercase tracking-widest text-[10px]">
          Maaf, halaman yang Anda cari mungkin telah dipindahkan atau tidak pernah ada. 
          Mari kembali ke perawatan kecantikan Anda.
        </p>

        {/* Tombol Kembali ke Beranda */}
        <Link 
          to="/" 
          className="inline-block bg-zinc-900 text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-zinc-200"
        >
          Back to Homepage
        </Link>
      </div>

      {/* Aksen Dekoratif Singkat */}
      <div className="mt-20 flex items-center gap-4">
        <div className="h-[1px] w-12 bg-zinc-200"></div>
        <span className="text-[9px] uppercase tracking-[0.5em] text-zinc-300">Seven Beauty Clinic</span>
        <div className="h-[1px] w-12 bg-zinc-200"></div>
      </div>
    </div>
  );
}