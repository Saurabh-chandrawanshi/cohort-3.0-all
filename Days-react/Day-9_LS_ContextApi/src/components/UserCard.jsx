
import React from "react";

const UserCard = ({ user, setToggle,deleteUser,setUpdatedData }) => {
  if (!user) return null;

  return (
    <div>
      <div className="card bg-yellow-400 w-50 p-1 mt-4 rounded-2xl shadow-2xl">
        <div className="image">
          <img
            src={user.image}
            alt={user.name || "User"}
            className="object-cover h-40 p-2 object-center w-full"
          />
        </div>

        <div className="content ml-2 mb-4">
          <h1>Name: {user.name}</h1>
          <h1>Email: {user.email}</h1>
          <h1>Number: {user.number}</h1>
          <h1>Date of Birth: {user.age}</h1>

          <div className="button flex gap-2 mt-4">
            <button
              onClick={() => {
                    setUpdatedData(user);
                setToggle((prev) => !prev)}}
              className="bg-yellow-200 p-2 rounded-2xl px-4 shadow-2xl"
            >
              Edit
            </button>

            <button
              className="bg-amber-100 p-2 rounded-2xl px-4"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
