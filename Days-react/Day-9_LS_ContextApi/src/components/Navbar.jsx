
import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="p-2">
      <div className="navbar bg-yellow-400 flex justify-between p-4 rounded-2xl items-center shadow-2xl">
        <h1 className="text-2xl font-bold">
          Stu<span className="text-amber-100">dent</span>
        </h1>

        <div className="feature-nav flex gap-4">
          <a href="#" onClick={(e) => e.preventDefault()}>
            Home
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            About
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Contact
          </a>
        </div>

        <div className="profile">
          <button
            type="button"
            onClick={() => setToggle((prev) => !prev)}
            className="bg-amber-100 p-2 rounded-2xl shadow-2xl"
          >
            Create User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
