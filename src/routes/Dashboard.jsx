/* eslint-disable react/jsx-key */
import React from "react";
import Sidebar from "../comps/Sidebar";
import UpperBar from "../comps/UpperBar";
import loc from "../assets/loc.svg";
import ops from "../assets/ops.svg";
import drones from "../assets/drones.svg";
import Stats from "../comps/Stats";
import LineChart from "../comps/LineChart";
import { linedata } from "../utils//data/LineData";
import { piedata } from "../utils//data/piedata";
import PieChart from "../comps/PieChart";
import Template from "../comps/Template";

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
    <Template>
      <div className="bg-[#D9D9D9] h-screen pl-5 pt-2">
        <div className="p-4">
          <h1 className="font-main text-3xl text-black font-bold ">
            Welcome back, {`Walid Younes`}
          </h1>
          <p>Dashboard Overview</p>
        </div>
        <div className="flex  justify-around">
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
        <div className="grid grid-cols-2">
          <div className="bg-white rounded-xl w-[90%] p-3 m-10">
            <h1 className="font-[Nunito Sans] font-bold text-[#243465] text-3xl pl-5 pt-2">
              Losses
            </h1>
            <LineChart data={linedata} />
          </div>
          <div className="bg-white rounded-xl w-[90%] p-3 m-10">
            <h1 className="font-[Nunito Sans] font-bold text-[#243465] text-3xl pl-5 pt-2">
              The reasons
            </h1>
            <LineChart data={linedata} />
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Dashboard;
