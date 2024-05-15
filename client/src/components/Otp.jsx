import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Link } from "react-router-dom";
import frame from '../assets/img3.png'
import arrow from '../assets/arrow-left.svg'

function Otp() {
  const [otp, setOtp] = React.useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  return (
    <div className="otp">
      <Link to='/login'> <img className="arrow" src={arrow} alt="" /></Link>
      <div className="otp_div">
      <h1>
        We Have Sent<br></br> You An OTP
      </h1>
      <MuiOtpInput value={otp} className="otp_inputs" onChange={handleChange} />
      <p className="otpv_paragra">
        Don't receive OTP?{" "}
        <Link className="otpv_link" to="/otp">
          RESENT OTP
        </Link>
      </p>
      </div>

      <form className="reg_form">
        <input className="otpnxt_btn" type="submit" value="Next" />
      </form>
      <img className="frame" src={frame} alt="" />

    </div>
  );
}

export default Otp;
