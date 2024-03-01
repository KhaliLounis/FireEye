import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import profilepic from "../assets/profilepic.png";
const UpperBar = (props) => {
  const [visible, setVisble] = useState(false)
  return (
    <div className="flex justify-between p-2 items-center">
      <div>
        { /*<div className= {visible? "listbtn active": "listbtn"}   id="btnlist" onClick={()=>setVisble(!visible)}>
          <span></span>
          <span></span>
          <span></span>
  </div>*/}
      </div>
      <div className="d-flex align-items-center">
        <FaRegBell size={20} className="cursor-pointer" />
        <img src={profilepic} alt="profilepic" className="rounded-full mx-3" />
        <div class="dropdown">
          <button class="btn  dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Name
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default UpperBar;