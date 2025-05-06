import React, { use, useState, useEffect } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Profile = () => {
  const { updateUser } = use(AuthContext);
  const { user } = use(AuthContext);
  const { displayName, photoURL, email } = user;

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  // Update state if user data changes
  useEffect(() => {
    setName(displayName || "");
    setPhoto(photoURL || "");
  }, [displayName, photoURL]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ displayName: name, photoURL: photo });
      setEdit(false);
      setName("");
      setPhoto("");
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    <div className="mt-20 flex items-center justify-center px-1">
      <div className="md:min-h-[550px] min-h-[450px] flex flex-col gap-5 shadow-2xl w-[800px] py-9 rounded-2xl border-r-2 border-l-2 border-green-300">
        <div className="flex justify-between px-4 md:px-16">
          <div className="flex justify-center md:gap-5 gap-4">
            <img
              className="md:w-[200px] w-[100px] h-[100px] md:h-auto shadow-md rounded-2xl"
              src={photoURL}
              alt="User"
            />
            <div className="flex flex-col justify-between md:gap-3 md:p-3">
              <h2 className="text-2xl font-semibold">{displayName}</h2>
              <h4>Junior developer</h4>
              <h4 className="flex gap-3 items-center">
                <IoMailOpenOutline size={20} />
                <span className="hover:underline cursor-pointer">{email}</span>
              </h4>
              <h4 className="flex gap-3 items-center">
                <AiOutlinePhone size={20} />
                <span className="cursor-pointer">+25 381 77 983</span>
              </h4>
            </div>
          </div>
          <button
            onClick={() => setEdit(true)}
            className="btn btn-accent text-white rounded-2xl px-6"
          >
            Edit
          </button>
        </div>

        {!edit && (
          <div className="px-4 md:px-16 pt-20">
            <p className="text-sm md:text-xl text-gray-400 text-center">
              You can edit your profile by clicking <br /> on the edit button
            </p>
          </div>
        )}

        {edit && (
          <div className="px-4 md:px-16">
            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="md:w-6/8 w-full px-4 py-3 rounded-md border-2 border-accent outline-none"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="photo_url" className="block">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo_url"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Paste your Photo URL"
                  className="md:w-6/8 w-full px-4 py-3 rounded-md border-2 border-accent outline-none"
                />
              </div>
              <div className="flex md:gap-9 gap-4">
                <button
                  type="button"
                  onClick={() => setEdit(false)}
                  className="btn bg-red-500 hover:bg-red-600 rounded-2xl text-white font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-secondary rounded-2xl px-6 text-white font-bold"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
