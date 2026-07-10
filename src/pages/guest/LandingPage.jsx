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

    </div>
  );
};

export default LandingPage;