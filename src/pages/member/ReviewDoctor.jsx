import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Button from "../../components/guest/Button";

import doctorsData from "../../data/doctorsData.json";
import servicesData from "../../data/servicesData.json";

export default function ReviewDoctor() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [doctorData, setDoctorData] = useState(null);
  const [serviceData, setServiceData] = useState(null);

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [reviews, setReviews] = useState([
  {
    name: "Sarah Wijaya",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Dokternya sangat ramah dan profesional. Selama treatment saya merasa nyaman karena semua prosedur dijelaskan dengan jelas. Hasilnya juga sesuai ekspektasi.",
  },
  {
    name: "Kevin Hartono",
    rating: 5,
    date: "1 month ago",
    comment:
      "Pelayanan sangat baik mulai dari konsultasi sampai treatment selesai.",
  },
  {
    name: "Michelle Tan",
    rating: 4,
    date: "2 months ago",
    comment:
      "Treatment berjalan lancar dan dokter memberikan banyak tips.",
  },
]);

  useEffect(() => {
    const doctors =
      doctorsData?.doctors ||
      (Array.isArray(doctorsData) ? doctorsData : []);

    const doctor = doctors.find(
      (item) => item.id?.toString() === id?.toString()
    );

    setDoctorData(doctor || null);

    const service =
      servicesData?.services?.[0] ||
      (Array.isArray(servicesData) ? servicesData[0] : null);

    setServiceData(service);
  }, [id]);

