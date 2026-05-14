import servicesData from "../services.json";

export default function Filter({ formData, handleChange }) {
  const allTags = [...new Set(servicesData.map((item) => item.category))];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
        <input
          type="text"
          name="searchTerm" // Harus sama dengan key di state
          value={formData.searchTerm}
          onChange={handleChange}
          placeholder="Cari nama layanan atau area..."
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="w-full md:w-64">
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          name="selectedTag" // Harus sama dengan key di state
          value={formData.selectedTag}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">All Categories</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
    </div>
  );
}