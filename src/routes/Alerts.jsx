/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Template from "../comps/Template";
import { TiWarningOutline } from "react-icons/ti";

const Alert = (props) => {
  let styles = {
    background:
      props.status === "Pending"
        ? "#EDD245"
        : "#28CC42"  };
return (
  <tr>
  <th><p style={styles} className="py-1 rounded w-20 m-auto">{props.status}</p></th>
  <td>{props.region}</td>
  <td className="">{props.time}</td>
  <td className="">{props.device}</td>
  <td className="">{props.wilaya}</td>
</tr>
)
}

const Alerts = () => {
  const alerts = [
    {
      status: "Pending",
      region: "Eucalyptus",
      time: "12:00",
      device: "GeoScan Aerial",
      wilaya: "Alger",
    },
    {
      status: "Resolved",
      region: "Bir Mourad Rais",
      time: "12:00",
      device: "GeoScan Aerial",
      wilaya: "Alger",
    },
    {
      status: "Resolved",
      region: "Bab El Oued",
      time: "12:00",
      device: "Aerial Data Solutions",
      wilaya: "Alger",
    },
    {
      status: "Pending",
      region: "El Harrach",
      time: "12:00",
      device: "SkyMappers",
      wilaya: "Alger",
    },
    {
      status: "Pending",
      region: "Kouba",
      time: "12:00",
      device: "Drone 5",
      wilaya: "Alger",
    },
  ];
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
            {alerts.map((alert) => (
              <Alert
                status={alert.status}
                region={alert.region}
                time={alert.time}
                device={alert.device}
                wilaya={alert.wilaya}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Template>
  );
};

export default Alerts;
