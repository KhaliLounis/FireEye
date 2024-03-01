/* eslint-disable react/jsx-key */
import React from "react";
import Search from "./Search";
import Wilaya from "./Wilayas";

const Filter = (props) => {

  return (
    <div className="d-flex justify-content-between bg-white rounded-3 shadow filter p-3  my-4 mb-5">
        <Search action={props.action}/>
        <Wilaya/>
    </div>
  );
};

export default Filter;