import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  const brandLinks = [
    "Our Story",
    "Careers",
    "Privacy Policy",
  ];

  const supportLinks = [
    "Booking",
    "Exchange & Returns",
    "Terms of Service",
  ];

  const socialLinks = [
    "Twitter",
    "Instagram",
    "Youtube",
    "Pinterest",
  ];

  return (
    <footer className="bg-[#FAF7F2] pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        {/* =======================
            TOP FOOTER
        ======================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}

          <div>

            <h3 className="font-urbanist font-semibold text-[#E67E22] text-xl mb-6">
              Brand
            </h3>

            <ul className="space-y-4">

              {brandLinks.map((item) => (

                <li key={item}>

                  <Link
                    to="/"
                    className="
                      text-[#1C1C1C]
                      font-urbanist
                      hover:text-[#E67E22]
                      transition-colors
                    "
                  >
                    {item}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="font-urbanist font-semibold text-[#E67E22] text-xl mb-6">
              Support
            </h3>

            <ul className="space-y-4">

              {supportLinks.map((item) => (

                <li key={item}>

                  <Link
                    to="/"
                    className="
                      text-[#1C1C1C]
                      font-urbanist
                      hover:text-[#E67E22]
                      transition-colors
                    "
                  >
                    {item}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h3 className="font-urbanist font-semibold text-[#E67E22] text-xl mb-6">
              Connect
            </h3>

            <ul className="space-y-4">

              {socialLinks.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="
                      text-[#1C1C1C]
                      font-urbanist
                      hover:text-[#E67E22]
                      transition-colors
                    "
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="font-urbanist text-2xl font-semibold text-[#1C1C1C] leading-snug">
              Get to know more about us and everything we do.
            </h3>

            <div className="mt-8 space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  px-4
                  py-3
                  bg-white
                  border
                  border-gray-300
                  rounded-md
                  font-urbanist
                  placeholder:text-gray-400
                  focus:outline-none
                  focus:border-[#E67E22]
                "
              />

              <input
                type="email"
                placeholder="Your Email Address"
                className="
                  w-full
                  px-4
                  py-3
                  bg-white
                  border
                  border-gray-300
                  rounded-md
                  font-urbanist
                  placeholder:text-gray-400
                  focus:outline-none
                  focus:border-[#E67E22]
                "
              />

              <Button
                variant="primary"
                className="w-full rounded-md hover:scale-100"
              >
                Subscribe
              </Button>

            </div>

            <div className="mt-8 space-y-2">

              <p className="font-urbanist text-[#1C1C1C]">
                reach@skinova.com
              </p>

              <p className="font-urbanist text-[#1C1C1C]">
                (629) 555-0129
              </p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-16 border-t border-[#1C1C1C]/10" />

        {/* =======================
            BOTTOM FOOTER
        ======================= */}

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Logo */}

          <h2
            className="
              font-playfair
              text-2xl
              tracking-[0.35em]
              text-[#1C1C1C]
            "
          >
            SKI
            <span className="text-[#E67E22]">
              NOVA
            </span>
          </h2>

          {/* Copyright */}

          <p className="font-urbanist text-[#555555]">
            All rights reserved
          </p>

          {/* Tagline */}

          <p
            className="
              font-playfair
              text-center
              lg:text-right
              leading-snug
            "
          >
            Where{" "}
            <span className="text-[#E67E22] italic">
              Tranquility
            </span>{" "}
            Meets{" "}
            <span className="text-[#E67E22] italic">
              Transformation.
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;