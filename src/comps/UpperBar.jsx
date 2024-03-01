import React from "react";
import { FaRegBell } from "react-icons/fa6";
import profilepic from "../assets/profilepic.png";
const UpperBar = () => {
  return (
    <div className="flex justify-end gap-5 p-4 items-center">
      <FaRegBell size={20} className="cursor-pointer"/>
      <img src={profilepic} alt="profilepic" className="rounded-full" />
      <p>Walid Younes</p>
    </div>
  );
};

export default UpperBar;
