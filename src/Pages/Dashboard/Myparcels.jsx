import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const Myparcels = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: parcels = [], isLoading } = useQuery({
    queryKey: ["my-parcels", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcel?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="text-center py-10 text-xl font-semibold">
        Loading your parcels...
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📦 My Parcels</h1>
        <p className="text-gray-600">
          Total Parcels:{" "}
          <span className="font-semibold text-gray-900">{parcels.length}</span>
        </p>
      </div>

      {/* Table Wrapper */}
      <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Parcel Name</th>
              <th className="px-6 py-4">Receiver</th>
              <th className="px-6 py-4">Weight (KG)</th>
              <th className="px-6 py-4">From</th>
              <th className="px-6 py-4">To</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Pay</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {parcels.map((parcel, index) => (
              <tr
                key={parcel._id}
                className="border-b hover:bg-gray-50 transition cursor-pointer"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  {parcel.parcelName}
                </td>
                <td className="px-6 py-4">{parcel.receiverName}</td>
                <td className="px-6 py-4">{parcel.parcelWeight}</td>
                <td className="px-6 py-4">{parcel.senderDistrict}</td>
                <td className="px-6 py-4">{parcel.receiverDistrict}</td>

                {/* Status Badge */}
                <td className="px-6 py-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide
                      ${
                        parcel.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : parcel.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }
                    `}
                  >
                    {parcel.status}
                  </span>
                </td>

                {/* Pay Button */}
                <td className="px-6 py-4 text-center">
                  <Link
                    to={`/dashboard/paybill/${parcel._id}`}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-900 shadow-md 
                               hover:opacity-90 transition"
                    style={{ backgroundColor: "#caeb66" }}
                  >
                    Pay
                  </Link>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myparcels;
