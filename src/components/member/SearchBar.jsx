import React from "react";
import Button from "../guest/Button"; // Sesuaikan path reusable Button

export default function SearchBar({ inputRef, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <section className="w-full bg-[#FAF7F2] py-2">
      <div className="w-full mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">
          <p className="uppercase tracking-[0.35em] text-xs text-[#E67E22] font-urbanist">
            Find Your Treatment
          </p>

          <h2 className="mt-3 text-4xl font-playfair text-[#1C1C1C]">
            Discover the Perfect Care
          </h2>

          <p className="mt-3 text-[#555555] font-urbanist max-w-2xl mx-auto leading-7">
            Temukan berbagai perawatan terbaik yang dirancang oleh dokter
            profesional untuk membantu Anda mendapatkan kulit yang sehat,
            cerah, dan tampak lebih percaya diri.
          </p>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto flex flex-col sm:flex-row gap-4"
        >
          <div className="relative flex-1">
            <svg
              className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#E67E22]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              ref={inputRef}
              type="text"
              placeholder="Search for services or treatments..."
              className="
                w-full
                h-14
                pl-14
                pr-6
                rounded-full
                bg-white
                shadow-sm
                border
                border-[#1C1C1C]/10
                font-urbanist
                text-[#1C1C1C]
                placeholder:text-[#999]
                focus:outline-none
                focus:ring-2
                focus:ring-[#E67E22]/30
                transition-all
              "
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
          >
            Search
          </Button>
        </form>
      </div>
    </section>
  );
}