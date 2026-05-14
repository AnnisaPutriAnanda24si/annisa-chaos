export default function Footer() {
  return (
    <footer className="bg-[#FFFBF5] px-10 pt-20 pb-10 border-t border-orange-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        {/* Kolom Link */}
        <div>
          <h4 className="font-bold text-orange-400 mb-6 uppercase tracking-widest text-sm">Brand</h4>
          <ul className="space-y-3 text-sm text-zinc-600">
            <li><a href="#" className="hover:text-black">Our Story</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-orange-400 mb-6 uppercase tracking-widest text-sm">Support</h4>
          <ul className="space-y-3 text-sm text-zinc-600">
            <li><a href="#" className="hover:text-black">Booking</a></li>
            <li><a href="#" className="hover:text-black">Exchange & Returns</a></li>
            <li><a href="#" className="hover:text-black">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-orange-400 mb-6 uppercase tracking-widest text-sm">Connect</h4>
          <ul className="space-y-3 text-sm text-zinc-600">
            <li><a href="#" className="hover:text-black">Instagram</a></li>
            <li><a href="#" className="hover:text-black">Youtube</a></li>
            <li><a href="#" className="hover:text-black">Pinterest</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-xs">
          <h4 className="font-serif text-lg leading-snug mb-6">
            Get to know more about us and everything we do.
          </h4>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full border-b border-zinc-400 bg-transparent py-2 text-sm outline-none focus:border-orange-400 transition"
            />
            <button className="w-full mt-4 bg-zinc-900 text-white py-3 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-orange-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-400">
        <div className="text-black">Seven Beauty</div>
        <div className="my-4 md:my-0">All Rights Reserved</div>
        <div className="flex items-center">
          WITHOUT <span className="text-orange-400 mx-2 italic">Beauty</span> MEANS NO TRANSFORMATION
        </div>
      </div>
    </footer>
  );
}