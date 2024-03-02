/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
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
import { AdminApi } from "../utils/data/constant";

const Dashboard = () => {
  const [stats, setStats] = useState({})
  const getData = async () => {
    try {
      const response = await fetch(`${AdminApi}dashboard`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
      });

      console.log('Response:', response); // Log the entire response
      if (!response.ok) {
        // Handle non-200 status codes
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result)
      if (result) {
        setStats(result);
      } else {
        console.error('No data returned');
      }
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  };


  useEffect(() => {
    getData();
  }, []);
  const data = [
    {
      title: "Successful operations",
      value: stats.fires  ,
      icon: ops,
      percent: "3.2",
      available: "operations",
    },
    {
      title: "Drones number",
      value: stats.devices ,
      icon: drones,
      percent: "2.1",
      available: "ones",
    },
    {
      title: "Wilayas",
      value: "48",
      icon: loc,
      percent: "1",
      available: "centers",
    },
  ];
  return (
    
    <Template>
      <div className="bg-[#D9D9D9] h-screen pl-5 pt-2">
        <div className="p-4">
          <h1 className="font-main text-3xl text-black font-bold mb-2 ">
            Welcome back, {`Walid Younes`}
          </h1>
          <p className="font-main font-medium text-[#5252528C] text-2xl">Dashboard Overview</p>
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
        <div className="grid grid-cols-2 ">
          <div className="bg-white rounded-xl w-[88%] p-3 m-10">
            <h1 className="font-[Nunito Sans] font-bold text-[#243465] text-3xl pl-4 pt-2">
              Losses
            </h1>
            <LineChart data={linedata} />
          </div>
          <div className="bg-white rounded-xl w-[84%] p-3 m-10">
            <h1 className="font-[Nunito Sans] font-bold text-[#243465] text-3xl pl-4 pt-2">
              The reasons
            </h1>
            <PieChart data={piedata} />
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Dashboard;
