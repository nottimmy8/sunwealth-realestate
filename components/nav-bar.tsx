import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-6xl w-full mx-auto rounded-full bg-white p-2">
      <div className="flex items-center justify-between">
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button className="bg-black  text-white px-4 py-2 rounded-full text-sm">
            View Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
