import React from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import add from "../../assets/images/add.png";
import list from "../../assets/images/list.png";

export default function AdminBar() {
  const navigate = useNavigate();

  // const loggedstate = useSelector(state => state.loggedUser)
  // const loggedUser = loggedstate[0]
  // console.log("estado global", loggedUser);
  const loggedUser = JSON.parse(localStorage.getItem("loggeduser"));

  function signOutHandler() {
    localStorage.removeItem("loggeduser");
    navigate("/login");
  }

  return (
    <div className="bg-amber-600 h-24 w-screen flex   items-center justify-center fixed bottom-0 rounded-t-lg gap-2 ">
      <Link to="/create" className="h-full hover:bg-gray-200 flex flex-col items-center justify-center font-bold ">
        <img src={add} alt="" />
        Add 
      </Link>
      <Link to="/employees"className="h-full hover:bg-gray-200 flex flex-col items-center justify-center font-bold">
        <img src={list} alt="" className="" />
       Employees
      </Link>
    </div>
  );
}