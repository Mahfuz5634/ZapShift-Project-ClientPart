import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Paybill = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosSecure.get(`/paybill/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id, axiosSecure]);

  const handlePayment = async () => {
    const paymentInfo = {
      cost: Number(data.cost),
      parcelId: data._id,
      senderEmail: data.senderEmail,
      parcelName: data.parcelName,
    };

    try {
      const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
      window.location.href = res.data.url;
    } catch (error) {
      console.error("Payment error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      <div className="max-w-md w-full p-8 rounded-2xl shadow-2xl 
                      bg-white/70 backdrop-blur-xl border border-white/40">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-4"
            style={{ color: "#2d2d2d" }}>
          Complete Your Payment
        </h1>

        {/* Underline Accent */}
        <div className="w-20 h-1 mx-auto rounded-full mb-8"
             style={{ backgroundColor: "#caeb66" }}></div>

        {/* Parcel Details Card */}
        <div className="bg-gray-50 p-5 rounded-xl border mb-8 shadow-sm">

          <p className="text-lg font-semibold text-gray-700">Parcel Name</p>
          <p className="text-gray-600 mb-4">{data?.parcelName}</p>

          <p className="text-lg font-semibold text-gray-700">Sender Email</p>
          <p className="text-gray-600 mb-4">{data?.senderEmail}</p>

          <p className="text-lg font-semibold text-gray-700">Amount to Pay</p>

          <p className="text-4xl font-extrabold mt-2"
             style={{ color: "#caeb66" }}>
            ${data?.cost}
          </p>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          className="w-full py-3 rounded-xl font-semibold text-xl shadow-lg 
                     transition-all duration-200 transform hover:scale-105"
          style={{ backgroundColor: "#caeb66", color: "#1f1f1f" }}
        >
          Proceed to Payment
        </button>

      </div>
    </div>
  );
};

export default Paybill;
