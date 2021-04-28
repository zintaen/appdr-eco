import { Layout } from "antd";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Mainlayout({ children }) {
  return (
    <Layout className="layout">
      <Sidebar />
      <Layout className="site-layout">
        <Header />
        {children}
        <Footer />
      </Layout>
    </Layout>
  );
}
export default Mainlayout;
