import HeroImage from "../../assets/images/hero.jpg";
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-80px)] flex items-center"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT CONTENT */}
        <div>+
          {/* Pretitle */}
          <p className="uppercase tracking-[0.4em] text-xs font-semibold text-[#E67E22] font-urbanist mb-6">
            KLINIK ESTETIKA MEDIS PRESTISIUS
          </p>

          {/* Headline */}
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl leading-tight text-[#1C1C1C]">
            Where{" "}
            <span className="italic">
              Science
            </span>{" "}
            Meets{" "}
            <span className="italic">
              Transformation.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-gray-600 font-urbanist max-w-xl">
            Kami memadukan teknologi medis terpercaya dan kenyamanan premium
            untuk merawat kulit, wajah, dan tubuh Anda. Dirancang khusus untuk
            Anda yang menghargai hasil alami yang bertahan lama.
          </p>

          {/* CTA */}
<Button
    to="/register  "
    variant="primary"
    size="lg"
    className="mt-10"
>
   Book Appointment

</Button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <img
            src={HeroImage}
            alt="Skinova Hero"
            className="
              w-full
              max-w-lg
              h-[500px]
              object-cover
              rounded-[40px]
              shadow-2xl
            "
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;