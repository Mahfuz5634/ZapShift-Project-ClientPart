import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

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
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">📦 My Parcels</h1>
        <p className="text-gray-500">
          Total Parcels: <span className="font-semibold">{parcels.length}</span>
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Parcel Name</th>
              <th className="px-6 py-4">Receiver</th>
              <th className="px-6 py-4">Weight (KG)</th>
              <th className="px-6 py-4">From</th>
              <th className="px-6 py-4">To</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr
                key={parcel._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{parcel.parcelName}</td>
                <td className="px-6 py-3">{parcel.receiverName}</td>
                <td className="px-6 py-3">{parcel.parcelWeight}</td>
                <td className="px-6 py-3">{parcel.senderDistrict}</td>
                <td className="px-6 py-3">{parcel.receiverDistrict}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold 
                    ${
                      parcel.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : parcel.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {parcel.status}
                  </span>
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
