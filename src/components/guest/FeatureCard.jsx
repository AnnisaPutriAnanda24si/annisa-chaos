const FeatureCard = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-white
        rounded-xl
        p-8
        shadow-sm
        border
        border-gray-100
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        ${className}
      `}
    >
      {/* Icon */}
      <div
        className="
          w-14
          h-14
          rounded-full
          bg-[#FAF7F2]
          flex
          items-center
          justify-center
          mb-6
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          font-playfair
          text-2xl
          text-[#1C1C1C]
          mb-4
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          font-urbanist
          text-[#555555]
          leading-7
        "
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;