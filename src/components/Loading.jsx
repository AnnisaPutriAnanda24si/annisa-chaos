// src/components/Loading.jsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFBF5]">
      {/* Animasi Spinner Minimalis */}
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-t-2 border-orange-400 animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-r-2 border-zinc-200 animate-pulse"></div>
      </div>
      
      {/* Teks Loading dengan Font Serif */}
      <div className="mt-6 text-center">
        <h2 className="font-serif text-xl italic tracking-widest text-zinc-800">
          Seven <span className="text-orange-400 not-italic">Beauty</span>
        </h2>
        <p className="mt-2 text-[10px] uppercase tracking-[0.5em] text-zinc-400 animate-pulse">
          Loading Transformation...
        </p>
      </div>
    </div>
  );
}