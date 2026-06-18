import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DoctorSummary from '../../components/member/DoctorSummary'; // KOMPONEN BARU
import ReviewCard from '../../components/member/ReviewCard';

import doctorsData from '../../data/doctorsData.json';

export default function DetailDoctor() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mencari data dokter dari JSON secara dinamis berdasarkan ID di URL routing
  const currentDoctor = doctorsData?.doctors?.find(doc => doc.id === parseInt(id)) || {
    name: "Dr. Amanda Clara",
    role: "Senior Dermatologist",
    experience: "12 YEARS EXPERIENCE",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
  };

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
      comment: "Professional and kind. The chemical peel treatment treatment was very comfortable. Highly recommended for anyone looking for serious skin care.",
      date: "1 month ago"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FCF8F5] text-sans antialiased">
      <div className="w-full max-w-[900px] mx-auto px-4 py-8">
        
        {/* Tombol Back */}
        <button 
          type="button"
          onClick={() => navigate('/booking')}
          className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-[#4A2810] transition-colors mb-6"
        >
          <span className="rotate-180 inline-block">➔</span> Kembali ke Menu Booking
        </button>

        {/* PANGGIL KOMPONEN DOCTOR SUMMARY SECARA TERPISAH */}
        <DoctorSummary doctor={currentDoctor} />

        {/* SEKSI PATIENT REVIEWS */}
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