const handleSubmit = (e) => {
  e.preventDefault();

  const newReview = {
    name: anonymous ? "Anonymous" : "You",
    rating,
    date: "Just now",
    comment: review,
  };

  setReviews((prev) => [newReview, ...prev]);

  setTitle("");
  setReview("");
  setRating(5);
  setAnonymous(false);

  alert("Review berhasil ditambahkan!");
};

  if (!doctorData || !serviceData) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <p className="font-urbanist text-[#777]">
          Loading...
        </p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-6">

        <div className="bg-white border border-[#E8E3DC] rounded-3xl p-14 max-w-xl w-full text-center shadow-sm">

          <div className="w-24 h-24 rounded-full bg-[#F6EEE5] flex items-center justify-center mx-auto mb-8">

            <span className="text-5xl text-[#E67E22]">
              ✓
            </span>

          </div>

          <p className="uppercase tracking-[0.25em] text-xs font-urbanist text-[#E67E22]">
            Thank You
          </p>

          <h1 className="font-playfair text-5xl text-[#1C1C1C] mt-4">
            Review Submitted
          </h1>

          <p className="font-urbanist text-[#666] mt-5 leading-8">
            Thank you for taking the time to share your experience.
            Your review helps other patients choose the right doctor.
          </p>

          <div className="mt-10">
            <Button
              variant="primary"
              to="/schedule"
            >
              Back to My Bookings
            </Button>
          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <div className="max-w-7xl mx-auto px-8 py-14">

        {/* BACK */}

        <button
          onClick={() => navigate(-1)}
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            border
            border-[#1C1C1C]
            bg-white
            font-urbanist
            transition-all
            duration-300
            hover:bg-[#1C1C1C]
            hover:text-white
            mb-12
          "
        >
          <FiArrowLeft />
          Back
        </button>

        {/* HEADER */}

        <div className="mb-14">

          <p className="uppercase tracking-[0.3em] text-xs font-urbanist text-[#E67E22]">
            Doctor Review
          </p>

          <h1 className="font-playfair text-6xl text-[#1C1C1C] mt-4">
            Share Your Experience
          </h1>

          <p className="font-urbanist text-[#666] mt-5 max-w-2xl leading-8">
            Tell us about your consultation with our specialist.
            Your feedback helps improve our services and assists
            other patients in making informed decisions.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT */}

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-3xl border border-[#E8E3DC] p-10"
          >

            <p className="uppercase tracking-[0.25em] text-xs text-[#E67E22] font-urbanist">
              Doctor Information
            </p>

            <div className="flex items-center gap-6 mt-8">

              <img
                src={doctorData.image}
                alt={doctorData.name}
                className="w-24 h-24 rounded-full object-cover border border-[#E5E5E5]"
              />

              <div>

                <h2 className="font-playfair text-4xl text-[#1C1C1C]">
                  {doctorData.name}
                </h2>

                <p className="font-urbanist text-[#666] mt-2">
                  {doctorData.role}
                </p>

                <div className="flex items-center gap-2 mt-3 text-[#E67E22]">

                  <AiFillStar />

                  <span className="font-semibold">
                    {doctorData.rating}/5
                  </span>

                  <span className="text-[#777]">
                    (248 Reviews)
                  </span>

                </div>

              </div>

            </div>

            <div className="h-px bg-[#ECECEC] my-10"></div>

            <p className="uppercase tracking-[0.25em] text-xs text-[#E67E22] font-urbanist">
              Rate Your Doctor
            </p>

            <div className="flex gap-3 mt-6">
              {[1,2,3,4,5].map((star)=>(
                <button
                  key={star}
                  type="button"
                  onMouseEnter={()=>setHoverRating(star)}
                  onMouseLeave={()=>setHoverRating(0)}
                  onClick={()=>setRating(star)}
                  className="text-5xl transition-all hover:scale-110"
                >
                  {(hoverRating || rating) >= star
                    ? <AiFillStar className="text-[#E67E22]" />
                    : <AiOutlineStar className="text-[#D8D8D8]" />
                  }
                </button>
              ))}
            </div>
                        <div className="mt-10">

              <label className="block font-urbanist text-sm font-semibold text-[#1C1C1C] mb-3">
                Review Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Summarize your experience"
                className="
                  w-full
                  rounded-full
                  border
                  border-[#D8D8D8]
                  px-6
                  py-4
                  outline-none
                  font-urbanist
                  focus:border-[#E67E22]
                "
              />

            </div>

            <div className="mt-8">

              <label className="block font-urbanist text-sm font-semibold text-[#1C1C1C] mb-3">
                Your Review
              </label>

              <textarea
                rows={8}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Tell us about your consultation with this doctor..."
                className="
                  w-full
                  rounded-3xl
                  border
                  border-[#D8D8D8]
                  p-6
                  resize-none
                  outline-none
                  font-urbanist
                  leading-8
                  focus:border-[#E67E22]
                "
              />

            </div>

            <label className="flex items-center gap-3 mt-8 cursor-pointer">

              <input
                type="checkbox"
                checked={anonymous}
                onChange={(e)=>setAnonymous(e.target.checked)}
                className="w-5 h-5 accent-[#E67E22]"
              />

              <span className="font-urbanist text-[#555]">
                Post this review anonymously
              </span>

            </label>

            <div className="mt-12">

              <Button
                variant="primary"
                type="submit"
              >
                Submit Review
              </Button>

              

            </div>

            

          </form>

          

          {/* SIDEBAR */}

          <div className="space-y-8">

            <div className="bg-white rounded-3xl border border-[#E8E3DC] overflow-hidden">

              <img
                src={serviceData.image}
                alt={serviceData.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-8">

                <p className="uppercase tracking-[0.25em] text-xs text-[#E67E22] font-urbanist">
                  Treatment
                </p>

                <h3 className="font-playfair text-3xl text-[#1C1C1C] mt-4">
                  {serviceData.title}
                </h3>

                <p className="font-urbanist text-[#666] leading-8 mt-5">
                  {serviceData.description}
                </p>

                <div className="h-px bg-[#ECECEC] my-8"></div>

                <div className="space-y-6">

                  <div>

                    <p className="uppercase text-xs tracking-widest text-[#999] font-urbanist">
                      Duration
                    </p>

                    <h4 className="font-playfair text-2xl text-[#1C1C1C] mt-2">
                      {serviceData.duration || 60} Minutes
                    </h4>

                  </div>

                  <div>

                    <p className="uppercase text-xs tracking-widest text-[#999] font-urbanist">
                      Price
                    </p>

                    <h4 className="font-playfair text-2xl text-[#1C1C1C] mt-2">
                      Rp {Number(serviceData.price).toLocaleString("id-ID")}
                    </h4>

                  </div>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl border border-[#E8E3DC] p-8">

              <p className="uppercase tracking-[0.25em] text-xs text-[#E67E22] font-urbanist mb-6">
                Appointment Summary
              </p>

              <div className="space-y-6">

                <div>

                  <p className="text-xs uppercase tracking-widest text-[#999] font-urbanist">
                    Doctor
                  </p>

                  <h4 className="font-playfair text-2xl text-[#1C1C1C] mt-2">
                    {doctorData.name}
                  </h4>

                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-[#999] font-urbanist">
                    Appointment Date
                  </p>

                  <h4 className="font-playfair text-2xl text-[#1C1C1C] mt-2">
                    12 July 2026
                  </h4>

                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-[#999] font-urbanist">
                    Time
                  </p>

                  <h4 className="font-playfair text-2xl text-[#1C1C1C] mt-2">
                    10:00 AM
                  </h4>

                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-[#999] font-urbanist">
                    Location
                  </p>

                  <h4 className="font-playfair text-2xl text-[#1C1C1C] mt-2">
                    Skinova Beauty Clinic
                  </h4>

                </div>

              </div>

            </div>

          </div>

          

        </div>

        {/* ================= PATIENT REVIEWS ================= */}

<div className="mt-16">

  <p className="uppercase tracking-[0.3em] text-xs text-[#E67E22] font-semibold font-urbanist mb-3">
    Patient Reviews
  </p>

  <h2 className="font-playfair text-4xl text-[#1C1C1C]">
    What Patients Say
  </h2>

  <p className="font-urbanist text-[#666] mt-3 mb-10 max-w-2xl">
    Review dari pasien lain yang telah melakukan treatment bersama{" "}
    <span className="font-semibold">{doctorData.name}</span>.
  </p>

  <div className="space-y-6">

    {reviews.map((review, index) => (

      <div
        key={index}
        className="bg-white border border-[#ECE7DF] rounded-3xl p-8"
      >

        <div className="flex items-start justify-between">

          <div>

            <h4 className="font-playfair text-2xl text-[#1C1C1C]">
              {review.name}
            </h4>

            <p className="text-sm text-[#888] font-urbanist mt-1">
              {review.date}
            </p>

          </div>

          <div className="flex gap-1 text-[#E67E22]">

            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={
                  i < review.rating
                    ? "text-[#E67E22]"
                    : "text-[#E5E5E5]"
                }
              />
            ))}

          </div>

        </div>

        <p className="mt-6 leading-8 text-[#555555] font-urbanist">
          {review.comment}
        </p>

      </div>

    ))}

  </div>

</div>

      </div>

    </div>
  );
}