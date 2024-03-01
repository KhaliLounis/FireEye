import React from "react";
import Template from "../comps/Template";
import Filter from "../comps/Filter";
import { IoClose } from "react-icons/io5";

const Users = () => {
  return (
    <Template>
      <div className="flex flex-col  ">
        <h1 className="font-main text-4xl text-black font-bold pt-4 text-center">
          Welcome back, {`Walid Younes`}
        </h1>
        <p className="fs-3 my-3 fw-bold pl-8">Users</p>
        <Filter></Filter>
        <button className="self-end p-2 px-3 bg-green-500 text-white rounded text-xl mb-3 mr-7">
          Add user
        </button>
      </div>
      <div className="p-0 bg-white rounded-4 table-container">
        <table className="table table-hover custom-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone number</th>
              <th scope="col">Email</th>
              <th scope="col">Region</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Walid Younes</th>
              <td>056678723</td>
              <td className="">bidawalid@gmail.com</td>
              <td className="">Alger</td>
              <td>
                <IoClose
                  color="red"
                  size={30}
                  className="ml-20 cursor-pointer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Template>
  );
};

export default Users;
