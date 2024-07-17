import React from "react";
import propic from "../assets/im1.png";
import home from "../assets/house.png";
import arrowdown from "../assets/arrow-down.png";
import offertag from "../assets/imgg6.png";
import ruppy1 from "../assets/rupa1.png";
import ruppy2 from "../assets/rupa2.png";
import imaje3 from "../assets/im3.png";
import imaje4 from "../assets/im4.png";
import imaje5 from "../assets/im5.png";
import imaje6 from "../assets/img6.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Profile() {
  return (
    <div className="home">
      <div className="add">
        <p className="pheading">Hello John Doe</p>

        <div className="address">
          <img className="homeimg" src={home} alt="" />
          <p className="adressfond">Westhills,Calicut</p>
          <img className="arrowimg" src={arrowdown} alt="" />
        </div>
      </div>

      <div class="offersection">
        <div className="propicdiv">
          <img className="propicimg" src={propic} alt="" />
        </div>

        <div className="offerdiv">
          <img className="offerimg" src={offertag} alt="" />
          <p className="offerdivp">Offers</p>
        </div>

        <div className="offerinnerdiv">
          <div className="offdiv">
            <p>
              Free delivery on every order for <br />6 months
            </p>
            <img src={ruppy2} alt="" />
          </div>

          <div className="offdiv">
            <p>
              Free delivery on every order for <br />3 months
            </p>
            <img src={ruppy1} alt="" />
          </div>

          <div className="offdiv">
            <p>
              Free delivery on every order for <br />6 months
            </p>
            <img src={ruppy2} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="imaje-container">
        <div className="imgdiv">
          <img src={imaje3} alt="img3"></img>
        </div>

        <div className="imgdiv">
        <img src={imaje4} alt="img4"></img>
        </div>

        <div className="imgdiv">
        <img src={imaje5} alt="img5"></img>
        </div>

        <div className="imgdiv">
        <img src={imaje6} alt="img6"></img>
        </div>
      </div> */}
      
    </div>
  );
}

export default Profile;
