import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import frame from "../assets/img3.png";
import arrow from "../assets/arrow-left.svg";

const Registration = () => {
  const [name, setName] = useState("");
  const [emlorphnno, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!emlorphnno.trim()) {
      errors.emlorphnno= "Email or phone number is required";
    } else if (
      !/\S+@\S+\.\S+/.test(emlorphnno) &&
      !/^\d{10}$/.test(emlorphnno)
    ) {
      errors.emlorphnno = "Enter a valid email or 10-digit phone number";
    }

    if (!password) {k
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      console.log(name, emlorphnno, password);
      const result = await axios.post("http://localhost:3033/register", {
        name,
        emlorphnno,
        password,
      });
      if (result.status === 200) {
        alert("Registration successful!");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="registration">
      <Link to="/log_reg">
        <img className="arrow" src={arrow} alt="Go back" />
      </Link>

      <h1>
        Hey There!<br /> Welcome
      </h1>

      <form className="reg_form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Name"
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <input
          type="text"
          id="emailOrPhone"
          name="emailOrPhone"
          placeholder="Enter Email or Phone number"
          value={emlorphnno}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          aria-label="Email or Phone number"
        />
        {errors.emlorphnno && <div className="error">{errors.emlorphnnoe}</div>}

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
        {errors.password && <div className="error">{errors.password}</div>}


        <input
          type="password"
          id="forget_password"
          name="forget_password"
          placeholder="Enter the Forget Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"></input>


        

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      
      <p className="login-link">
        Already have an account?
        <Link className="link_login" to="/login">
          Log In
        </Link>
      </p>
      
      <img className="frame" src={frame} alt="Decoration" />
    </div>
  );
};

export default Registration;
