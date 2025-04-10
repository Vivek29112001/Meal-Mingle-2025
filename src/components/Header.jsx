import { LOGO_URL } from "../utils/contants";
import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import Grocery from './Grocery/Grocery.jsx'; // Corrected import
import UserContext from "../utils/UserContext.jsx"; // Corrected import

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus(); // Custom hook

const {loggedInUser}  = useContext(UserContext);
console.log("UserContext data:", loggedInUser); // Log the context data

  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <div className="flex-shrink-0">
        <img className="h-10 w-auto" src={LOGO_URL} alt="CraveNest-Logo" />
      </div>
      <div className="flex items-center space-x-6">
        <ul className="flex items-center space-x-4">
          <li>
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li>
            <Link to="/grocery" className="hover:text-blue-500">Grocery</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">About us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
          </li>
          <li className="px-4">Card</li>
          <button
          className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600"
          onClick={() => setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
        >
          {btnNameReact}
        </button>
        <li className="px-4 font-bold text-lg">
          {loggedInUser}

        </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;