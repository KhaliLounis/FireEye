import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import profilepic from "../assets/profilepic.png";
import {logout} from "../utils/slices/authSlice";
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
        <img src={profilepic}  alt="profilepic" className="rounded-full ml-3 size-10" />
        <div className="dropdown">
          <button className="btn  dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {`Walid Younes`}
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#" onClick={()=> logout()}>Logout</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default UpperBar;