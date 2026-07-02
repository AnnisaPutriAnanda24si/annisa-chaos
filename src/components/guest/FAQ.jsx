import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "Bagaimana cara mendaftar akun di Skinova?",
    answer:
      "Cukup klik tombol 'Login / Register' di pojok kanan atas, masukkan nomor WhatsApp atau email aktif Anda, lalu verifikasi kode OTP untuk mulai mengakses dasbor pribadi Anda.",
  },
  {
    id: 2,
    question: "Bagaimana saya mulai booking layanan perawatan?",
    answer:
      "Setelah masuk ke akun Anda, masuk ke menu 'Services', pilih jenis perawatan yang Anda butuhkan, lalu klik tombol 'Book Now' untuk melanjutkan ke pemilihan dokter.",
  },
  {
    id: 3,
    question: "Bagaimana cara menentukan jadwal kunjungan yang tepat?",
    answer:
      "Sistem kami akan menampilkan kalender interaktif berisi jam praktik dokter yang masih tersedia. Anda cukup mengklik tanggal dan jam yang Anda inginkan, lalu konfirmasi untuk mengunci jadwal Anda.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-[#FAF7F2] py-24"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.35em] text-xs font-semibold text-[#E67E22] font-urbanist">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 font-playfair text-4xl md:text-5xl text-[#1C1C1C]">
            Semua yang Perlu Anda Ketahui
          </h2>

          <p className="mt-6 text-[#555555] font-urbanist leading-7 max-w-2xl mx-auto">
            Kami merangkum beberapa pertanyaan yang paling sering diajukan
            agar proses konsultasi dan booking Anda menjadi lebih mudah.
          </p>

        </div>

        {/* FAQ List */}
        <div className="space-y-5">

          {faqData.map((faq) => {
            const isOpen = activeId === faq.id;

            return (
              <div
                key={faq.id}
                className="border-b border-[#1C1C1C]/10 pb-5"
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center text-left group"
                >

                  <h3 className="font-playfair text-2xl text-[#1C1C1C] group-hover:text-[#E67E22] transition-colors">
                    {faq.question}
                  </h3>

                  <span className="text-[#E67E22] flex-shrink-0">

                    {isOpen ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} />
                    )}

                  </span>

                </button>

                {/* Answer */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "max-h-96 opacity-100 mt-5"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <p className="font-urbanist text-[#555555] leading-8 pr-10">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FAQ;