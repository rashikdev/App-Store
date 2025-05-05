import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ReviewCard from "../components/ReviewCard";
import toast from "react-hot-toast";

const AppDetails = () => {
  const [installed, setInstalled] = useState(false);
  const [checked, setChecked] = useState(false);
  const [submittedComment, setSubmittedComment] = useState("");
  const [comment, setComment] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedComment(comment);
    setComment("");
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
        className="w-full h-48 object-cover rounded-lg"
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
        <p className="text-gray-800">{description}</p>
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
      <div>
        <h3 className="font-semibold text-lg">Reviews</h3>
        <div className="space-y-2">
          {reviews.map((review, idx) => (
            <div key={idx} className="border p-3 rounded bg-gray-50">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">{review.user}</span>: ⭐{" "}
                {review.rating}
              </p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Install Button */}
      <button
        onClick={() => setInstalled((prv) => !prv)}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-100 cursor-pointer w-full md:w-auto"
      >
        {installed ? "Uninstall" : "Install"}
      </button>
      <section className="">
        <fieldset className="flex flex-col md:flex-row justify-between items-center border-2 space-y-2 border-secondary rounded  md:px-10">
          <legend className="font-bold text-2xl px-2">User reviews</legend>
          <div className="p-3">
            <h3>Your Rating</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                value={comment}
                name="comment"
                rows="6"
                cols="40"
                onChange={(e) => setComment(e.target.value)}
                className="border-2 rounded-md border-gray-400 outline-secondary p-2"
              ></textarea>
              <br />
              <div>
                <input
                  onClick={() => setChecked((prv) => !prv)}
                  type="checkbox"
                  className="checkbox checkbox-secondary border-[1.5px]"
                />
                <label className="ml-2">
                  we care about protecting your data. Here's our
                  <span className="font-bold hover:underline cursor-pointer">
                    {" "}
                    Privacy Policy
                  </span>
                </label>
              </div>
              <br />
              <button
                type="submit"
                className={`px-4 py-2 rounded transition duration-100 w-full md:w-auto ${
                  installed && checked
                    ? "bg-primary hover:bg-blue-700 text-white cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!installed}
              >
                {isSubmitted ? "Edit Review" : "Submit"}
              </button>
            </form>
          </div>
          {isSubmitted && (
            <div className="w-[80%] md:w-auto py-5">
              <ReviewCard submittedComment={submittedComment}></ReviewCard>
            </div>
          )}
        </fieldset>
      </section>
    </div>
  );
};

export default AppDetails;
