import { Layout, Progress, Row, Col, Button, Tabs, Card } from "antd";
import { RightCircleFilled } from "@ant-design/icons";

import leftImages from "../assets/images/main-new.png";
import rightImagestop from "../assets/images/sub-new.png";
import rightImagesbottom from "../assets/images/sub-new.png";

import "./Dashboard.scss";
import { useState } from "react";

import Mainlayout from "../components/common/Layout";

const { Content } = Layout;
const { TabPane } = Tabs;

function ViewMore() {
  return (
    <Button>
      View more
      <RightCircleFilled />
    </Button>
  );
}

function Dashboard({ route }) {
  const [tab, setTab] = useState({ key: "tab1" });

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
      content: "Server-Comment feature update",
      day: "2019.09.04",
      time: "32h",
      developer: "green",
    },
    {
      background: "green",
      button: "Issue,3461",
      content:
        "Server-Kakao Talk sharing function update of detailed page screen map",
      day: "2019.09.04",
      time: "3 p.m.",
      developer: "gray",
    },
    {
      background: "blue",
      button: "Issue,3461",
      content: "Server-Comment feature update",
      day: "2019.09.04",
      time: "32h",
      developer: "green",
    },
    {
      background: "green",
      button: "Issue,3461",
      content:
        "Server-Kakao Talk sharing function update of detailed page screen map",
      day: "2019.09.04",
      time: "3 p.m.",
      developer: "gray",
    },
  ];

  const newsLeft = [
    {
      image: leftImages,
    },
  ];

  const newsRight = [
    {
      image: rightImagestop,
      title:
        "App Doctor Seok-gyun Heo,CEO,Bitna Kim,General Manager [Asan Nanum Foundation/MARU180] Interview News!!",
      content:
        "Good morning. This is App Doctor. Today's news is aninterview conducted by the Asan NanumFoundation/MARU180. The protagonists of this interview are Seok-gyun Heo, CEO of App Doctor, and Bitna Kim of App Doctor",
    },
    {
      image: rightImagesbottom,
      title:
        "App Doctor Seok-gyun Heo,CEO,Bitna Kim,General Manager [Asan Nanum Foundation/MARU180] Interview News!!",
      content:
        "Good morning. This is App Doctor. Today's news is aninterview conducted by the Asan NanumFoundation/MARU180. The protagonists of this interview are Seok-gyun Heo, CEO of App Doctor, and Bitna Kim of App Doctor",
    },
  ];

  return (
    <Mainlayout route={route}>
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
                <div className="yellow big">Part-time coupon service</div>
              </Col>
              <Col span={8}>
                <div className="gray big">Monthly deferred payment system</div>
              </Col>
              <Col span={8}>
                <div className="gray big">Project</div>
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
          <Tabs
            defaultActiveKey="1"
            tabBarExtraContent={<ViewMore />}
            icon={<RightCircleFilled />}
          >
            <TabPane tab="Recent inquiries / requests">
              <div className="content">
                <div className="left">
                  We want to modify the app we are using, but we want to get a
                  quote.
                </div>
                <div className="right">
                  <span className="day">2019.12.12</span>
                  <span className="person">Checking the person in charge</span>
                </div>
              </div>
              <div className="content">
                <div className="left">
                  We want to modify the app we are using, but we want to get a
                  quote.
                </div>
                <div className="right">
                  <span className="day">2019.12.12</span>
                  <span className="person">Checking the person in charge</span>
                </div>
              </div>
              <div className="content">
                <div className="left">
                  We want to modify the app we are using, but we want to get a
                  quote.
                </div>
                <div className="right">
                  <span className="day">2019.12.12</span>
                  <span className="person">Checking the person in charge</span>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div className="news">
          <Tabs defaultActiveKey="1">
            <TabPane tab="App Doctor News">
              <div className="news-container">
                <div className="left">
                  {newsLeft.map((item) => (
                    <div className="info">
                      <img className="image" src={item.image} alt="news" />
                      <div className="middle">
                        <div className="title">
                          App Doctor Seok-gyun Heo,CEO,Bitna Kim,General Manager
                          [Asan Nanum Foundation/MARU180] Interview News!!
                        </div>
                        <div className="content">
                          Good morning. This is App Doctor. Today's news is an
                          interview conducted by the Asan Nanum
                          Foundation/MARU180. The protagonists of this interview
                          are Seok-gyun Heo, CEO of App Doctor, and Bitna Kim,
                          head of the headquarters. It was a sincere thank you
                          for welcoming you to MARU180's new family...
                        </div>
                        <div className="view-more">
                          <div className="button-bottom">
                            <ViewMore />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="right">
                  {newsRight.map((item) => (
                    <div className="big-right">
                      <img className="image" src={item.image} alt="news" />
                      <div className="info">
                        <div className="title">{item.title}</div>
                        <div className="content">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Mainlayout>
  );
}
export default Dashboard;
