import { Truck } from "lucide-react";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h1 className="text-3xl font-semibold mb-8 text-center lg:text-left">
        How It Works
      </h1>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
    
        <div className="w-full h-auto rounded-2xl bg-white p-6 flex flex-col gap-3 shadow-sm hover:bg-primary transition">
          <Truck className="w-[40px] h-[40px]" />
          <h1 className="text-xl font-bold">Booking Pick & Drop</h1>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        <div className="w-full h-auto rounded-2xl bg-white p-6 flex flex-col gap-3 shadow-sm hover:bg-primary transition">
          <Truck className="w-[40px] h-[40px]" />
          <h1 className="text-xl font-bold">Cash On Delivery</h1>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

       
        <div className="w-full h-auto rounded-2xl bg-white p-6 flex flex-col gap-3 shadow-sm hover:bg-primary transition">
          <Truck className="w-[40px] h-[40px]" />
          <h1 className="text-xl font-bold">Delivery Hub</h1>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

   
        <div className="w-full h-auto rounded-2xl bg-white p-6 flex flex-col gap-3 shadow-sm hover:bg-primary transition">
          <Truck className="w-[40px] h-[40px]" />
          <h1 className="text-xl font-bold">SME & Corporate</h1>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
