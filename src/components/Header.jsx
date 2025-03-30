import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState("Login")


  return (
    <div className='header'>
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="CraveNest-Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              About us
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              Contact Us
            </Link>
          </li>
          <li>Card</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header;