import React from "react";
import { FaUserNurse } from "react-icons/fa";
import { Clock3 } from "lucide-react";
import Button from "../guest/Button";

export default function ServiceCard({ service }) {
  return (
    <div
      className="
        bg-white
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-2
        transition-all
        duration-300
        flex
        flex-col
      "
    >
      {/* Image */}

      <div className="overflow-hidden">

        <img
          src={service.image}
          alt={service.title}
          className="
            w-full
            h-30
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />

      </div>

      {/* Content */}

      <div className="p-5 flex flex-col flex-1">

        <h3
          className="
            font-playfair
            text-2xl
            text-[#1C1C1C]
            leading-snug
          "
        >
          {service.title}
        </h3>

        <div
          className="
            flex
            items-center
            gap-2
            mt-4
            text-sm
            font-urbanist
            text-[#555555]
          "
        >
          <FaUserNurse className="text-[#E67E22]" />

          <span>
            <strong>{service.doctors_avail}</strong> Doctors Available
          </span>

          <span className="text-gray-400">
            • {service.reviews} Reviews
          </span>

        </div>

        <p
          className="
            mt-5
            text-[#555555]
            leading-7
            font-urbanist
            line-clamp-3
            flex-1
          "
        >
          {service.description}
        </p>

        {/* Footer */}

        <div
          className="
            mt-8
            pt-6
            border-t
            border-[#1C1C1C]/10
            flex
            items-center
            justify-between
          "
        >

          <div>

            <p
              className="
                text-3xl
                font-bold
                text-[#1C1C1C]
                font-urbanist
              "
            >
              ${service.price}
            </p>

            <div
              className="
                mt-2
                flex
                items-center
                gap-2
                text-sm
                text-[#555555]
                font-urbanist
              "
            >
              <Clock3
                size={15}
                className="text-[#E67E22]"
              />

              {service.duration} Minutes

            </div>

          </div>

          <Button
            to="/booking"
            variant="primary"
            size="sm"
          >
            Book Now
          </Button>

        </div>

      </div>

    </div>
  );
}