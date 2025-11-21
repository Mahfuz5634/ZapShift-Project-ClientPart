import React from "react";
import sideimg from "../../assets/agent-pending.png";

const Rider = () => {
  return (
    <div className="container mx-auto p-15 bg-white rounded-2xl lg:my-4">
      {/* Header Section */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-[#134449]">Be a Rider</h1>
        <p className="text-gray-500 mt-3 leading-relaxed text-justify">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <hr className="mt-6" />

      {/* Main Form + Image Section */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Form */}
        <div>
          <h2 className="text-xl font-semibold text-[#134449] mb-5">
            Tell us about yourself
          </h2>

          <form className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Your Age</label>
                <input
                  type="number"
                  placeholder="Your age"
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Your District</label>
                <select className="w-full border rounded-md px-3 py-2 mt-1">
                  <option>Select your District</option>
                  <option>Dhaka</option>
                  <option>Chattogram</option>
                  <option>Rajshahi</option>
                  <option>Khulna</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">NID No</label>
                <input
                  type="text"
                  placeholder="NID"
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Contact</label>
                <input
                  type="text"
                  placeholder="Contact"
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div>
              <label className="text-sm font-medium">
                Which warehouse do you want to work?
              </label>
              <select className="w-full border rounded-md px-3 py-2 mt-1">
                <option>Select warehouse</option>
                <option>Dhaka Warehouse</option>
                <option>Gazipur Warehouse</option>
                <option>Narayanganj Warehouse</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:opacity-80 text-gray-900 font-semibold py-2 rounded-md mt-3"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Side Image */}
        <div className="flex justify-center">
          <img
            src={sideimg}
            className="w-[350px] md:w-[450px] lg:w-[500px]"
            alt="Rider"
          />
        </div>
      </div>
    </div>
  );
};

export default Rider;
