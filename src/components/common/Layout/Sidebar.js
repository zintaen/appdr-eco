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

function Siderbar() {
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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1" icon={<HomeOutlined />} className="title">
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<MessageOutlined />} className="title">
          Inquiry/Request
        </Menu.Item>
        <Menu.Item key="3" icon={<ShoppingCartOutlined />} className="title">
          Service purchase
        </Menu.Item>
        <Menu.Item key="4" icon={<FileDoneOutlined />} className="title">
          Approve
        </Menu.Item>
        <Menu.Item key="5" icon={<ContainerOutlined />} className="title">
          Request Status
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
export default Siderbar;
