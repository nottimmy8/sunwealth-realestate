import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white/40 backdrop-blur-md border border-white/20 p-2 shadow-lg transition-all duration-300">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#">properties</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
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
