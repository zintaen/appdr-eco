import { useState } from "react";

import { Layout, Menu, Progress, Row, Col, Button, Tabs, Card } from "antd";
import {
  RightCircleFilled,
  UserOutlined,
  FileDoneOutlined,
  ContainerOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import leftImages from "../assets/images/120778724_206729390806353_8026480639048956384_n.jpg";
import rightImagestop from "../assets/images/130996750_236492587830033_2736598305586578396_n.jpg";
import rightImagesbottom from "../assets/images/135462173_249444929868132_5627830014950120171_n.jpg";
import Mainlayout from "../components/common/Layout";

import "./ServicePurchase.scss";

const { TabPane } = Tabs;

function ServicePurchase() {
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
    <Mainlayout>
      <div className="service-container">
        <Card
          className="card"
          title="Service purchase"
          tabList={[
            {
              key: "tab1",
              tab: "tab1",
            },
            {
              key: "tab2",
              tab: "tab2",
            },
          ]}
          onTabChange={(key) => {
            setTab({ key });
          }}
        >
          {
            {
              tab1: <p>content1</p>,
              tab2: <p>content2</p>,
            }[tab.key]
          }
        </Card>
      </div>
    </Mainlayout>
  );
}
export default ServicePurchase;
