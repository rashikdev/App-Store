import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ReviewCard from "../components/ReviewCard";
import toast from "react-hot-toast";
import userLogo from "../assets/user.png";
import { FaStar } from "react-icons/fa";
const AppDetails = () => {
  const [installed, setInstalled] = useState(false);
  const [checked, setChecked] = useState(false);
  const [submittedComment, setSubmittedComment] = useState("");
  const [comment, setComment] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ratingValue, setRatingValue] = useState(0);

  const [click, setClick] = useState(false);

  const [review, setReview] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedComment(comment);
    setComment("");
    setClick(false);
    toast.success("Comment submitted successfully");
    setIsSubmitted(true);
  };

  const data = useLoaderData();
  const { id } = useParams();
  const singleApp = data.find((app) => app.id === id);
  const {
    name,
    thumbnail,
    rating,
    downloads,
    banner,
    category,
    description,
    features,
    reviews,
    developer,
  } = singleApp;
  return (
    <div className="rounded-xl p-6 mt-5 space-y-4 bg-white">
      <img
        src={banner}
        alt={`${name} banner`}
        className="w-full h-[50vh] object-cover rounded-lg"
      />

      <div className="flex gap-4 items-center">
        <img
          src={thumbnail}
          alt={`${name} thumbnail`}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-500">by {developer}</p>
          <p className="text-sm text-gray-600 mt-1">
            Category: <span className="font-medium">{category}</span>
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-sm text-gray-700">
        <p>⭐ {rating} rating</p>
        <p>⬇️ {downloads.toLocaleString()} downloads</p>
      </div>

      {/* Description */}
      <div>
        <h3 className="font-semibold text-lg">Description</h3>
        <p>{description}</p>
      </div>

      {/* Features */}
      <div>
        <h3 className="font-semibold text-lg">Features</h3>
        <ul className="list-disc pl-6 text-gray-800">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Reviews */}
      <div className="min-h-[200px]">
        <h3 className="font-semibold text-lg mb-4">Reviews</h3>
        <div className="flex flex-col md:flex-row gap-10 itecems-center">
          <div className="md:w-[400px] w-full md:h-[150px] bg-white p-3 md:p-5 rounded-xl shadow-xl shadow-orange-200  border-2 border-orange-200">
            <div className="flex  justify-between items-start">
              <div className="flex items-center gap-3">
                <img className="w-10 rounded-full" src={userLogo} alt="" />
                <div>
                  <h4 className="font-semibold text-gray-900"> Rashik</h4>
                  <p className="text-sm text-gray-500">2 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                <FaStar className="w-4 h-4 fill-yellow-400" />
                <span>4.5</span>
              </div>
            </div>

            <div className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold pl-2">Very good app 😍</p>
            </div>
          </div>
          {isSubmitted && (
            <div className="md:w-auto">
              <ReviewCard
                submittedComment={submittedComment}
                ratingValue={ratingValue}
              ></ReviewCard>
            </div>
          )}
        </div>
      </div>

      {/* Install Button */}
      <button
        onClick={() => {
          setInstalled((prv) => !prv);
          setReview(true);
          toast.success(installed ? "App Uninstalled" : "App Installed");
        }}
        className="bg-primary text-white font-semibold md:text-xl px-4 py-2 md:py-4 rounded-full hover:bg-blue-700 transition duration-100 cursor-pointer w-full md:my-10"
      >
        {installed ? "Uninstall" : "Install"}
      </button>
      <section className="">
        <fieldset className="flex flex-col md:flex-row justify-between items-center space-y-3 rounded md:px-10">
          <legend className="font-bold text-2xl px-2">User reviews</legend>
          <div className="p-3">
            <div className="font-semibold pb-5">
              <h2>Your Rating</h2>
              {/* rating stars */}

              <div className="flex space-x-1 my-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-2xl cursor-pointer ${
                      click && star <= ratingValue
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }`}
                    onClick={() => {
                      setRatingValue(star);
                      setClick(true);
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* rating stars end */}
            </div>
            <form onSubmit={handleSubmit}>
              <textarea
                value={comment}
                name="comment"
                rows="6"
                cols="40"
                placeholder="Write your review here"
                onChange={(e) => setComment(e.target.value)}
                className="border-2 rounded-md border-gray-200 outline-secondary p-2"
              ></textarea>
              <br />
              <br />
              <div className="flex items-center justify-center">
                <input
                  onClick={() => setChecked((prv) => !prv)}
                  type="checkbox"
                  className="checkbox checkbox-secondary border-[1.5px] self-start md:mt-0 mt-2"
                />
                <label className="ml-2 text-green-600 font-medium self-start">
                  <p>
                    we care about protecting your data. Here's our{" "}
                    <span className="underline text-primary font-bold cursor-pointer">
                      Privacy Policy
                    </span>
                  </p>
                </label>
              </div>
              <br />
              <button
                type="submit"
                className={`px-4 py-2 md:px-10 md:py-3 rounded-full transition duration-100 w-full md:w-auto ${
                  review && checked
                    ? "bg-primary hover:scale-95 transition-all duration-200 hover:shadow-2xl hover:bg-blue-700 text-white cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!(review && checked)}
              >
                {isSubmitted ? "Edit Review" : "Submit"}
              </button>
            </form>
          </div>
        </fieldset>
      </section>
    </div>
  );
};

export default AppDetails;
