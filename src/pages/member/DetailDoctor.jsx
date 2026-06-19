import React, { useState, useEffect } from 'react'; // 1. Added useState and useEffect here
import { useParams, useNavigate } from 'react-router-dom';
import DoctorSummary from '../../components/member/DoctorSummary'; 
import ReviewCard from '../../components/member/ReviewCard';

import doctorsData from '../../data/doctorsData.json';

export default function DetailDoctor() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    const arrayDokter = doctorsData?.doctors || (Array.isArray(doctorsData) ? doctorsData : []);

    const foundDoctor = arrayDokter.find(
      (doc) => doc.id?.toString() === id?.toString()
    );
    setDoctorData(foundDoctor || null);
    setLoading(false); 

  }, [id]);

  const mockReviews = [
    {
      id: 1,
      name: "Sari Nurhayati",
      rating: 4,
      comment: "Dr. Amanda was very detailed in explaining my skin condition. The laser treatment she recommended showed results within a week!",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Jonathan Wijaya",
      rating: 5,
      comment: "Professional and kind. The chemical peel treatment was very comfortable. Highly recommended for anyone looking for serious skin care.",
      date: "1 month ago"
    }
  ];

  // 3. TAMPILAN LAUAD/LOADING (Wajib ada jika data dimulai dari null agar tidak error saat render komponen anak)
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#FCF8F5] flex items-center justify-center font-sans text-xs text-gray-400 font-bold tracking-wide">
        Memuat data dokter...
      </div>
    );
  }

  // 4. KONDISI JIKA DATA TIDAK DITEMUKAN SETELAH USEEFFECT SELESAI
  if (!doctorData) {
    return (
      <div className="w-full min-h-screen bg-[#FCF8F5] flex flex-col items-center justify-center font-sans p-4 gap-4">
        <p className="text-sm text-gray-500 font-medium">Data dokter dengan ID "{id}" tidak ditemukan.</p>
        <button 
          onClick={() => navigate('/booking')}
          className="text-xs bg-[#8C4A23] text-white px-4 py-2 rounded-xl font-bold hover:bg-[#733B1A] transition-colors"
        >
          Kembali ke Menu Booking
        </button>
      </div>
    );
  }

  // 5. RENDER UTAMA JIKA DATA SUKSES DIDAPATKAN OLEH USEEFFECT
  return (
    <div className="w-full min-h-screen bg-[#FCF8F5] text-sans antialiased">
      <div className="w-full max-w-[900px] mx-auto px-4 py-8">
        
        {/* Back Button */}
        <button 
          type="button"
          onClick={() => navigate('/booking')}
          className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-[#4A2810] transition-colors mb-6"
        >
          <span className="rotate-180 inline-block">➔</span> Kembali ke Menu Booking
        </button>

        <DoctorSummary doctor={doctorData} />

        {/* Patient Reviews Section */}
        <div className="space-y-5">
          <h2 className="font-serif text-xl font-bold text-[#4A2810]">
            Patient Reviews
          </h2>
          
          <div className="flex flex-col gap-4">
            {mockReviews.map((rev) => (
              <ReviewCard 
                key={rev.id}
                name={rev.name}
                rating={rev.rating}
                comment={rev.comment}
                date={rev.date}
              />
            ))}
          </div>

          <div className="text-center pt-4">
            <button type="button" className="text-xs font-bold text-gray-700 hover:text-[#4A2810] underline tracking-wide">
              See All 124 Reviews
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}