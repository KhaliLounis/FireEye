/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import Sidebar from "../comps/Sidebar";
import UpperBar from "../comps/UpperBar";
import { useSelector } from "react-redux";
const Template = ({ children }) => {
  const visible = useSelector((state) => state.sidebar.visible);
  return (
    <div className="max-h-screen flex ">
      <Sidebar></Sidebar>
      <div className="flex flex-col w-full">
        <div
          className={` top-0 left-0 h-screen w-screen fixed m-0 bg-[rgba(20,20,20,0.25)] ${
            visible ? "block" : "hidden"
          }`}
        ></div>

        <UpperBar></UpperBar>
        <div className="content bg-[#D9D9D9] h-screen pl-5 pt-2 overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Template;
