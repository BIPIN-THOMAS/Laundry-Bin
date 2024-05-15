import React from "react";
import logo from "../assets/Group 1072.svg";
import signal from "../assets/react.svg";
import log from "../assets/Group 1145.png";
import signin from "../assets/Group 1144.png";
import { Link } from "react-router-dom";

const log_reg = () => {
  return (
    <div className="logreg_paje">
      <div className="loundrybin_img">
        <img className="img1" src={logo} alt="" />
        <h1 className="loundrybin_head">Launtrybin</h1>
      </div>

      <div className="logsign-button">
        <Link to="/login"><button className="loginBtn">Login</button></Link>
       <Link to="/registration"> <button className="logout">Sign Up</button></Link>
      </div>
    </div>
  );
};

export default log_reg;
