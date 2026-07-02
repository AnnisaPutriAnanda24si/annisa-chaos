import Button from "./Button";

const CTA = () => {
  return (
    <section
      className="
        bg-[#FAF7F2]
        py-28
      "
    >
      <div
        className="
          max-w-4xl
          mx-auto
          px-6
          text-center
        "
      >
        {/* Pretitle */}
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-xs
            font-semibold
            text-[#E67E22]
            font-urbanist
          "
        >
          Join Skinova Today
        </p>

        {/* Heading */}
        <h2
          className="
            mt-5
            font-playfair
            text-4xl
            md:text-5xl
            leading-tight
            text-[#1C1C1C]
          "
        >
          Saatnya Memberikan Perawatan
          <br />
          Terbaik untuk Diri Anda.
        </h2>

        {/* Description */}
        <p
          className="
            mt-8
            text-lg
            leading-8
            text-[#555555]
            font-urbanist
            max-w-3xl
            mx-auto
          "
        >
          Mulai daftar akun Anda sekarang untuk menjadi member dan
          dapatkan perawatan terbaik yang layak didapatkan oleh kulit,
          rambut, serta tubuh Anda.
        </p>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Button
            to="/register"
            variant="primary"
            size="lg"
          >
            Mulai Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;