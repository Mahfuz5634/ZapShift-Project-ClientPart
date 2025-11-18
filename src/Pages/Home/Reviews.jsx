// HorizontalReviews.jsx
import React from "react";

const reviews = [
  {
    "id": "5f47ac10b4f1c03e8c123456",
    "user_email": "john.doe@example.com",
    "userName": "John Doe",
    "delivery_email": "delivery1@example.com",
    "ratings": 4.5,
    "review": "Smooth delivery and polite staff.",
    "parcel_id": "5f47ac10b4f1c03e8c654321",
    "pick_up_email": "pickup1@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/men/10.jpg",
    "date": "2024-05-08T14:30:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c234567",
    "user_email": "jane.smith@example.com",
    "userName": "Jane Smith",
    "delivery_email": "delivery2@example.com",
    "ratings": 3.8,
    "review": "Took a bit longer than expected, but okay overall.",
    "parcel_id": "5f47ac10b4f1c03e8c765432",
    "pick_up_email": "pickup2@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/women/25.jpg",
    "date": "2024-06-10T10:15:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c345678",
    "user_email": "alex.brown@example.com",
    "userName": "Alex Brown",
    "delivery_email": "delivery3@example.com",
    "ratings": 5.0,
    "review": "Excellent service! Fast and secure.",
    "parcel_id": "5f47ac10b4f1c03e8c876543",
    "pick_up_email": "pickup3@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/men/34.jpg",
    "date": "2024-07-01T08:50:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c456789",
    "user_email": "lisa.white@example.com",
    "userName": "Lisa White",
    "delivery_email": "delivery4@example.com",
    "ratings": 4.2,
    "review": "Very responsive and professional.",
    "parcel_id": "5f47ac10b4f1c03e8c987654",
    "pick_up_email": "pickup4@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/women/12.jpg",
    "date": "2024-07-15T09:10:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c567890",
    "user_email": "david.lee@example.com",
    "userName": "David Lee",
    "delivery_email": "delivery5@example.com",
    "ratings": 2.9,
    "review": "Late delivery and no updates. Disappointed.",
    "parcel_id": "5f47ac10b4f1c03e8c098765",
    "pick_up_email": "pickup5@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/men/19.jpg",
    "date": "2024-08-02T16:45:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c678901",
    "user_email": "nina.khan@example.com",
    "userName": "Nina Khan",
    "delivery_email": "delivery6@example.com",
    "ratings": 4.9,
    "review": "Superb experience! Highly recommended.",
    "parcel_id": "5f47ac10b4f1c03e8c109876",
    "pick_up_email": "pickup6@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/women/8.jpg",
    "date": "2024-08-10T12:00:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c789012",
    "user_email": "michael.jordan@example.com",
    "userName": "Michael Jordan",
    "delivery_email": "delivery7@example.com",
    "ratings": 3.3,
    "review": "Decent service but packaging could be better.",
    "parcel_id": "5f47ac10b4f1c03e8c210987",
    "pick_up_email": "pickup7@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/men/22.jpg",
    "date": "2024-08-14T18:20:00.000Z"
  },
  {
    "id": "5f47ac10b4f1c03e8c890123",
    "user_email": "emma.watson@example.com",
    "userName": "Emma Watson",
    "delivery_email": "delivery8@example.com",
    "ratings": 4.7,
    "review": "Fast, safe, and friendly delivery service.",
    "parcel_id": "5f47ac10b4f1c03e8c321098",
    "pick_up_email": "pickup8@example.com",
    "user_photoURL": "https://randomuser.me/api/portraits/women/5.jpg",
    "date": "2024-08-20T07:30:00.000Z"
  }
];

const HorizontalReviews = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Customer Reviews</h2>

      {/* Horizontal scroll container */}
      <div className="flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex-shrink-0 w-64 md:w-72 lg:w-80 snap-start bg-white shadow-lg rounded-xl p-4 md:p-6 text-center transition-transform transform hover:scale-105 min-h-[320px]"
          >
            {/* User Image */}
            <img
              src={review.user_photoURL}
              alt={review.userName}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-blue-400 mx-auto mb-2"
            />

            {/* User Name */}
            <h3 className="text-sm md:text-base font-semibold mb-1">{review.userName}</h3>

            {/* Rating */}
            <div className="flex justify-center mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-yellow-400 text-sm md:text-base ${
                    i < Math.round(review.ratings) ? "filled" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-gray-500 ml-1 text-sm md:text-base">({review.ratings})</span>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-xs md:text-sm">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalReviews;
