import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";


import Employees from "./components/Employees/Employees";
import { useDispatch } from "react-redux";
import { getAllEmployees, getUserProfile, login } from "./redux/actions/index";
import CreateEmployee from "./components/Employees/CreateEmployee";
import { setAuthToken } from "./components/BrowserHistory/setAuthToken";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home"

function App() {
  //const location = useLocation();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  console.log("TOKEN", token);
  if (token) {
    setAuthToken(token);
  }
  const id = localStorage.getItem("id");

  useEffect(() => {
    dispatch(getAllEmployees());
    dispatch(getUserProfile(id));
  }, [dispatch]);

  return (
    <BrowserRouter>
  

      <Routes /* location={location} key={location.pathname} */>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/create" element={<CreateEmployee />} />
      </Routes>


 
    </BrowserRouter>
  );
}

export default App;
