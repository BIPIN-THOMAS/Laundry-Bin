import React from "react";
import { Link } from "react-router-dom";
import frame from '../assets/img3.png'
import arrow from '../assets/arrow-left.svg'

const Registration = () => {
  return (
    <div className="registration">
      
      <Link to="/log_reg">
      <img className="arrow" src={arrow} alt="" /></Link>

      <h1>
        Hay There !<br></br> welcome
      </h1>

      <form className="reg_form">
        <input type="text" id="name" name="name" placeholder="Enter name" />

        <input type="text" id="email_or_phone" name="email_or_phone" placeholder="Enter Email id or Phone number"/>

        <input type="password" id="password" name="password" placeholder="Enter Password"/>

        <input type="password" id="confirm_password" name="confirm_password" placeholder="Conform password"/>

        <input type="submit" value="Register" />
      </form>
<p className="login-link">Already have an account?  
    <Link className="link_login" to='/login'> Log In</Link>
</p>
<img className="frame" src={frame} alt="" />

    </div>
  );
};

export default Registration;
