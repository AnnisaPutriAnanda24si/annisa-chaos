const TestimonialCard = ({
    image,
    name,
    occupation,
    testimonial,
}) => {

    return (

        <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}

            <div>

                <img
                    src={image}
                    alt={name}
                    className="
                        w-full
                        h-[620px]
                        object-cover
                        rounded-xl
                    "
                />

            </div>

            {/* CONTENT */}

            <div>

                <p className="
                    uppercase
                    tracking-[0.35em]
                    text-xs
                    font-semibold
                    text-[#555555]
                    font-urbanist
                ">
                    Testimonials
                </p>

                <h2 className="
                    mt-5
                    font-playfair
                    text-5xl
                    text-[#1C1C1C]
                ">
                    {name}
                </h2>

                <p className="
                    mt-2
                    text-lg
                    font-urbanist
                    text-[#555555]
                ">
                    {occupation}
                </p>

                <p className="
                    mt-10
                    text-lg
                    leading-9
                    text-[#555555]
                    font-urbanist
                ">
                    {testimonial}
                </p>

            </div>

        </div>

    )

}

export default TestimonialCard;