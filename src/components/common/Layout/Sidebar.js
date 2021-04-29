import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  FileDoneOutlined,
  ContainerOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import "./Sidebar.scss";

const { Sider } = Layout;

function Siderbar({ route }) {
  return (
    <Sider className="sider" width={240}>
      <div className="yellow">
        <div className="logo"></div>
      </div>
      <div className="user">
        <span className="icon">
          <UserOutlined />
        </span>
        <span className="name">Kildong Hong</span>
      </div>
      <div className="html text-center">
        HTML publishing <br /> quick quote system
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[route]}>
        <Menu.Item key="dashboard" icon={<HomeOutlined />} className="title">
          <Link to="/dashboard" className="link">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item
          key="inquiry-request"
          icon={<MessageOutlined />}
          className="title"
        >
          <Link to="/404" className="link">
            Inquiry/Request
          </Link>
        </Menu.Item>
        <Menu.Item
          key="service-purchase"
          icon={<ShoppingCartOutlined />}
          className="title"
        >
          <Link to="/service-purchase" className="link">
            Service purchase
          </Link>
        </Menu.Item>
        <Menu.Item key="approve" icon={<FileDoneOutlined />} className="title">
          <Link to="/404" className="link">
            Approve
          </Link>
        </Menu.Item>
        <Menu.Item
          key="reaquest-status"
          icon={<ContainerOutlined />}
          className="title"
        >
          <Link to="/404" className="link">
            Request Status
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
export default Siderbar;
