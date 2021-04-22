import { Link } from "react-router-dom";
import { Menu } from "antd";

import "./Navigation.scss";

import logoWhite from "../../assets/images/logo.png";
import logoBlack from "../../assets/images/logo_dark.png";

function Navigation({ color }) {
  return (
    <Menu className={`navigation ${color}`}>
      <img
        alt="logo"
        className="logo"
        src={color === "black" ? logoWhite : logoBlack}
      />
      <div className="link-container">
        <a href="#home" className="link">
          HOME
        </a>
        <a href="#about" className="link">
          ABOUT
        </a>
        <a href="#how-it-works" className="link">
          HOW IT WORKS
        </a>
        <a href="#price" className="link">
          PRICE
        </a>
        <a href="#contact-us" className="link">
          CONTACT US
        </a>
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </div>
    </Menu>
  );
}
export default Navigation;
