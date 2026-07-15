import React from "react";
import { Link } from "react-router-dom";
import { FaExchangeAlt } from "react-icons/fa";
import { BiFace } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

export default function ServiceSummary({
  selectedService,
  selectedDoctor,
}) {
  if (!selectedService) {
    return (
      <div className="bg-white rounded-md border border-[#1C1C1C]/10 p-8 text-center font-urbanist text-[#555555]">
        Loading service...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md border border-[#1C1C1C]/10 shadow-sm overflow-hidden">

      {/* IMAGE */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={selectedService.image}
          alt={selectedService.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

        <div className="absolute bottom-6 left-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
            <BiFace className="text-[#E67E22]" />
            <span className="font-urbanist text-sm font-medium text-[#1C1C1C]">
              Skin Care
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-6">

        <p className="uppercase tracking-[0.25em] text-xs text-[#E67E22] font-urbanist mb-3">
          Service
        </p>

        <h2 className="font-playfair text-2xl text-[#1C1C1C]">
          {selectedService.title}
        </h2>

        <p className="font-urbanist text-[#555555] leading-7 mt-4">
          {selectedService.description}
        </p>

        {/* INFO */}

        <div className="grid grid-cols-2 gap-6 mt-8">

          <div>

            <p className="uppercase text-xs tracking-widest text-[#999] font-urbanist">
              Duration
            </p>

            <h3 className="font-playfair text-2xl text-[#1C1C1C] mt-2">
              {selectedService.duration || 60} Min
            </h3>

          </div>

          <div>

            <p className="uppercase text-xs tracking-widest text-[#999] font-urbanist">
              Price
            </p>

            <h3 className="font-playfair text-2xl text-[#1C1C1C] mt-2">
              Rps{selectedService.price}
            </h3>

          </div>

        </div>

        {/* DOCTOR */}

{selectedDoctor && (
  <>
    <div className="h-px bg-[#1C1C1C]/10 my-8"></div>

    <p className="uppercase tracking-[0.25em] text-xs text-[#E67E22] font-urbanist mb-5">
      Selected Doctor
    </p>

    {/* Doctor Info */}
    <div className="flex items-center gap-4">

      <img
        src={selectedDoctor.image}
        alt={selectedDoctor.name}
        className="w-16 h-16 rounded-full object-cover border border-[#E5E5E5]"
      />

      <div className="flex-1">

        <h4 className="font-playfair text-2xl text-[#1C1C1C]">
          {selectedDoctor.name}
        </h4>

        <p className="font-urbanist text-[#666]">
          {selectedDoctor.role}
        </p>

        <div className="flex items-center gap-2 mt-2">

          <AiFillStar className="text-[#E67E22]" />

          <span className="font-semibold text-[#1C1C1C]">
            {selectedDoctor.rating}/5
          </span>

          <span className="text-sm text-[#777]">
            (248 Reviews)
          </span>

        </div>

      </div>

    </div>

    {/* Review Summary */}
    <div className="mt-8 rounded-2xl bg-[#FAF7F2] border border-[#E8E3DC] p-5">

      <div className="flex items-center justify-between mb-5">

        <div>

          <h5 className="font-playfair text-xl text-[#1C1C1C]">
            Recent Reviews
          </h5>

          <p className="font-urbanist text-sm text-[#777]">
            What patients say about this doctor
          </p>

        </div>

        <div className="text-right">

          <p className="font-playfair text-3xl text-[#1C1C1C]">
            {selectedDoctor.rating}
          </p>

          <div className="flex justify-end text-[#E67E22]">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i}/>
            ))}
          </div>

        </div>

      </div>

      <div className="space-y-4">

        <div className="bg-white rounded-xl p-4 border border-[#ECECEC]">

          <div className="flex items-center justify-between">

            <h6 className="font-semibold text-[#1C1C1C]">
              Sarah Wijaya
            </h6>

            <span className="text-xs text-[#999]">
              2 weeks ago
            </span>

          </div>

          <div className="flex gap-1 text-[#E67E22] mt-2">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i}/>
            ))}
          </div>

          <p className="mt-3 text-sm text-[#555] leading-7">
            Dr. {selectedDoctor.name.split(" ")[1]} explained every procedure
            clearly and made me feel comfortable throughout the treatment.
            The results exceeded my expectations.
          </p>

        </div>

        <div className="bg-white rounded-xl p-4 border border-[#ECECEC]">

          <div className="flex items-center justify-between">

            <h6 className="font-semibold text-[#1C1C1C]">
              Kevin Hartono
            </h6>

            <span className="text-xs text-[#999]">
              1 month ago
            </span>

          </div>

          <div className="flex gap-1 text-[#E67E22] mt-2">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i}/>
            ))}
          </div>

          <p className="mt-3 text-sm text-[#555] leading-7">
            Professional, friendly, and very attentive. The consultation
            was detailed, and the treatment process was painless.
            Highly recommended.
          </p>

        </div>

      </div>

    </div>

    {/* Button */}
    <Link
      to="/booking"
      className="
        mt-8
        inline-flex
        items-center
        justify-center
        gap-2
        w-full
        border
        border-[#1C1C1C]
        rounded-full
        py-3
        font-urbanist
        transition-all
        duration-300
        hover:bg-[#1C1C1C]
        hover:text-white
      "
    >
      <FaExchangeAlt />
      Change Doctor
    </Link>

  </>
)}

      </div>

    </div>
  );
}