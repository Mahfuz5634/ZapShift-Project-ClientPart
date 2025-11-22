import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const [parcelType, setParcelType] = useState("Document");
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const handlePercel = (data) => {
      console.log(data);
  };

  return (
    <div className="container mx-auto p-6 my-8 bg-white shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold mb-6">Send A Parcel</h1>

      <p className="mb-4">Enter your parcel details</p>

      {/* Parcel Type */}
      <form onSubmit={handleSubmit(handlePercel)}>
        <div className="flex gap-6 mb-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Document"
              {...register('parcelType')}
              checked={parcelType === "Document"}
              onChange={() => setParcelType("Document")}
            />
            Document
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Not-Document"
              {...register('parcelType')}
              checked={parcelType === "Not-Document"}
              onChange={() => setParcelType("Not-Document")}
            />
            Not-Document
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Parcel Name"
            {...register('parcelName')}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
              {...register('parcelWeight')}
            placeholder="Parcel Weight (KG)"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Sender & Receiver Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Sender Details */}
          <div>
            <h2 className="font-semibold mb-3">Sender Details</h2>
            <input
              type="text"
                {...register('senderName')}
              placeholder="Sender Name"
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              placeholder="Sender Address"
                {...register('senderAddress')}
              className="border p-2 rounded w-full mb-3"
            />
             <input
              type="text"
              placeholder="Sender Email"
                {...register('senderEmail')}
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              placeholder="Sender Phone No"
                {...register('senderPhone')}
              className="border p-2 rounded w-full mb-3"
            />
            <select className="border p-2 rounded w-full mb-3"
             {...register('senderDistrict')}>
              <option>Select your District</option>
              <option>Dhaka</option>
              <option>Barishal</option>
              <option>Chandpur</option>
               
            </select>
            <textarea
              placeholder="Pickup Instruction"
              className="border p-2 rounded w-full"
               {...register('senderText')}
            />
          </div>

          {/* Receiver Details */}
          <div>
            <h2 className="font-semibold mb-3">Receiver Details</h2>
            <input
              type="text"
              placeholder="Receiver Name"
               {...register('receiverName')}
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              placeholder="Receiver Address"
               {...register('receiverAdress')}
              className="border p-2 rounded w-full mb-3"
            />
             <input
              type="text"
              placeholder="Receiver Email"
                {...register('receiverEmail')}
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              placeholder="Receiver Contact No"
              className="border p-2 rounded w-full mb-3"
            />
            <select className="border p-2 rounded w-full mb-3"
             {...register('receiverDistrict')}>
              <option>Select your District</option>
              <option>Dhaka</option>
              <option>Barishal</option>
              <option>Chandpur</option>
            </select>
            <textarea
             {...register('reciverText')}
              placeholder="Delivery Instruction"
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <p className="text-sm mb-4">* PickUp Time 4pm-7pm Approx.</p>

        <button className="bg-primary text-black font-semibold py-2 px-4 rounded">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
