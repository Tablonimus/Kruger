import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import AnimatedRoutes from "./AnimatedRoutes";

import Home from "./components/Home/Home";
import { AnimatePresence } from "framer-motion";
import Login from "./components/Login/Login";

// import { AuthProvider } from "./context/authContext";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import NavBar from "./components/NavBar/NavBar";
import AdminBar from "./components/NavBar/AdminBar";
import Employees from "./components/Employees/Employees";
import { useDispatch } from "react-redux";
import { getAllEmployees, getUserProfile, login } from "./redux/actions/index";
import CreateEmployee from "./components/Employees/CreateEmployee";
import { setAuthToken } from "./components/BrowserHistory/setAuthToken";

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
      {/* <AuthProvider> */}

      <Routes /* location={location} key={location.pathname} */>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

        <Route path="/employees" element={<Employees />} />
        <Route path="/create" element={<CreateEmployee />} />
      </Routes>
      <Routes></Routes>

      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;
