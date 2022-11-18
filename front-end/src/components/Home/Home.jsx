import React from "react";

import { Link } from "react-router-dom";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import AdminBar from "../NavBar/AdminBar";
import "./Home.css";

import vac from "../../assets/images/vac.png";

export default function Home() {
  const navigate = useNavigate();
  // const loggedUser = JSON.parse(localStorage.getItem("loggeduser"));
   const loggedUser = useSelector(state=>state.loggedUser)

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <NavBar />
{loggedUser.name}
      {/* {loggedUser[0]?.admin === true ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          SOY ADMIN {loggedUser[0]?.name}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5">
          <button
            id="butt"
            className=" rounded-lg border border-black w-64 h-56 shadow-lg"
          >
            Edit Profile
          </button>
          <button className="bg-gray-200 rounded-lg border border-black w-64 h-56 shadow-lg">
            Get Vaccine
          </button>
        </div>
      )} */}

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="featuredPropBox">
              <ul>
                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                      <img src={vac} alt="fp1" className="w-96 h-" />
                    </div>
                    <div className="fptext">
                      <p className="italic">
                        Register your vaccinations against covid 19
                      </p>
                    </div>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                      <img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp2" />
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                      <img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp3" />
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    {  loggedUser?.admin === true? <AdminBar/>:false}
    </div>
  );
}
