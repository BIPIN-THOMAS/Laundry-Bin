import React from "react";
import frame from "../assets/img3.png";
import arrow from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

function Newpass() {
  return (
    <div className="newpassword">
      <Link to="/otpverify">
        <img className="arrow" src={arrow} alt="" />
      </Link>

      <div className="headings_pass">
        <h1 className="forgot_head">Create New Password</h1>
        <p className="otp_para">
          Your new password must be unique from<br></br>those previously used.
        </p>
      </div>

      <form className="newpass">
        <input
          type="text"
          id="email_or_phone"
          name="email_or_phone"
          placeholder="Enter Email new password"
        />
        <input
          type="text"
          id="email_or_phone"
          name="email_or_phone"
          placeholder="Conform password"
        />

        <input className="btn1" type="submit" value="Reset Password" />
      </form>
      <p className="newpaspara">Don't receive code? Resent</p>
      <img className="frame" src={frame} alt="" />
    </div>
  );
}

export default Newpass;
