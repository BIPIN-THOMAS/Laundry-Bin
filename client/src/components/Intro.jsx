import React from "react";
import groupimg from "../assets/Group 1139.png";
import washing from "../assets/image 2.png";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="intro_paje">
      <Link to="/log_reg" className="skip">skip</Link>

      <div className="grpimg">
        <img src={groupimg} alt="" />
      </div>

      <div>
        <p className="paraone">Get your Laundry and<div></div> Dry cleaning in 24 hours</p>

        <p className="paratwo">
          A convenient laundry solution that<div></div> helps protect the enviornment
        </p>
      </div>

      <div className="wash">
        <img className="washing_img" src={washing} alt="" />
      </div>
    </div>
  );
}

export default Intro;
