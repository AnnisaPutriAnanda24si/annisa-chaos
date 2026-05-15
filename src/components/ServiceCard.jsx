export default function ServiceCard({ title, price, image, onBook}) {
  return (
    <div className="flex flex-col group">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold text-lg text-zinc-800">{title}</h3>
        <span className="font-bold text-lg">${price}</span>
      </div>
{/* Panggil fungsi onBook saat tombol diklik */}
      <button 
        onClick={() => onBook(title)}
        className="text-orange-500 text-[11px] font-bold uppercase tracking-widest flex items-center hover:text-zinc-900 transition-colors"
      >
        Book Now <span className="ml-2">→</span>
      </button>
    </div>
  );
}