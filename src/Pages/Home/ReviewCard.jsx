import React from "react";

const ReviewCard = ({ data }) => {
  const { review, userName, ratings, user_photoURL } = data;

  return (
    <div className="bg-pink-100 rounded-xl p-6 shadow-lg max-w-md mx-auto relative">
      {/* Quote Icon */}
      <div className="text-4xl text-gray-300 mb-4">“</div>

      {/* Review Text */}
      <p className="text-gray-800 mb-6 leading-relaxed">{review}</p>

      {/* Divider */}
      <hr className="border-dashed border-gray-400 mb-4" />

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-teal-800 overflow-hidden">
          {user_photoURL && (
            <img
              src={user_photoURL}
              alt={userName}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{userName}</h3>
          <p className="text-gray-600 text-sm">Rating: {ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
