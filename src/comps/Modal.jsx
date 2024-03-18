import React from "react";
import Wilaya from "./Wilayas";
import { IoClose } from "react-icons/io5";
import { useClickAway } from "@uidotdev/usehooks";
import { closeModal } from "../utils/slices/modalSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  const ref = useClickAway(() => {
    dispatch(closeModal());
  });
  return (
    <div className="">
      <div className="top-0 left-0 h-screen w-screen fixed m-0 bg-[rgba(20,20,20,0.25)]" onClick={()=> dispatch(closeModal())}></div>
        <form className="z-50 top-[21%] left-[40%] fixed rounded flex flex-col bg-[#D9D9D9] w-[30%] px-4 py-4 gap-2">
          <IoClose
            size={35}
            className="self-end cursor-pointer"
            onClick={() => dispatch(closeModal())}
          />{" "}
          <label htmlFor="wilaya" className="text-xl font-bold text-black">
            Choose Wilaya
          </label>
          <Wilaya />
          <label htmlFor="region" className="text-xl font-bold text-black">
            Region
          </label>
          <input
            type="text"
            name="region"
            id="region"
            placeholder="Region"
            className="p-2"
          />
          <label htmlFor="firesnum" className="text-xl font-bold text-black">
            Number of Fires
          </label>
          <input
            type="number"
            name="firesnum"
            id="firesnum"
            placeholder="0"
            className="p-2"
          />
          <button className=" p-2 w-[30%] bg-green-500 text-white rounded text-xl self-center">
            Add
          </button>
        </form>
    </div>
  );
};

export default Modal;
