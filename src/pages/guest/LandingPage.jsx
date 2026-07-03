import Navbar from "../../components/guest/Navbar";
import Hero from "../../components/guest/Hero"
import FeatureSection from "@/components/guest/FeatureSection";
import FAQ from "@/components/guest/FAQ";
import TestimonialSection from "@/components/guest/TestimonialSection";
import CTA from "@/components/guest/CTA";
import Footer from "@/components/guest/Footer";

const LandingPage = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C] scroll-smooth">

      <Navbar />

      <Hero />

      <FeatureSection/>

      <FAQ/>

      <TestimonialSection />

      <CTA/>

      <Footer/>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-7xl mx-auto py-28 px-6"
      >
        <h2 className="font-playfair text-5xl text-center mb-6">
          Our Services
        </h2>

        <p className="text-center font-urbanist text-gray-600">
          Section layanan akan ditambahkan di sini.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;