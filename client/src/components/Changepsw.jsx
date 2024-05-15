import React from "react";
import stylimg from "../assets/Sticker.png";
import frame from "../assets/img3.png";
import arrow from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const Changepsw = ()=> {
  return (
    <div className="chgpsw">
      <Link to="/newpass">
        <img className="arrow" src={arrow} alt="" />
      </Link>

      <div className="styleimg">
        <img src={stylimg} alt="" />
      </div>

      <div>
        <h1>Password changed</h1>

        <p>
          Your Password has been <br></br>changed successfully
        </p>
      </div>

      <form action="backlogin">
        <Link to="/login" className="lastbtn" >Back To Login</Link>
      </form>
      <img className="frame" src={frame} alt="" />

    </div>
    
  );
}

export default Changepsw;
