import React, { useState, useEffect } from 'react'; // 1. Added useState and useEffect here
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
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
      <div className="w-full min-h-screen bg-[#FCF8F5] flex flex-col items-center justify-center font-sans px-4 gap-4">
        <p className="text-sm text-gray-500 font-medium">Data dokter dengan ID "{id}" tidak ditemukan.</p>
        <button 
          onClick={() => navigate('/booking')}
          className="text-xs bg-[#8C4A23] text-white px-4 rounded-xl font-bold hover:bg-[#733B1A] transition-colors"
        >
          Kembali ke Menu Booking
        </button>
      </div>
    );
  }

  // 5. RENDER UTAMA JIKA DATA SUKSES DIDAPATKAN OLEH USEEFFECT
return (
  <div className="bg-[#FAF7F2] min-h-screen">

    <div className="max-w-7xl mx-auto px-8 py-16">

      {/* BACK */}

<button
  onClick={() => navigate("/booking")}
  className="
    inline-flex
    items-center
    gap-2
    px-5
    py-3
    mb-10
    rounded-full
    border
    border-[#1C1C1C]
    bg-white
    text-[#1C1C1C]
    font-urbanist
    text-sm
    font-medium
    transition-all
    duration-300
    hover:bg-[#1C1C1C]
    hover:text-white
    hover:-translate-x-1
    hover:shadow-md
  "
>
  <FiArrowLeft className="text-base" />
  Back to Booking
</button>

      {/* SUMMARY */}

      <DoctorSummary doctor={doctorData} />

      {/* REVIEW */}

      <section className="mt-10">

        <div className="mb-10">

          <p className="uppercase tracking-[0.3em] text-xs text-[#999] font-urbanist">
            Testimonials
          </p>

          <h2 className="font-playfair text-5xl text-[#1C1C1C] mt-3">
            Patient Reviews
          </h2>

          <p className="font-urbanist text-[#555555] mt-3 max-w-xl">
            Ulasan dari pasien yang telah mempercayakan perawatan kulitnya
            bersama dokter kami.
          </p>

        </div>

        <div className="space-y-6">

          {mockReviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              rating={review.rating}
              comment={review.comment}
              date={review.date}
            />
          ))}

        </div>

      </section>

    </div>

  </div>
);
}