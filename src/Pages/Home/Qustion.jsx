import React from "react";

const FAQSection = () => {
  return (
    <div className="w-full  py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-3xl font-bold text-[#03373d]">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-center mt-2 opacity-85 text-sm md:text-base">
          Get your essentials delivered fast and safely with our reliable
          delivery service.
          Enjoy quick shipping,<br /> real-time tracking, and a hassle-free experience
          every time!
        </p>

        <div className="mt-8 space-y-3">
          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="accordion" defaultChecked />
            <div className="collapse-title font-semibold">
              How does your delivery service work?
            </div>
            <div className="collapse-content text-sm opacity-90">
              Our delivery service allows you to place an order online, and our
              team ensures your items are picked, packed, and delivered to your
              doorstep quickly and safely.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="accordion" />
            <div className="collapse-title font-semibold">
              Do you offer same-day delivery?
            </div>
            <div className="collapse-content text-sm opacity-90">
              Yes, we offer same-day delivery for selected locations.
              Availability may vary based on your area and order time.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="accordion" />
            <div className="collapse-title font-semibold">
              How can I track my order?
            </div>
            <div className="collapse-content text-sm opacity-90">
              Once your order is shipped, you will receive a tracking link via
              email or SMS so you can monitor your delivery in real time.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="accordion" />
            <div className="collapse-title font-semibold">
              What should I do if my package is delayed?
            </div>
            <div className="collapse-content text-sm opacity-90">
              If your package is delayed, you can check the updated status using
              the tracking link or contact our customer support for assistance.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="accordion" />
            <div className="collapse-title font-semibold">
              Do you offer cash on delivery?
            </div>
            <div className="collapse-content text-sm opacity-90">
              Yes, we offer cash on delivery for most orders. You can select
              this option during checkout.
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button className="bg-primary px-6 py-2 rounded-xl text-[#03373d] font-semibold hover:opacity-90 transition">
            See More FAQ's →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
