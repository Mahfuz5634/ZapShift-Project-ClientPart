import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const SendParcel = () => {
  const [parcelType, setParcelType] = useState("Document");
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const {user}=useAuth();

  const handlePercel = (data) => {
    const isDocument = data.parcelType === "Document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }
    data.cost=cost;
    console.log(data);
    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree!",
    }).then((result) => {

      if (result.isConfirmed) {
        //save the info in database
        axiosSecure.post("/parcel", data)
        .then((res) => {
          console.log(res.data);
        });
      }

      //     // Swal.fire({
      //     //     title: "Deleted!",
      //     //     text: "Your file has been deleted.",
      //     //     icon: "success"
      //     // });
      // }
    });
  };

  return (
    <div className="container mx-auto p-8 md:p-15 my-8 bg-white shadow-md rounded-2xl">
      <h1 className="text-3xl text-[#03373d] font-bold mb-6">Send A Parcel</h1>

      <p className="mb-4 text-gray-500">Enter your parcel details</p>

      {/* Parcel Type */}
      <form onSubmit={handleSubmit(handlePercel)}>
        <div className="flex gap-6 mb-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Document"
              {...register("parcelType")}
              checked={parcelType === "Document"}
              onChange={() => setParcelType("Document")}
            />
            Document
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Not-Document"
              {...register("parcelType")}
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
            {...register("parcelName")}
            className="input border p-2 rounded w-full"
          />
          <input
            type="text"
            {...register("parcelWeight")}
            placeholder="Parcel Weight (KG)"
            className="input border p-2 rounded w-full"
          />
        </div>

        {/* Sender & Receiver Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Sender Details */}
          <div>
            <h2 className="font-semibold mb-3">Sender Details</h2>
            <input
              type="text"
              {...register("senderName")}
              placeholder="Sender Name"
              defaultValue={user?.displayName}
              className="input border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              placeholder="Sender Address"
              {...register("senderAddress")}
              className="input border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              placeholder="Sender Email"
              {...register("senderEmail")}
              defaultValue={user?.email}
              className="input border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              placeholder="Sender Phone No"
              {...register("senderPhone")}
              className="input border p-2 rounded w-full mb-3"
            />
            <select
              className="select border p-2 rounded w-full mb-3"
              {...register("senderDistrict")}
            >
              <option>Select your District</option>
              <option>Dhaka</option>
              <option>Barishal</option>
              <option>Chandpur</option>
              <option>Rangpur</option>
            </select>
            <textarea
              placeholder="Pickup Instruction"
              className="textarea border p-2 rounded w-full"
              {...register("senderText")}
            />
          </div>

          {/* Receiver Details */}
          <div>
            <h2 className="font-semibold mb-3">Receiver Details</h2>
            <input
              type="text"
              placeholder="Receiver Name"
              {...register("receiverName")}
              className="input border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              placeholder="Receiver Address"
              {...register("receiverAdress")}
              className="input border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              placeholder="Receiver Email"
              {...register("receiverEmail")}
              className="input border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              {...register("receiverPhone")}
              placeholder="Receiver Contact No"
              className="input border p-2 rounded w-full mb-3"
            />
            <select
              className="select border p-2 rounded w-full mb-3"
              {...register("receiverDistrict")}
            >
              <option>Select your District</option>
              <option>Dhaka</option>
              <option>Barishal</option>
              <option>Chandpur</option>
              <option>Rangpur</option>
            </select>
            <textarea
              {...register("reciverText")}
              placeholder="Delivery Instruction"
              className="textarea border p-2 rounded w-full"
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
