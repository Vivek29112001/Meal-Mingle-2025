import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState("Login")


  return (
    <div className='header'>
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="CraveNest-Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us </li>
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