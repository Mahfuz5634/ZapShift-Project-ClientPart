import React from "react";
import { Link } from "react-router";

const PaymentSucces = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">

      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center border border-gray-200">

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg animate-bounce"
            style={{ backgroundColor: "#caeb66" }}
          >
            <svg
              width="55"
              height="55"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1f1f1f"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Payment Successful!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-8">
          Thank you! Your payment has been processed successfully.
          A confirmation email has been sent to you.
        </p>

        {/* Back to Dashboard */}
        <Link
          to="/dashboard/my-parcels"
          className="block w-full py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition text-gray-900"
          style={{ backgroundColor: "#caeb66" }}
        >
          Back to Dashboard
        </Link>

      </div>
    </div>
  );
};

export default PaymentSucces;
