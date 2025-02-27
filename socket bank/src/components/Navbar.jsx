import React, { useState } from "react";

const Navbar = () => {
  const [login, setLogin] = useState("login");
  return (
    <div className="flex flex-row w-full justify-between items-center py-2.5 px-6">
      <div className="">
        <h2 className="text-2xl">Socket Bank</h2>
      </div>
      <ul className="flex gap-6 border rounded-full px-4 py-2">
        <li className="text-xl">Home</li>
        <li className="text-xl">Buy</li>
        <li className="text-xl">About</li>
      </ul>
      <div className="flex">
        <button className=""></button>
        <img src="#" alt="lakakak" />
      </div>
    </div>
  );
};

export default Navbar;
