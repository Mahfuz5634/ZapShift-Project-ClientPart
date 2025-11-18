// AboutUs.jsx
import React, { useState } from "react";

export default function AboutUs() {
  const [active, setActive] = useState("story");

  const tabs = [
    { id: "story", label: "Story" },
    { id: "mission", label: "Mission" },
    { id: "success", label: "Success" },
    { id: "team", label: "Team & Others" },
  ];

  const content = {
    story:
      "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
    mission:
      "Our mission is to connect people and businesses through dependable logistics. We minimize delivery friction by using smart routing, clear tracking, and friendly support so every shipment is worry-free.",
    success:
      "Since launch we've delivered hundreds of thousands of parcels and built strong partnerships with local merchants. High customer satisfaction and on-time delivery rates are the cornerstones of our success.",
    team: "Our team is a mix of logistics experts, engineers, and customer-care professionals dedicated to continuous improvement. We welcome partners and team members who share our passion for reliable delivery.",
  };

  return (
    <div className="min-h-screen  py-10">
      <div className="container mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-md">
        <header>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#03373d]">
            About Us
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </header>

        <hr className="my-6 border-gray-200" />

        <nav
          className="flex gap-6 overflow-x-auto text-sm md:text-base font-medium"
          role="tablist"
          aria-label="About tabs"
        >
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${t.id}`}
                id={`tab-${t.id}`}
                className={`pb-2 focus:outline-none ${
                  isActive
                    ? "text-emerald-700 border-b-2 border-emerald-700"
                    : "text-gray-600 hover:text-emerald-700"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </nav>

        <section className="mt-6">
          <div
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            className="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base"
          >
            <p>{content[active]}</p>

            <p>
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it's
              a personal gift or a time-sensitive business delivery, we ensure
              it reaches its destination — on time, every time.
            </p>

            <p>
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it's
              a personal gift or a time-sensitive business delivery, we ensure
              it reaches its destination — on time, every time.
            </p>
          </div>
        </section>

        {/* Optional footer note */}
        <div className="mt-8 text-xs text-gray-400">
          Updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
