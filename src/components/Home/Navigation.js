import { Menu } from "antd";

import "./Navigation.scss";

import logoWhite from "../../assets/images/logo.png";
import logoBlack from "../../assets/images/logo_dark.png";

function Navigation({ color }) {
  return (
    <Menu className={`navigation ${color}`}>
      <img className="logo" src={color === "black" ? logoWhite : logoBlack} />
      <div className="link-container">
        <a href="#home" className="link">
          HOME
        </a>
        <a href="#about" className="link about">
          ABOUT
        </a>
        <a href="#how-it-works" className="link about">
          HOW IT WORKS
        </a>
        <a href="#price" className="link about">
          PRICE
        </a>
        <a href="#contact-us" className="link about">
          CONTACT US
        </a>
        <a href="#" className="link about">
          LOGIN
        </a>
      </div>
    </Menu>
  );
}
export default Navigation;
