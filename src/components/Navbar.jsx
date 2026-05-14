export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-[#FFFBF5]">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tighter">
        <span className="text-black uppercase">Seven</span>
        <span className="text-orange-400 uppercase ml-1">Beauty</span>
      </div>
      
      {/* Menu Navigasi */}
      <div className="hidden md:flex space-x-10 text-[13px] font-medium uppercase tracking-widest">
        <a href="#" className="hover:text-orange-400 transition">Home</a>
        <a href="#" className="hover:text-orange-400 transition">Services</a>
        <a href="#" className="hover:text-orange-400 transition">About Us</a>
        <a href="#" className="hover:text-orange-400 transition">Contact Us</a>
      </div>

      {/* Icons & Profile */}
      <div className="flex items-center space-x-5">
        <button className="text-lg"><i className="fas fa-search"></i></button>
        <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}