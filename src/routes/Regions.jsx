/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Template from "../comps/Template";
import Filter from "../comps/Filter";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../utils/slices/modalSlice";
import Modal from "../comps/Modal";
import { MainApi } from "../utils/data/constant";
const Regions = () => {
    const dispatch = useDispatch();
    const open = useSelector((state) => state.modal.open);
    const handleChange = async(event)=>{
      try {
        const response = await fetch(`${AdminApi}/region/${event.target.value}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
          },
        });
        const result = await response.json();
        if (result && result.data) {
          setRegions(result.data);
          }else{
            setRegions([])
          }
      } catch (err) {
        console.error('Failed to fetch data:', err);
      }
    }
  
    const [regions, setRegions] = useState([]); // Initialize to an empty array
    const getData = async () => {
      try {
        const response = await fetch(`${MainApi}region`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
          },
        });
        const result = await response.json();
        if (result && result.data) {
          setRegions(result.data);
        } else {
          // Handle the case where data is not in the expected format or empty
          console.error('No data returned');
        }
      } catch (err) {
        console.error('Failed to fetch data:', err);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  return (
    <Template>
      <div className="flex flex-col  ">
        <h1 className="font-main text-4xl text-black font-bold pt-4 text-center">
          Welcome back, {`Walid Younes`}
        </h1>
        <p className="fs-3 my-3 fw-bold pl-8">Regions</p>
        <Filter></Filter>
        <button className="self-end p-2 px-3 bg-green-500 text-white rounded text-xl mb-3 mr-7" onClick={()=> dispatch(openModal())}>
          Add region
        </button>
        </div>
        <div className="p-0 bg-white rounded-4 table-container">
        <table className="table table-hover custom-table">
          <thead>
          <tr>
              <th scope="col">Wilaya's Name</th>
              <th scope="col">Region</th>
              <th scope="col">Number of fires</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {regions.map((region) => (
            <tr key={region.id}>
              <th scope="row">{region.wilaya}</th>
              <td>{region.name}</td>
              <td className="">234</td>
              <td>
                <IoClose
                  color="red"
                  size={35}
                  className="ml-40 cursor-pointer"
                />
              </td>
            </tr>
          ))}
                  </tbody>
                  </table>
                  {open && <Modal></Modal>}
                  </div>
    </Template>
  );
};

export default Regions;
