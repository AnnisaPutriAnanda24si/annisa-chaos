import React from "react";
import Button from "../guest/Button";

export default function DoctorSummary({ doctor }) {
  if (!doctor) return null;

  return (
    <section className="bg-white rounded-md border border-[#1C1C1C]/10 shadow-sm overflow-hidden">

      <div className="grid lg:grid-cols-[340px_1fr]">

        {/* FOTO */}
        <div className="h-full">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover min-h-[420px]"
          />
        </div>

        {/* CONTENT */}
        <div className="px-10 py-5 flex flex-col justify-between">

          <div>

            <p className="uppercase tracking-[0.25em] text-xs text-[#E67E22] font-urbanist mb-3">
              Dermatologist
            </p>

            <h1 className="font-playfair text-5xl text-[#1C1C1C] leading-tight">
              {doctor.name}
            </h1>

            <p className="mt-2 font-urbanist text-[#555555]">
              {doctor.role}
            </p>

            {/* INFO */}
            <div className="flex flex-wrap gap-10 mt-8">

              <div>
                <p className="text-xs uppercase tracking-wider text-[#999] font-urbanist">
                  Experience
                </p>

                <h3 className="font-playfair text-2xl text-[#1C1C1C] mt-1">
                  {doctor.experience}
                </h3>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#999] font-urbanist">
                  Rating
                </p>

                <h3 className="font-playfair text-2xl text-[#1C1C1C] mt-1">
                  ⭐ {doctor.rating}/5
                </h3>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#999] font-urbanist">
                  Patients
                </p>

                <h3 className="font-playfair text-2xl text-[#1C1C1C] mt-1">
                  2,400+
                </h3>
              </div>

            </div>

            <div className="w-full h-px bg-[#1C1C1C]/10 my-8"></div>

            <h3 className="font-playfair text-2xl text-[#1C1C1C] mb-3">
              About Doctor
            </h3>

            <p className="font-urbanist text-[#555555] leading-8">
              {doctor.name} merupakan dokter spesialis dermatologi yang telah
              berpengalaman menangani berbagai perawatan kulit modern mulai dari
              facial rejuvenation, laser treatment, hingga anti-aging therapy.
              Beliau dikenal dengan pendekatan yang personal sehingga setiap
              pasien memperoleh solusi yang sesuai dengan kondisi kulit masing-
              masing.
            </p>

            {/* SPECIALITY */}

            <div className="mt-8">

              <h4 className="font-playfair text-xl mb-4 text-[#1C1C1C]">
                Expertise
              </h4>

              <div className="flex flex-wrap gap-3">

                {[
                  "Facial Rejuvenation",
                  "Laser Therapy",
                  "Chemical Peel",
                  "Anti Aging",
                  "Skin Consultation"
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#1C1C1C]/10 text-sm font-urbanist text-[#555]"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* BUTTON */}

          <div className="mt-10">
            <Button to="/appointment" variant="primary">
              Book Appointment
            </Button>
          </div>

        </div>

      </div>

    </section>
  );
}