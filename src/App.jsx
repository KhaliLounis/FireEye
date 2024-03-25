/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import Devices from "./routes/Devices";
import Users from "./routes/Users";
import Alerts from "./routes/Alerts";
import Regions from "./routes/Regions";
import { useSelector } from "react-redux";
const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router>
      {/* {isAuthenticated ? ( */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/users" element={<Users />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/regions" element={<Regions />} />
        </Routes>
      {/* ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/*"
            element={
              <h1 className="font-bold text-center font-main text-5xl">
                The requested URL doesn't exist.
                <br /> 404 Not Found.
              </h1>
            }
          />
        </Routes>
      )} */}
    </Router>
  );
};

export default App;
