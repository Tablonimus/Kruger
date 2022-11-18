import React from "react";

import { Link } from "react-router-dom";

import { messaging } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import AdminBar from "../NavBar/AdminBar";
import "./Home.css";
import ph1 from "../../assets/images/ph1.jpg";
import vac from "../../assets/images/vac.png";

export default function Home() {
  const navigate = useNavigate();
  // const loggedUser = JSON.parse(localStorage.getItem("loggeduser"));
  const loggedUser = useSelector(state=>state.loggedUser)
console.log(loggedUser);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <NavBar />

      {loggedUser[0]?.admin === true ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          SOY ADMIN {loggedUser[0]?.name}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5">
          {/* <button
            id="butt"
            className=" rounded-lg border border-black w-64 h-56 shadow-lg"
          >
            Edit Profile
          </button>
          <button className="bg-gray-200 rounded-lg border border-black w-64 h-56 shadow-lg">
            Get Vaccine
          </button> */}
        </div>
      )}

      {/* <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="featuredPropBox">
              <ul>
                <li>
                  {" "}
                  <a href="#">
                    <div class="fplogo">
                      <img src={vac} alt="fp1" className="w-96 h-" />
                    </div>
                    <div class="fptext">
                      <p className="italic">
                        Register your vaccinations against covid 19
                      </p>
                    </div>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <div class="fplogo">
                      <img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp2" />
                    </div>
                    <div class="fptext">
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
                    <div class="fplogo">
                      <img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp3" />
                    </div>
                    <div class="fptext">
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
      </div> */}
      {loggedUser[0]?.admin === true ? <AdminBar /> : false}
    </div>
  );
}
