import { Layout } from "antd";
import "./Header.scss";

const { Header } = Layout;

function Head() {
  return (
    <Header className="site-header">
      <div className="logo-admin"></div>
    </Header>
  );
}
export default Head;
