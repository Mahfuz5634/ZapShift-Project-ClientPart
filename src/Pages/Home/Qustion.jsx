import React from "react";

const FAQSection = () => {
  return (
    <div className="w-full  py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-3xl font-bold text-[#03373d]">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-center mt-2 opacity-85 text-sm md:text-base">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          Achieve proper <br /> alignment, reduce pain, and strengthen your body with ease!
        </p>

       
        <div className="mt-8 space-y-3">
          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="accordion" defaultChecked />
            <div className="collapse-title font-semibold">
              How does this posture corrector work?
            </div>
            <div className="collapse-content text-sm opacity-90">
              A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="accordion" />
            <div className="collapse-title font-semibold">
              Is it suitable for all ages and body types?
            </div>
            <div className="collapse-content text-sm opacity-90">
              Yes, it's designed to be adjustable and comfortable for most ages and body types.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="accordion" />
            <div className="collapse-title font-semibold">
              Does it really help with back pain and posture improvement?
            </div>
            <div className="collapse-content text-sm opacity-90">
              Consistent use may help relieve pain caused by poor posture and support long-term posture improvement.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="accordion" />
            <div className="collapse-title font-semibold">
              Does it have smart features like vibration alerts?
            </div>
            <div className="collapse-content text-sm opacity-90">
              Some models come with built-in vibration reminders that alert you when you slouch.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="accordion" />
            <div className="collapse-title font-semibold">
              How will I be notified when the product is back in stock?
            </div>
            <div className="collapse-content text-sm opacity-90">
              You can subscribe to restock notifications using your email on the product page.
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button className="bg-[#b1d9ce] px-6 py-2 rounded-xl text-[#03373d] font-semibold hover:opacity-90 transition">
            See More FAQ's →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
