/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Template from "../comps/Template";
import { TiWarningOutline } from "react-icons/ti";

const Alerts = () => {
  return (
    <Template>
      <div className="flex flex-col  ">
        <h1 className="font-main text-4xl text-black font-bold pt-4 text-center">
          Welcome back, {`Walid Younes`}
        </h1>
        <div className="ml-5 flex items-center gap-x-4">
          <TiWarningOutline size={40} />
          <p className="fs-3 my-3 fw-bold ">Alerts history</p>
        </div>
      </div>
      <div className="p-0 bg-white rounded-4 table-container">
        <table className="table table-hover custom-table">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Region</th>
              <th scope="col">Time</th>
              <th scope="col">Drone</th>
              <th scope="col">Wilaya</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Done</th>
              <td>Babezzouar |45 city </td>
              <td className="">14:34</td>
              <td className="">GeoScan Aerial</td>
              <td className="">Algiers</td>
            </tr>
            <tr>
              <th scope="row">Pending</th>
              <td>Babezzouar |45 city </td>
              <td className="">14:34</td>
              <td className="">GeoScan Aerial</td>
              <td className="">Algiers</td>
            </tr>
            <tr>
              <th scope="row">Pending</th>
              <td>Babezzouar |45 city </td>
              <td className="">14:34</td>
              <td className="">GeoScan Aerial</td>
              <td className="">Algiers</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Template>
  );
};

export default Alerts;
