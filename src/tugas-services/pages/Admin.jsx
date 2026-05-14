import { useState } from "react";
import servicesData from "../services.json";
import Filter from "../components/Filter";
import Table from "../components/Table";

export default function Admin() {
		/*Inisialisasi DataForm*/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

		/*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Logika Filtering data untuk tabel */
  const filteredServices = servicesData.filter((item) => {
    const _searchTerm = dataForm.searchTerm.toLowerCase();
    
    const matchesSearch =
      item.name.toLowerCase().includes(_searchTerm) ||
      item.location.area.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag 
      ? item.category === dataForm.selectedTag 
      : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-red-700">Admin Dashboard</h1>
          <p className="text-gray-600">Manajemen data layanan (Table View)</p>
        </header>

        {/* Gunakan komponen Filter yang sama dengan Guest */}
        <div className="bg-white p-6 rounded-t-xl shadow-sm border-b">
          <Filter 
            formData={dataForm} 
            handleChange={handleChange} 
          />
        </div>

        {/* Tampilkan Tabel dengan data yang sudah difilter */}
        <div className="bg-white rounded-b-xl shadow-md p-4">
          <Table data={filteredServices} />
        </div>
      </div>
    </div>
  );
}