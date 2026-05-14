import data from "../services.json"

export default function Card({ data }) {
  if (data.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-lg shadow">
        <p className="text-gray-500">Tidak ada layanan yang sesuai dengan kriteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
          <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-gray-900 leading-tight">{item.name}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                {item.category}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-2">📍 {item.location.area}, {item.location.city}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-yellow-500 font-bold">⭐ {item.rating}</span>
              <span className={`text-xs font-bold ${item.status.open ? 'text-green-600' : 'text-red-600'}`}>
                {item.status.open ? 'OPEN' : 'CLOSED'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
