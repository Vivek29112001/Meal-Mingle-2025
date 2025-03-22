import { LOGO_URL } from "../utils/contants";
const Header = () => {
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
          </ul>
        </div>
      </div>
    )
  }

  export default Header;