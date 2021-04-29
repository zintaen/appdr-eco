import { Layout } from "antd";
import "./Header.scss";

import adminImages from "../../../assets/images/178869519_512314656431847_8367906319180232373_n.jpg";

const { Header } = Layout;

function Head() {
  return (
    <Header className="site-header">
      <img className="avt-image" src={adminImages} alt="news" />
    </Header>
  );
}
export default Head;
