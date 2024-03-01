/* eslint-disable react/jsx-key */
import React from "react";
import { GiDeliveryDrone } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Search = (props) => {

  return (
    <form method="Post"  className="searchForm relative">
        <input className="bg-[#D9D9D9] p-2 search-input rounded"   type="text" placeholder="Search..." onChange={(event) => props.handleSearch(event)}/>
        <CiSearch size={25} className="absolute top-1 end-1    "/>
    </form>
  );
};

export default Search;