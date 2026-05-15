import React from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";

export default function About() {
  return (
    <div className="bg-[#FFFBF5] min-h-screen">
      {/* 1. Header Section (Our Story) */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-orange-400 mb-4 font-bold">
          Our <span className="text-zinc-800">Story</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-800 font-serif text-sm md:text-base leading-relaxed mb-6">
            Since 2012 in a charming royal town, Serene Beauty emerged as a haven for beauty and tranquility. Founded by Sarah, a passionate hairstylist, the salon's goal was simple yet profound: to enhance natural beauty while providing a peaceful escape.
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed italic">
            With time, Serene Beauty's dedicated team grew, offering a range of services from aesthetic to makeup. It became the beloved part of the community, known for its serene ambiance and commitment to giving back through charity events.
          </p>
        </div>

        {/* 3 Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="aspect-video overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600" alt="Hair wash" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-video overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=600" alt="Makeup" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-video overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600" alt="Nail art" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 2. Founder Section */}
      <section className="py-20 px-6 md:px-16 bg-[#F8F3ED]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800" 
              alt="Sarah Johnson" 
              className="w-full aspect-[4/5] object-cover shadow-2xl"
            />
          </div>
          
          <div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">THE EXPERT FOUNDER</span>
            <h2 className="font-serif text-4xl text-zinc-800 mt-2 mb-6">Sarah Johnson</h2>
            <p className="text-zinc-600 text-sm leading-relaxed mb-10">
              Meet Sarah, the visionary behind Serene Beauty Salon. With a decade of experience and a passion for aesthetics, Sarah's goal is to empower the community with beauty and wellness.
            </p>

            {/* Achievement List */}
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200">
              {[
                { id: "01", title: "Master Stylist of the Year", desc: "Awarded for exceptional hair artistry and commitment to customer satisfaction." },
                { id: "02", title: "Community Impact Award", desc: "Recognized for leading various charity events and beauty workshops." },
                { id: "03", title: "Green Beauty Innovator", desc: "Pioneered the use of eco-friendly products in the local salon industry." }
              ].map((item) => (
                <div key={item.id} className="flex gap-6 relative">
                  <div className="w-6 h-6 rounded-full bg-zinc-900 text-white text-[10px] flex items-center justify-center font-bold z-10">
                    {item.id}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-800 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-zinc-800">Meet <span className="text-orange-400">Our Team</span></h2>
            <p className="text-zinc-400 text-xs mt-2 uppercase tracking-widest">The professionals behind your transformation</p>
          </div>
          <button className="bg-zinc-900 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500 transition shadow-lg">
            Explore All Team
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { name: "James Ethan", role: "Skin Specialist", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400" },
            { name: "Cynthia Makafui", role: "Makeup Artist", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400" },
            { name: "Angela Goodwill", role: "Hair Expert", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" }
          ].map((member, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-zinc-200 mb-6 relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <h3 className="font-bold text-zinc-800 text-lg">{member.name}</h3>
              <p className="text-zinc-400 text-[11px] uppercase tracking-widest mb-4">{member.role}</p>
              <button className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center w-full group-hover:text-zinc-900 transition-colors">
                Read More <IoArrowForwardOutline className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}