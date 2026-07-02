import FeatureCard from "./FeatureCard";
import { CalendarDays, Stethoscope, Clock3 } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <CalendarDays size={28} className="text-[#E67E22]" />,
    title: "Solusi Perawatan Instan",
    description:
      "Pesan slot perawatan kulit pilihan Anda secara langsung tanpa perlu mengantre lama di klinik.",
  },
  {
    id: 2,
    icon: <Stethoscope size={28} className="text-[#E67E22]" />,
    title: "Pilih Dermatolog Andal Anda",
    description:
      "Konsultasikan masalah kulit Anda dengan tim dokter spesialis bersertifikat yang siap memberikan solusi personal yang tepat.",
  },
  {
    id: 3,
    icon: <Clock3 size={28} className="text-[#E67E22]" />,
    title: "Kendali Waktu Fleksibel",
    description:
      "Sesuaikan, ubah, atau reschedule waktu kunjungan Anda kapan saja dengan sistem kalender interaktif yang sinkron secara real-time.",
  },
];

const FeatureSection = () => {
  return (
    <section
      id="services"
      className="bg-[#FAF7F2] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.35em] text-xs font-semibold text-[#E67E22] font-urbanist">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 font-playfair text-4xl md:text-5xl text-[#1C1C1C]">
            Experience Beauty in Three Simple Steps
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[#555555] font-urbanist leading-7">
            Skinova menghadirkan proses reservasi yang mudah, cepat, dan
            transparan sehingga Anda dapat fokus menikmati pengalaman
            perawatan terbaik bersama dokter spesialis kami.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeatureSection;