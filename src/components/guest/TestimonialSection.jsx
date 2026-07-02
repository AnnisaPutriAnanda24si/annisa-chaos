import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import TestimonialCard from "./TestimonialCard";

import Image1 from "../../assets/images/testimonial1.jpeg";
import Image2 from "../../assets/images/testimonial2.jpeg";
import Image3 from "../../assets/images/testimonial3.jpeg";

const testimonials = [

    {
        image: Image1,
        name: "Daphne Augustine",
        occupation: "Jakarta | Entrepreneur",

        testimonial:
            "Skinova memberikan pengalaman perawatan yang benar-benar berbeda. Mulai dari konsultasi hingga tindakan terasa sangat profesional. Kulit saya menjadi jauh lebih sehat dan saya merasa lebih percaya diri setiap hari.",

    },

    {
        image: Image2,
        name: "Kevin Wijaya",
        occupation: "Bandung | Fashion Designer",

        testimonial:
            "Dokternya sangat ramah dan menjelaskan setiap prosedur dengan detail. Hasil treatment sangat natural dan membuat saya ingin kembali lagi.",

    },

    {
        image: Image3,
        name: "Amanda Putri",
        occupation: "Surabaya | Singer",

        testimonial:
            "Booking online sangat mudah. Tidak perlu antre dan pelayanan di klinik benar-benar premium. Saya sangat puas dengan hasilnya.",

    },

];

const TestimonialSection = () => {

    const [current, setCurrent] = useState(0);

    const previous = () => {

        setCurrent((prev) =>
            prev === 0
                ? testimonials.length - 1
                : prev - 1
        );

    };

    const next = () => {

        setCurrent((prev) =>
            prev === testimonials.length - 1
                ? 0
                : prev + 1
        );

    };

    return (

        <section className="py-28 bg-[#FAF7F2]">

            <div className="max-w-7xl mx-auto px-6">

                <TestimonialCard
                    {...testimonials[current]}
                />

                {/* Navigation */}

                <div className="
                    mt-12
                    flex
                    items-center
                    gap-5
                    justify-end
                ">

                    <button
                        onClick={previous}
                        className="
                            w-12
                            h-12
                            rounded-full
                            border
                            border-[#1C1C1C]
                            flex
                            items-center
                            justify-center
                            hover:bg-[#1C1C1C]
                            hover:text-white
                            transition
                        "
                    >
                        <ArrowLeft size={20}/>
                    </button>

                    <span className="
                        font-urbanist
                        text-lg
                    ">

                        {String(current + 1).padStart(2, "0")}
                        {" | "}
                        {String(testimonials.length).padStart(2, "0")}

                    </span>

                    <button
                        onClick={next}
                        className="
                            w-12
                            h-12
                            rounded-full
                            border
                            border-[#1C1C1C]
                            flex
                            items-center
                            justify-center
                            hover:bg-[#1C1C1C]
                            hover:text-white
                            transition
                        "
                    >
                        <ArrowRight size={20}/>
                    </button>

                </div>

            </div>

        </section>

    );

};

export default TestimonialSection;