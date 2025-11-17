import React from "react";
import img1 from "../../assets/live-tracking.png";
import img2 from "../../assets/safe-delivery.png";

const Extrasection = () => {
  const features = [
    {
      img: img1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      img: img2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      img: img2,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-white rounded-2xl p-6 md:p-8 gap-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex-shrink-0">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-28 h-28 md:w-32 md:h-32 object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-2">
              {feature.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Extrasection;
