import { React, useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

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
    setError("")
    try {
      await signUp(user.email, user.password)
      navigate("/");
    } catch (error) {
      console.log(error);
    
    }
  }

  return (
    <div>
      {error ? (
        <span>La contraseña debe tener al menos 7 caracteres</span>
      ) : (
        false
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="mail@tumail.com"
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

        <button>Register</button>
      </form>
    </div>
  );
}
