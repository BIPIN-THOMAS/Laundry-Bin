import React from "react";
import frame from "../assets/img3.png";
import arrow from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const forgot = () => {
  return (
    <div className="forgot">
      <Link to="/otp">
        <img className="arrow" src={arrow} alt="" />
      </Link>

      <div className="headings">
        <h1 className="forgot_head">Forgot Password?</h1>
        <p className="otp_para">
          Don't worry! it occurs.Please enter the <br></br>email or phone number
          linked with your<br></br> account.
        </p>
      </div>

      <form className="forgot">
        <input
          type="text"
          id="email_or_phone"
          name="email_or_phone"
          placeholder="Enter Email id or Phone number"
        />

        <input className="btn1" type="submit" value="Send OTP" />
      </form>
      <Link to="Login" className="newpaspara">Remember password? Log In</Link>
      <img className="frame" src={frame} alt="" />
    </div>
  );
};

export default forgot;
