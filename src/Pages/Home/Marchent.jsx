import React from "react";
import img from "../../assets/location-merchant.png";
import bg from "../../assets/be-a-merchant-bg.png";

const Marchent = () => {
  return (
    <div className="max-w-6xl mx-auto p-15 bg-[#03373d] rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
      {/* Top background image */}
      <img
        src={bg}
        alt="Background Decorative"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl opacity-30 pointer-events-none"
      />

      <div className="flex-1 flex flex-col gap-6 text-white relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h1>
        <p className="text-white/90 text-justify leading-relaxed">
          We offer the lowest delivery charge with the highest value along with 100% safety of your product. ZapShift Courier delivers your parcels in every corner of Bangladesh right on time.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-primary hover:opacity-80  text-black transition-colors rounded-2xl font-semibold">
            Become a Merchant
          </button>
          <button className="px-6 py-3 border-2 border-white hover:bg-white hover:text-[#03373d] transition-colors rounded-2xl font-semibold">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>

      <div className="flex-1 relative z-10 flex justify-center md:justify-end">
        <img src={img} alt="Merchant Illustration" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default Marchent;
