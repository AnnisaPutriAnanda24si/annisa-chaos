import { BsFillPeopleFill } from "react-icons/bs"; 
import React from 'react';
import DoctorCard from '../../components/member/DoctorCard';
import ServiceSummary from '../../components/member/ServiceSumary';
import MembershipCard from '../../components/member/MembershipCard';
import servicesData from '../../data/servicesData.json';
import doctorsData from '../../data/doctorsData.json';

export default function Booking() {
  const activeService = servicesData?.services?.[0];
  const daftarDokter = doctorsData?.doctors || [];

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Header */}
        <div className="mb-12 w-full">

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#E67E22]
              font-urbanist
            "
          >
            BOOK APPOINTMENT
          </p>

          <h1
            className="
              mt-3
              font-playfair
              text-4xl
              lg:text-5xl
              text-[#1C1C1C]
            "
          >
            Choose Your{" "}
            <span className="italic text-[#E67E22]">
              Dermatologist
            </span>
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              text-[#555555]
              font-urbanist
              leading-relaxed
            "
          >
            Select a trusted dermatologist for your selected treatment.
            Every specialist is experienced and ready to provide
            personalized care for your skin.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Auto Select */}
              <div
                className="
                  bg-white
                  rounded-2xl
                  border
                  border-[#1C1C1C]/5
                  shadow-sm
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all
                  duration-300
                  p-6
                  flex
                  flex-col
                  justify-between
                "
              >

<div>

  {/* Ukuran bulat diturunkan dari w-16 h-16 ke w-12 h-12, margin bawah dikurangi ke mb-3 */}
  <div
    className="
      w-12
      h-12
      rounded-full
      bg-[#FAF7F2]
      text-[#E67E22]
      flex
      items-center
      justify-center
      text-xl
      mb-3
    "
  >
    <BsFillPeopleFill />
  </div>

  {/* Font diturunkan dari text-2xl ke text-lg agar lebih ringkas */}
  <h3 className="font-playfair text-lg font-semibold text-[#1C1C1C]">
    Automatic Selection
  </h3>

  {/* Jarak atas (mt) dikurangi ke mt-1.5, dan ukuran teks deskripsi dibuat text-sm */}
  <p className="mt-1.5 text-[#555555] font-urbanist text-sm leading-relaxed">
    Let Skinova automatically assign the earliest available
    dermatologist based on your preferred treatment.
  </p>

</div>

                <button
                  className="
                    mt-8
                    w-full
                    bg-[#1C1C1C]
                    hover:bg-[#E67E22]
                    text-white
                    py-3
                    rounded-full
                    transition-all
                    duration-300
                    font-urbanist
                    font-medium
                  "
                >
                  <a href="/checkout"> Select Automatically</a>
                 
                </button>

              </div>

              {/* Doctor Cards */}
              {daftarDokter.map((doc) => (
                <DoctorCard
                  key={doc.id}
                  name={doc.name}
                  role={doc.role}
                  experience={doc.experience}
                  rating={doc.rating}
                  statusColor={doc.statusColor}
                  image={doc.image}
                />
              ))}

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div
            className="
              lg:col-span-4
              space-y-6
              sticky
              top-24
              self-start
            "
          >

            <ServiceSummary
              selectedService={activeService}
            />

            <MembershipCard />

          </div>

        </div>

      </div>
    </div>
  );
}