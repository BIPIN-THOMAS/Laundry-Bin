import React from "react";
import frame from '../assets/img3.png'
import { Link } from "react-router-dom";
import arrow from '../assets/arrow-left.svg'

function Login() {
  return (
    <div>
      <div className="login">
      <Link to="/log_reg">
      <img className="arrow" src={arrow} alt="" /></Link>

        <div className="heading-login">
          <h1>
          Welcome Back!<br></br> Glad To See you,Again !
        </h1>
        </div>

        <form className="log_form">
          <input
            type="text"
            id="email_or_phone"
            name="email_or_phone"
            placeholder="Enter Email  or Phone number"
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
          />

          <input type="submit" value="Log In" />
        </form>

        <Link to="/Forgot" className="forget_log">Forget password?</Link>
<div  className="registrationlink">
        <p className="Reg-link">
          Don't have an account?
          <Link className="reglink" to="/Registration">
              &nbsp;Register Now
          </Link>
        </p>
        </div>
        <img className="frame" src={frame} alt="" />
      </div>
    </div>
  );
}

export default Login;
