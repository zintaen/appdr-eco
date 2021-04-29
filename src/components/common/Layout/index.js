import { Layout } from "antd";

import Header from "./Header";
import Sidebar from "./Sidebar";

function Mainlayout({ children, route }) {
  return (
    <Layout className="layout">
      <Sidebar route={route} />
      <Layout className="site-layout">
        <Header />
        {children}
      </Layout>
    </Layout>
  );
}
export default Mainlayout;
