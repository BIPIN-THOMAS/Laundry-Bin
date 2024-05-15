import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Link } from "react-router-dom";
import frame from "../assets/img3.png";
import arrow from "../assets/arrow-left.svg";
function Otpverify() {
  const [otp, setOtp] = useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return (
    <div className="forgot">
      <Link to="/login">
        <img className="arrow" src={arrow} alt="" />
      </Link>
      <div className="otpv_div">
        <h1>OTP Verification</h1>
        <p>
          Enter the verification code we just sent on <br />
          your email address
        </p>
        <MuiOtpInput
          value={otp}
          className="otp_inputs"
          onChange={handleChange}
        />
        {/* <p className="otpv_paragra">
        Don't receive OTP?{" "}
        <Link className="otpv_link" to="/otp">
          RESENT OTP
        </Link>
      </p> */}
        <form className="verifybtn">
          <input type="submit" value="Verify" />
        </form>

      </div>
        <p className="login_link">
          Don't receive code?
          <Link className="vlink_login" to="/login">
            Resend
          </Link>
        </p>

      <img className="frame" src={frame} alt="" />
    </div>
  );
}

export default Otpverify;
