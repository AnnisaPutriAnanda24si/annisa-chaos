export default function Table({ data }) {
  // jika data kosong atau undefined
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-10 bg-white border mt-4 text-gray-500 rounded">
        Data layanan tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200 mt-4">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-6 py-3 border-b">Nama Layanan</th>
            <th className="px-6 py-3 border-b">Kategori</th>
            <th className="px-6 py-3 border-b text-center">Rating</th>
            <th className="px-6 py-3 border-b text-center">Status</th>
            <th className="px-6 py-3 border-b">Area</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 border-b last:border-none transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                  {item.category}
                </span>
              </td>
              <td className="px-6 py-4 text-center font-bold text-yellow-600">
                ⭐ {item.rating}
              </td>
              <td className="px-6 py-4 text-center">
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                  item.status.open ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}>
                  {item.status.open ? "OPEN" : "CLOSED"}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-400">{item.location.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}