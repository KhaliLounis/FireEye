/* eslint-disable react/jsx-key */
import React from "react";
import Sidebar from "../comps/Sidebar";
import UpperBar from "../comps/UpperBar";
import loc from "../assets/loc.svg";
import ops from "../assets/ops.svg";
import drones from "../assets/drones.svg";
import Stats from "../comps/Stats";

const Dashboard = () => {
  const data = [
    {
      title: "Successful operations",
      value: "96",
      icon: loc,
      percent: "3.2",
      available: "operations",
    },
    {
      title: "Drones number",
      value: "109",
      icon: ops,
      percent: "2.1",
      available: "ones",
    },
    {
      title: "Wilayas",
      value: "23",
      icon: drones,
      percent: "1",
      available: "centers",
    },
  ];
  return (
    <div className="flex ">
      <Sidebar></Sidebar>
      <div className="flex flex-col w-full">
        <UpperBar></UpperBar>
        <div className="bg-[#D9D9D9] h-screen pl-5 pt-2">
          <div>
            <h1 className="font-main text-3xl text-black">
              Welcome back, {`Walid Younes`}
            </h1>
            <p>Dashboard Overview</p>
          </div>
          <div>
            <div className="flex gap-8">
              {data.map((item, index) => {
                return (
                  <Stats
                    title={item.title}
                    count={item.value}
                    icon={item.icon}
                    percent={item.percent}
                    available={item.available}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
