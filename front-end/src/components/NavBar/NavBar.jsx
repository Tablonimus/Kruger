import React from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import redcross from "../../assets/images/redcross.jpg";

import sett from "../../assets/images/sett.png";

export default function NavBar() {
  const navigate = useNavigate();

  const loggedUser = useSelector((state) => state.loggedUser);

  function signOutHandler() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/");
  }

  return (
    <Navbar fluid={true} rounded={true} className="w-screen fixed top-0">
      <Navbar.Brand href="">
        <img src={redcross} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Covid19-App
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={true}
          inline={true}
          label={<Avatar alt="User settings" img={sett} rounded={true} />}
        >
          <Dropdown.Header>
            <span className="block text-sm">{loggedUser.name}</span>
            <span className="block truncate text-sm font-medium">
              {loggedUser.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={signOutHandler}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/home">Home</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
