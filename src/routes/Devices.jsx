import React, { useEffect, useState } from "react";
import Template from "../comps/Template";
import Filter from "../comps/Filter";
import { MainApi } from "../utils/data/constant";

const RegionDevices = () => {
  const [devices, setDevices] = useState([]); // Initialize to an empty array
  const getData = async () => {
    try {
      const response = await fetch(`${MainApi}device/region`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      const result = await response.json();
      if (result && result.data) {
        setDevices(result.data);
      } else {
        // Handle the case where data is not in the expected format or empty
        console.error("No data returned");
      }
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = async (event) => {
    try {
      const response = await fetch(
        `${MainApi}device/search?ref=${event.target.value}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const result = await response.json();
      if (result && result.data) {
        setDevices(result.data);
      } else {
        // Handle the case where data is not in the expected format or empty
        console.error("No data returned");
      }
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  };
  return (
    <Template>
      <h1 className="font-main text-4xl text-black font-bold pt-4 text-center">
        Welcome back, {`Walid Younes`}
      </h1>
      <p className="fs-3 my-3 fw-bold pl-8">Devices</p>
      <Filter handleSearch={handleSearch} />
      <div className="p-0 bg-white rounded-4 table-container">
        <table className="table table-hover custom-table">
          <thead>
            <tr>
              <th >id</th>
              <th >Ref</th>
              <th >Status</th>
              <th >Fire Detection</th>
              <th >Location</th>
            </tr>
          </thead>
          <tbody>
            {devices &&
              devices.map((device) => (
                <tr key={device.id}>
                  <th scope="row">{device.id}</th>
                  <td>{device.ref}</td>
                  <td className="text-success fw-bold">
                    {device.activeStatus ? "Active" : "Inactive"}
                  </td>
                  <td className="text-success fw-bold">
                    {device.supervision ? "Enabled" : "Disabled"}
                  </td>
                  <td>
                    <a href="#">view map</a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Template>
  );
};

export default RegionDevices;
