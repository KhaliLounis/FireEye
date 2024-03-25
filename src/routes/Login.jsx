import React, { useEffect, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, userLogin } from "../utils/slices/authSlice";
import fireeye from "../assets/fireeye.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(true);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return;
    }
    if (user) {
      dispatch(adminLogin({ email, password }));
    } else {
      dispatch(userLogin({ email, password }));
    }
    console.log(isAuthenticated)
    // if (isAuthenticated===true) {

      navigate("/dashboard");
    // }

  };

  return (
    <div className="h-screen bg-[url('/fire_bg.svg')] bg-center flex flex-col overflow-hidden">
      <div>
        <img
          src={fireeye}
          alt="fireeye"
          className="self-center mt-10 ml-10"
        />
      </div>
      <div className="p-8 flex flex-col justify-around self-center">
        <p className="font-semibold font-main text-white text-3xl opacity-55 my-3 self-center max-md:text-xl">
          Start for Free
        </p>
        <h1 className="text-5xl font-extrabold font-main text-white my-3 max-md:text-3xl">
          Login as an {user ? "Administrator" : "Employee"}
        </h1>
        <form className="flex flex-col" onSubmit={handleLogin}>
          <div className="relative my-3 self-center">
            <input
              required
              type="email"
              id="email"
              className="bg-[#80808061] indent-2 pr-24 py-3 rounded outline-blue-600 text-white"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label
              className={`absolute left-2 top-3 text-[#FFFFFF66] cursor-text font-semibold w-5 ${
                email && "-top-[7px]"
              }`}
              htmlFor="email"
            >
              Email
            </label>
            <MdOutlineMailOutline
              className="absolute right-2 top-3"
              size={25}
              color="white"
            />
          </div>
          <div className="relative my-3 self-center">
            <input
              required
              type={show ? "text" : "password"}
              id="password"
              className="bg-[#80808061] rounded text-white pr-24 indent-2 py-3 outline-blue-600"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label
              className={`absolute left-2 top-3 text-[#FFFFFF66] cursor-text font-semibold w-5 ${
                password && "-top-[7px]"
              }`}
              htmlFor="password"
            >
              Password
            </label>
            {show ? (
              <FaRegEyeSlash
                onClick={() => setShow(!show)}
                className="absolute right-2 top-3 cursor-pointer"
                size={25}
                color="white"
              />
            ) : (
              <FaRegEye
                onClick={() => setShow(!show)}
                className="absolute right-2 top-3 cursor-pointer"
                size={25}
                color="white"
              />
            )}
          </div>
          <div className="self-center flex flex-col">
            <button className="text-white bg-[#1D40F5] p-2 w-32 rounded my-3 self-center">
              Login
            </button>
          </div>
        </form>
        <div className="self-center">
          <p className={`font-semibold font-main text-white text-2xl opacity-55 my-3`}>
            {" "}
            Are you a {user ? "Employee" : "Administrator"}?{" "}
            <span
              onClick={() => {setUser(!user); setEmail(""); setPassword("")}}
              className="font-semibold text-2xl text-[#1D40F5] cursor-pointer"
            >
              {" "}
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
