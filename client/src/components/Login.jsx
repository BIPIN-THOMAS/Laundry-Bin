import frame from "../assets/img3.png";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../assets/arrow-left.svg";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emlorphnno, setEmailorPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      console.log(emlorphnno, password);
      const result = await axios.post(
        "http://localhost:3033/login",
        { emlorphnno, password },
        { headers }
      );

      //pop up login
      if (result.status === 200) {
        alert("login successful!");
        console.log("Login successful");
        navigate("/Homepage")
      }

      // console.log(result);
      // navigate("/realHome");
    } catch (err) {
      console.console.error(err);
    }
  };

  return (
    <div>
      <div className="login">
        <Link to="/log_reg">
          <img className="arrow" src={arrow} alt="" />
        </Link>

        <div className="heading-login">
          <h1>
            Welcome Back!<br></br> Glad To See you,Again !
          </h1>
        </div>

        <form className="log_form">
          

          <input
          type="text"
          id="emlorphnno"
          name="emlorphnno"
          placeholder="Enter Email id or Phone number"
          onChange={(e) => setEmailorPhone(e.target.value)}
        />

          
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter  your Password"
          onChange={(e) => setPassword(e.target.value)}
        />


         
          <button  type="submit" className="login-button" value="Login" onClick={handleSubmit}  >Login</button>  

            
        </form>

        <Link to="/Forgot" className="forget_log">
          Forget password?
        </Link>
        <div className="registrationlink">
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
};

export default Login;
