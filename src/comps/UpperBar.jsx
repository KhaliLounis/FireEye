/* eslint-disable no-undef */
import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import profilepic from "../assets/profilepic.png";
import {logout} from "../utils/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setVisible } from "../utils/slices/sidebarSlice";
const UpperBar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-2 items-center">
      
      <div>
        <IoMenu size={30} className="hidden max-md:block self-left cursor-pointer" onClick={()=> dispatch(setVisible())}/>
      </div>
      <div className="d-flex align-items-center">
        <FaRegBell size={25} className="cursor-pointer" />
        <img src={profilepic}  alt="profilepic" className="rounded-full ml-3 size-10" />
        <div className="dropdown">
          <button className="btn  dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {`Walid Younes`}
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#" onClick={()=> {logout(); navigate('/')}}>Logout</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default UpperBar;