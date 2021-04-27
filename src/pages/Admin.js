import { Layout, Menu, Progress, Row, Col, Steps, Card, Tabs } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  UserOutlined,
  FileDoneOutlined,
  ContainerOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import "./Admin.scss";

const { Header, Content, Footer, Sider } = Layout;
const { Step } = Steps;
const { TabPane } = Tabs;

function Admin() {
  const status_1 = [
    {
      title: "Proceeding",
      time: "28 hours",
      percent: 35,
      color: "blue",
    },
    {
      title: "Complete complete",
      time: "456 hours",
      percent: 85,
      color: "yellow",
    },
    {
      title: "Remaining time",
      time: "12 hours",
      percent: 25,
      color: "green",
    },
  ];

  const issueLeft = [
    {
      background: "blue",
      button: "Issue,3461",
      content: "Android source analysis",
      time: "32h",
    },
    {
      background: "green",
      button: "Issue,3465",
      content: "Android-Build connection between prodiction and test server",
      time: "3 p.m.",
    },
    {
      background: "blue",
      button: "Issue,3461",
      content: "Android source analysis",
      time: "32h",
    },
    {
      background: "green",
      button: "Issue,3465",
      content: "Android-Build connection between prodiction and test server",
      time: "3 p.m.",
    },
  ];

  const issueRight = [
    {
      background: "blue",
      button: "Issue,3461",
      content: "Ándroid source ânlýys",
      day: "2019.09.04",
      time: "32h",
      developer: "green",
    },
    {
      background: "green",
      button: "Issue,3461",
      content: "Ándroid source ânlýys",
      day: "2019.09.04",
      time: "3 p.m.",
      developer: "gray",
    },
    {
      background: "blue",
      button: "Issue,3461",
      content: "Ándroid source ânlýys",
      day: "2019.09.04",
      time: "32h",
      developer: "green",
    },
    {
      background: "green",
      button: "Issue,3461",
      content: "Ándroid source ânlýys",
      day: "2019.09.04",
      time: "3 p.m.",
      developer: "gray",
    },
  ];

  const newsRight = [
    { image: "..", title: "a", content: "b" },
    { image: "..", title: "a", content: "b" },
  ];

  return (
    <Layout className="layout">
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
      <Layout className="site-layout">
        <Header className="site-header" />
        <Content className="site-content">
          <div className="service-progress-status">
            <div className="service-1">
              <div className="status">Service progress status</div>
              {status_1.map((item) => (
                <div className={`status-progress text-center ${item.color}`}>
                  <div className="title">{item.title}</div>
                  <div className="time">{item.time}</div>
                  <Progress showInfo={false} percent={item.percent}></Progress>
                </div>
              ))}
            </div>
            <div className="service-2 text-center">
              The coupon validity period (~ March 10,2020) is naering.
            </div>
            <div className="service-3 text-center">
              <Row gutter={12}>
                <Col span={8}>
                  <div className="yellow big">Card content</div>
                </Col>
                <Col span={8}>
                  <div className="gray big">Card content</div>
                </Col>
                <Col span={8}>
                  <div className="gray big">Card content</div>
                </Col>
              </Row>
            </div>
            <div className="service-4">
              <div className="title">
                When making inquiries to App Doctor, the process follows
              </div>
              <div class="progress">
                <div class="progress-track"></div>
                <div class="progress-step step-1">Inqui/Request</div>
                <div class="progress-step step-2">Request analysis</div>
                <div class="progress-step step-3">Waiting for approval</div>
                <div class="progress-step step-4">Developer</div>
                <div class="progress-step step-5">Proceeding</div>
                <div class="progress-step step-6">Developerment completed</div>
                <div class="progress-step step-7">Customer inspection</div>
                <div class="progress-step step-8">End of development</div>
              </div>
            </div>
          </div>
          <div className="issues">
            <div className="left">
              <Tabs
                defaultActiveKey="1"
                tabBarExtraContent={
                  <button className="button-left">Going to approve</button>
                }
              >
                <TabPane tab="Pending approval issue 5 Articles">
                  {issueLeft.map((item) => (
                    <div className={`block ${item.background}`}>
                      <div className="block-left">
                        <button class="btn-green">{item.button}</button>
                        <span class="content">{item.content}</span>
                      </div>
                      <span class="time">{item.time}</span>
                    </div>
                  ))}
                </TabPane>
              </Tabs>
            </div>
            <div className="right">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Ongoing Issue 14 Articless">
                  {issueRight.map((item) => (
                    <div className={`block ${item.background}`}>
                      <div className="developer">
                        Developer <span className={item.developer}></span>
                      </div>
                      <div className="info">
                        <div className="block-left">
                          <button class="btn-blue">{item.button}</button>
                          <span class="content">{item.content}</span>
                        </div>
                        <div className="block-right">
                          <span class="day">{item.day}</span>
                          <span class="time">{item.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div className="recent-inquiries">
            <Card
              title="Pending approval issue 5 Articles"
              extra={<a href="#">More</a>}
            >
              <div className="content">
                <div className="left">1</div>
                <div className="right">
                  <div className="day">2019.12.12</div>
                  <div className="person">aaa</div>
                </div>
              </div>
              <div className="content">
                <div className="left">1</div>
                <div className="right">
                  <div className="day">2019.12.12</div>
                  <div className="person">aaa</div>
                </div>
              </div>
              <div className="content">
                <div className="left">1</div>
                <div className="right">
                  <div className="day">2019.12.12</div>
                  <div className="person">aaa</div>
                </div>
              </div>
            </Card>
          </div>
          <div className="news">
            <Card title="Default size card" extra={<a href="#">More</a>}>
              <div className="left">
                <img className="image" src="" alt="news" />
                <div className="info">
                  <div className="title">1</div>
                  <div className="content">2</div>
                  <div className="view-more">2</div>
                </div>
              </div>
              <div className="right">
                {newsRight.map((item) => (
                  <>
                    <img className="image" src={item.image} alt="news" />
                    <div className="info">
                      <div className="title">{item.title}</div>
                      <div className="content">{item.content}</div>
                    </div>
                  </>
                ))}
              </div>
            </Card>
          </div>
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
export default Admin;
