import { React, useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  function handleChange({ target: { name, value } }) {
    setUser({ ...user, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      // await login(user.email, user.password);
      if (!e.target.checkValidity()) {
        console.log("review input data");
      } else {
        dispatch(login(user));

        setTimeout(() => navigate("/home"), [2000]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-96 bg-blue-500 flex items-center justify-center rounded-lg shadow-lg">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center justify-center"
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youremail@company.com"
          name="email"
          id="email"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          id="password"
          onChange={(e) => handleChange(e)}
        />

        <button>Login</button>
      </form>
    </div>
  );
}
