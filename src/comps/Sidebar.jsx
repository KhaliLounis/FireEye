/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { GiDeliveryDrone } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import fireeye from '../assets/fireeye.svg'
import { GrLocation } from "react-icons/gr";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const visible = useSelector((state) => state.sidebar.visible);
  const navlinks = [
    {
      icon: FaHome,
      name: "Dashboard",
    },
    {
      icon: GiDeliveryDrone,
      name: "Devices",
    },
    {
      icon: TiWarning,
      name: "Alerts",
    },
    {
      icon: FaUser,
      name: "Users",
    },
     { icon: GrLocation,
      name: "Regions",
    },
  ];
  return (
    <div className={`sidebar ${visible ? 'active p-5 px-8 ': ''} flex flex-col bg-[#182448] h-screen md:px-8 md:p-5`} >

      <div className="mb-5">
        <img src={fireeye} alt="" />
      </div>
      <div>
        {navlinks.map((item, index) => {
          let link =
            item.name === "Dashboard"
              ? "/dashboard"
              : `/${item.name.toLowerCase()}`;

          return (
            <NavLink
              to={`${link}`}
                className="flex items-center gap-4 p-3 rounded w-full"
              style={({ isActive }) => {
                if (isActive) {
                  return { background: "linear-gradient(90deg, rgba(224, 212, 212, 0) 0%, rgba(255, 255, 255, 0.25) 100%)" };
                }
              }}
            >
              {<item.icon color="white" size={20}/>}	
              <p className="font-main font-semibold text-xl text-white">{item.name}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
