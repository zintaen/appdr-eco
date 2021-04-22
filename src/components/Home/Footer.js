import "./Footer.scss";

import logoWhite from "../../assets/images/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="content">
        <div className="bold">
          MOBILE APP SPECIALIST <br /> APP-DOCTOR
        </div>
        <div className="small">
          1103 Space-e-room, 11F, Bussiness Tower, 396, World Cup buk-ro,
          Mapo-gu, Seoul, South Korea (03925) <br /> Tel 82-2-6490-1770 E-mail
          info@appdr.co.kr
        </div>
        <div className="logo"></div>
      </div>
      <div className="border"></div>
      <div className="small right">
        &copy; 2019 APP DOCTOR. All Rights Reserved
      </div>
    </div>
  );
}
export default Footer;
