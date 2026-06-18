import React from 'react';

export default function MembershipCard() {
  return (
    <div className="bg-[#4A2810] rounded-2xl p-5 text-white shadow-sm flex flex-col justify-between min-h-[170px]">
      <div>
        <span className="text-[9px] font-bold tracking-widest text-orange-200/60 uppercase block">
          MEMBERSHIP STATUS
        </span>
        <h2 className="font-serif text-xl font-bold text-orange-100 mt-1">
          Gold Tier Elite
        </h2>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-baseline mb-1">
          <span className="text-[10px] text-orange-200/50 uppercase font-medium">Treatment Credits</span>
          <span className="text-base font-black tracking-tight text-white">
            Rp.850,000<span className="text-[10px] font-normal text-orange-200/70">pts</span>
          </span>
        </div>
        {/* Progress Bar Custom */}
        <div className="w-full h-1.5 bg-black/30 rounded-full overflow-hidden">
          <div className="w-[75%] h-full bg-gradient-to-r from-orange-300 to-amber-100 rounded-full"></div>
        </div>
        <p className="text-[9px] text-orange-200/40 mt-2 text-right tracking-tight">
          Belanja Rp.350,000 untuk melanjutkan ke tier diamond
        </p>
      </div>
    </div>
  );
}