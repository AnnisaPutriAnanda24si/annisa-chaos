import React from 'react';
import { HiSparkles } from "react-icons/hi2";

export default function MembershipCard() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-br
        from-[#3A1F12]
        via-[#5C311B]
        to-[#8C4A23]
        px-6 py-3
        text-white
        shadow-xl
        border
        border-[#E6B17A]/20
      "
    >
      {/* Background Decoration */}
      <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full bg-white/5"></div>
      <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-black/10"></div>

      {/* Header */}
      <div className="relative flex justify-between items-start">

        <div className="flex items-center gap-5">

          {/* Profile */}
          <img
            src="https://ui-avatars.com/api/?name=Stevan+Dux&background=F5E8D8&color=8C4A23&size=200"
            alt="Profile"
            className="
              w-15
              h-15
              rounded-full
              object-cover
              border-4
              border-white/20
              shadow-lg
            "
          />

          <div>

            <p className="uppercase tracking-[0.35em] text-[10px] text-orange-200 font-urbanist">
              Membership Status
            </p>

            <h2 className="font-playfair text-2xl mt-1">
              Gold Tier Elite
            </h2>

            <p className="mt-1 text-orange-100 text-sm font-urbanist">
              Stevan Dux
            </p>

          </div>

        </div>

        {/* Badge */}
        <div className="flex items-center gap-1 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">

          <HiSparkles className="text-yellow-300" />

          <span className="text-sm font-semibold">
            GOLD
          </span>

        </div>

      </div>

      {/* Divider */}
      <div className="relative my-7 border-t border-white/10"></div>

      {/* Credits */}
      <div className="relative">

        <div className="flex justify-between items-end">

          <div>

            <p className="text-orange-200 text-sm font-urbanist">
              Treatment Credits
            </p>

            <h3 className="font-playfair text-2xl mt-2">
              Rp850.000
            </h3>

          </div>

          <div className="text-right">

            <p className="text-2xl font-bold">
              75%
            </p>

            <p className="text-xs text-orange-200">
              Progress
            </p>

          </div>

        </div>

        {/* Progress */}
        <div className="mt-6">

          <div className="h-3 bg-white/10 rounded-full overflow-hidden">

            <div
              className="
                h-full
                w-3/4
                rounded-full
                bg-gradient-to-r
                from-[#F6D365]
                via-[#F3B562]
                to-[#E67E22]
              "
            />

          </div>

          <p className="mt-4 text-sm text-orange-100 leading-relaxed font-urbanist">
            Spend another
            <span className="font-semibold text-white">
              {" "}Rp350.000{" "}
            </span>
            to unlock the exclusive
            <span className="text-[#FFD27A] font-semibold">
              {" "}Diamond Membership
            </span>.
          </p>

        </div>

      </div>
    </div>
  );
}