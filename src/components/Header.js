import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { useState } from "react";
import { Link} from "react-router-dom";

const Header = () => {
  let [isloggedIn, setIsloggedIn] = useState(true);
  // Function to handle the click event
  const handleLogoutClick = (e) => {
    e.preventDefault();  // Prevents the default anchor behavior
    console.log("clicked",e);
  };
  return (
    
    <div className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
          </li>
          <li>
            <Link to = "/contact">Contact US</Link>
          </li>
          <li>
            <Link to = "#" >Cart</Link>
          </li>
          <li>
            <a type="button" onClick={()=>{setIsloggedIn(!isloggedIn); }}>{isloggedIn ? 'Login' :'Logout'}</a>
          </li>
        </ul>
        <div className="navbar-profile">
          <img src={user} alt="Profile" className="profile-img" />
          {/* <div className="dropdown">
            <button className="dropdown-toggle">▼</button>
            <div className="dropdown-menu">
              <Link to = "#">Profile</Link>
              <Link to = "#">Notification</Link>
              <Link to = "#">Logout</Link>
            </div>
          </div> */}
        </div>
       
      </nav>
    </div>
  );
};

export default Header;
