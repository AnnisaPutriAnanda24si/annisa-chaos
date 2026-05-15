// src/components/BookingModal.jsx
export default function BookingModal({ isOpen, onClose, serviceTitle }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-zinc-900 p-8 md:p-12 shadow-2xl border border-zinc-800">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-zinc-500 hover:text-white transition"
        >
          ✕
        </button>

        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl text-white mb-2">
            {serviceTitle} Appointment Form
          </h2>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            Please fill the form below, it will only take 3 minutes
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="bg-transparent border border-zinc-700 p-3 text-sm text-white outline-none focus:border-orange-400 transition"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="bg-transparent border border-zinc-700 p-3 text-sm text-white outline-none focus:border-orange-400 transition"
          />
          <input 
            type="tel" 
            placeholder="Phone" 
            className="bg-transparent border border-zinc-700 p-3 text-sm text-white outline-none focus:border-orange-400 transition"
          />
          <select className="bg-zinc-900 border border-zinc-700 p-3 text-sm text-zinc-400 outline-none focus:border-orange-400 transition">
            <option>{serviceTitle}</option>
          </select>
          <input 
            type="date" 
            className="bg-transparent border border-zinc-700 p-3 text-sm text-zinc-400 outline-none focus:border-orange-400 transition"
          />
          <input 
            type="time" 
            className="bg-transparent border border-zinc-700 p-3 text-sm text-zinc-400 outline-none focus:border-orange-400 transition"
          />
          <textarea 
            placeholder="Any Notes For Us" 
            rows="4"
            className="md:col-span-2 bg-transparent border border-zinc-700 p-3 text-sm text-white outline-none focus:border-orange-400 transition resize-none"
          ></textarea>

          <div className="md:col-span-2 mt-4">
            <button 
              type="button"
              className="bg-white text-zinc-900 px-8 py-3 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-orange-400 hover:text-white transition-all"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}