import { useState } from "react";
import servicesData from "../services.json";
import Card from "../components/Card";
import Filter from "../components/Filter";

export default function Guest() {
  /* 1. Inisialisasi State dengan Objek (Best Practice) */
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });
  /* 2. Handle perubahan nilai input secara dinamis */
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  /* 3. Logika Filtering */
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Service Directory</h2>
        
        <Filter 
          formData={dataForm} 
          handleChange={handleChange} 
        />

        <Card data={filteredServices} />
      </div>
    </div>
  );
}