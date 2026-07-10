import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/guest/Button";
import MembershipCard from "@/components/member/MembershipCard";

export default function Profile() {
  return (
    <section className="min-h-screen bg-[#FAF7F2] py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER COVER ================= */}

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

          {/* Cover */}

          <div
            className="h-56 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
            }}
          >

            <div className="absolute inset-0 bg-black/15"></div>

          </div>

          {/* Profile */}

          <div className="px-10 pb-8 relative">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">

              {/* LEFT */}

              <div className="flex items-end gap-6">

                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                  alt=""
                  className="w-36 h-36 rounded-full object-cover border-[6px] border-white shadow-lg -mt-16"
                />

                <div className="pb-4">

                  <p className="uppercase tracking-[0.35em] text-xs text-[#E67E22] font-semibold font-urbanist">
                    Premium Member
                  </p>

                  <h1 className="font-playfair text-4xl text-[#1C1C1C] mt-2">
                    Annisa Putri
                  </h1>

                  <p className="text-[#666] mt-2 font-urbanist">
                    Member sejak Januari 2026
                  </p>

                </div>

              </div>

              {/* RIGHT */}

              <div className="flex gap-4 mt-8 lg:mt-0">

                <Button variant="primary">
                <Link to="/home_member">Book Appointment</Link>
                </Button>

              </div>

            </div>

          </div>

        </div>

        {/* ================= CONTENT ================= */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

            {/* About */}

            <div className="bg-white rounded-2xl shadow-sm p-8">

              <p className="uppercase tracking-[0.3em] text-xs text-[#E67E22] font-semibold font-urbanist mb-3">
                About
              </p>

              <h2 className="font-playfair text-3xl text-[#1C1C1C] mb-5">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6 font-urbanist">

                <div>
                  <p className="text-sm text-[#999]">Full Name</p>
                  <p className="text-[#1C1C1C] font-semibold mt-1">
                    Annisa Putri
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#999]">Email</p>
                  <p className="text-[#1C1C1C] font-semibold mt-1">
                    annisa@email.com
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#999]">Phone</p>
                  <p className="text-[#1C1C1C] font-semibold mt-1">
                    +62 812-3456-7890
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#999]">Date of Birth</p>
                  <p className="text-[#1C1C1C] font-semibold mt-1">
                    10 October 2003
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#999]">Gender</p>
                  <p className="text-[#1C1C1C] font-semibold mt-1">
                    Female
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#999]">Address</p>
                  <p className="text-[#1C1C1C] font-semibold mt-1">
                    Pontianak, Indonesia
                  </p>
                </div>

              </div>

            </div>

            {/* Skin Profile */}

            <div className="bg-white rounded-2xl shadow-sm p-8">

              <p className="uppercase tracking-[0.3em] text-xs text-[#E67E22] font-semibold font-urbanist mb-3">
                Skin Profile
              </p>

              <h2 className="font-playfair text-3xl text-[#1C1C1C] mb-6">
                Beauty Preferences
              </h2>

              <div className="grid md:grid-cols-2 gap-6 font-urbanist">

                <div>
                  <p className="text-sm text-[#999]">
                    Skin Type
                  </p>
                  <p className="font-semibold mt-1">
                    Combination Skin
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#999]">
                    Main Concern
                  </p>
                  <p className="font-semibold mt-1">
                    Acne Scar
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#999]">
                    Allergies
                  </p>
                  <p className="font-semibold mt-1">
                    None
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#999]">
                    Favorite Treatment
                  </p>
                  <p className="font-semibold mt-1">
                    Hydra Facial
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-6">

           <MembershipCard/>

            <div className="bg-white rounded-2xl shadow-sm p-7">

              <p className="uppercase tracking-[0.3em] text-xs text-[#E67E22] font-semibold font-urbanist">
                Statistics
              </p>

              <div className="space-y-6 mt-6 font-urbanist">

                <div>
                  <p className="text-sm text-[#999]">
                    Total Treatments
                  </p>
                  <p className="text-3xl font-bold text-[#1C1C1C]">
                    24
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#999]">
                    Beauty Points
                  </p>
                  <p className="text-3xl font-bold text-[#1C1C1C]">
                    8,750
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#999]">
                    Upcoming Appointment
                  </p>
                  <p className="font-semibold text-[#1C1C1C] mt-1">
                    25 July 2026
                  </p>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-sm p-7">

              <p className="uppercase tracking-[0.3em] text-xs text-[#E67E22] font-semibold font-urbanist mb-4">
                Contact
              </p>

              <div className="space-y-4 font-urbanist">

                <div>
                  <p className="text-sm text-[#999]">Email</p>
                  <p className="font-semibold">
                    annisa@email.com
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#999]">Phone</p>
                  <p className="font-semibold">
                    +62 812-3456-7890
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}