import React, { use } from "react"; // Optional: for star icon, or use emoji/star image
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import userLogo from "../assets/user.png";
const ReviewCard = ({ submittedComment, ratingValue }) => {
  const { user } = use(AuthContext);
  const { displayName, photoURL } = user;
  return (
    <div className="md:w-[400px] w-full md:h-[150px] bg-white p-3 md:p-5 rounded-xl shadow-xl shadow-orange-200  border-2 border-orange-200">
      <div className="flex  justify-between items-start">
        <div className="flex items-center gap-3">
          <img
            className="w-10 rounded-full"
            src={photoURL ? photoURL : userLogo}
            alt=""
          />
          <div>
            <h4 className="font-semibold text-gray-900">{displayName}</h4>
            <p className="text-sm text-gray-500">Today</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-yellow-500 font-semibold">
          <FaStar className="w-4 h-4 fill-yellow-400" />
          <span>{ratingValue}</span>
        </div>
      </div>

      <div className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed">
        <p className="pl-2 font-semibold">{submittedComment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
