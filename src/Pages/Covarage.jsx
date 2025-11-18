import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Covarage = () => {
  const dhakaPosition = [23.8103, 90.4125];

  return (
    <div className="max-w-7xl mx-auto my-14 px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#03373d] mb-3">
          Our Delivery Coverage Across Bangladesh
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We proudly deliver to all{" "}
          <span className="font-semibold">64 districts</span> of Bangladesh.
          Search your district below or explore the map to see our active
          service areas.
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-lg border w-full max-w-md">
          <input
            type="text"
            placeholder="Search your district..."
            className="outline-none w-full text-sm"
          />
          <button className="bg-[#03373d] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#05545c] transition-all">
            Search
          </button>
        </div>
      </div>

      <div className="w-full h-[500px] mt-10 border rounded-2xl overflow-hidden shadow-xl relative flex justify-center items-center">
        <MapContainer
          className="h-full w-full"
          center={dhakaPosition}
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={dhakaPosition}>
            <Popup>
              <b>Dhaka, Bangladesh</b> <br /> Main Delivery Hub.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
        <div className="p-6 bg-white shadow-md rounded-xl border hover:shadow-lg transition-all">
          <h2 className="text-xl font-bold text-[#03373d] mb-2">
            Fast Delivery
          </h2>
          <p className="text-gray-600 text-sm">
            We ensure quick and safe delivery to every district.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl border hover:shadow-lg transition-all">
          <h2 className="text-xl font-bold text-[#03373d] mb-2">
            Real-time Tracking
          </h2>
          <p className="text-gray-600 text-sm">
            Track your parcel live from pickup to arrival.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl border hover:shadow-lg transition-all">
          <h2 className="text-xl font-bold text-[#03373d] mb-2">
            24/7 Support
          </h2>
          <p className="text-gray-600 text-sm">
            Our team is always ready to assist with your delivery needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Covarage;
