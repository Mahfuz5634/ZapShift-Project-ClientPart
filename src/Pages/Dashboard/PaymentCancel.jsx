import React from "react";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">

      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center border border-gray-200">

        {/* Cancel Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "#ffd6d6" }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff3b3b"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Payment Cancelled
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-8">
          Your payment was not completed.  
          If this was a mistake, you can try again.
        </p>

        {/* Back buttons */}
        <div className="flex flex-col gap-3">

          <Link
            to="/dashboard/my-parcels"
            className="w-full py-3 rounded-xl font-semibold shadow-md text-gray-900 hover:opacity-90 transition"
            style={{ backgroundColor: "#caeb66" }}
          >
            Back to Dashboard
          </Link>

          <Link
            to="/"
            className="w-full py-3 rounded-xl font-semibold shadow-md bg-gray-200 hover:bg-gray-300 transition"
          >
            Go to Home
          </Link>

        </div>

      </div>
    </div>
  );
};

export default PaymentCancel;
