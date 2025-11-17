import React from "react";
import logo from "../../assets/service.png";

const OurService = () => {
  return (
    <div className="container mx-auto bg-secondary rounded-2xl p-10 md:p-16">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-white text-3xl md:text-4xl font-extrabold">
          Our Services
        </h1>
        <p className="text-white opacity-85 mt-4 leading-relaxed max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        
        {/* Card */}
        {[ 
          {
            title: "Express & Standard Delivery",
            desc: "We deliver parcels within 24–72 hours across major cities, with express delivery available in Dhaka within 4–6 hours.",
          },
          {
            title: "Nationwide Delivery",
            desc: "We deliver parcels nationwide with home delivery in every district.",
          },
          {
            title: "Fulfillment Solution",
            desc: "We offer inventory management, order processing, packaging, and after-sales support.",
          },
          {
            title: "Cash on Home Delivery",
            desc: "100% cash on delivery available anywhere in Bangladesh with guaranteed product safety.",
          },
          {
            title: "Corporate Logistics Service",
            desc: "Customized corporate solutions including warehousing and inventory management.",
          },
          {
            title: "Parcel Return / Exchange",
            desc: "Reverse logistics service for customer product returns and exchanges.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="w-full h-auto p-8 bg-white rounded-2xl shadow-sm border border-gray-100
                       hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                       flex flex-col items-center text-center gap-4"
          >
        
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <img className="w-8 h-8" src={logo} alt="" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              {item.title}
            </h1>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default OurService;
