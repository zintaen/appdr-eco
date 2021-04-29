import React, { useState } from "react";

import {
  Layout,
  Menu,
  Progress,
  Row,
  Col,
  Input,
  Button,
  Tabs,
  Card,
} from "antd";
import {
  RightCircleFilled,
  UserOutlined,
  FileDoneOutlined,
  ContainerOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import productImages from "../assets/images/product.png";
import couponImages from "../assets/images/coupon.jpg";
import Mainlayout from "../components/common/Layout";

import "./ServicePurchase.scss";

const { TabPane } = Tabs;

function ServicePurchase() {
  const [tab, setTab] = useState({ key: "tab1" });

  const purchaseBottom = [
    {
      image: productImages,
      price: "700,000 KRW",
      input: "1",
      button: "purchase",
      content: "KRW 35,000 per hour / 3 months validity / VAT excluded",
      voucher: "Developer Part Time Coupon",
      coupon: "20 hour coupon",
    },
    {
      image: productImages,
      price: "1,200,000 KRW",
      input: "1",
      button: "purchase",
      content: "KRW 35,000 per hour / 3 months validity / VAT excluded",
      voucher: "Developer Part Time Coupon",
      coupon: "40 hour coupon",
    },
    {
      image: productImages,
      price: "1,500,000 KRW",
      input: "1",
      button: "purchase",
      content: "KRW 35,000 per hour / 3 months validity / VAT excluded",
      voucher: "Developer Part Time Coupon",
      coupon: "80 hour coupon",
    },
    {
      image: productImages,
      price: "2,000,000 KRW",
      input: "1",
      button: "purchase",
      content: "KRW 35,000 per hour / 3 months validity / VAT excluded",
      voucher: "Developer Part Time Coupon",
      coupon: "120 hour coupon",
    },
  ];

  const couponRight = [
    {
      image: couponImages,
    },
  ];

  const [count, setCount] = useState(0);

  return (
    <Mainlayout>
      <div className="service-container">
        <Card
          className="card"
          title="Service purchase"
          tabList={[
            {
              key: "tab1",
              tab: "Recommendation",
            },
            {
              key: "tab2",
              tab: "Part-time coupon",
            },
          ]}
          onTabChange={(key) => {
            setTab({ key });
          }}
        >
          {
            {
              tab1: <p className="content">This is first tab</p>,
              tab2: (
                <div>
                  <div className="part-time-coupon">
                    <div className="big-title">
                      <div className="title">
                        App Doctor Part Time Coupon Service
                      </div>
                      <div className="content-2">
                        With App Doctor's unique new development service,
                        purchase time like a coupon and experience a reasonable
                        service that consumer as much time as needed for
                        development.
                      </div>
                    </div>
                    {couponRight.map((item) => (
                      <img
                        className="image-coupon"
                        src={item.image}
                        alt="news"
                      />
                    ))}
                  </div>
                  <div className="developer-coupon">
                    {purchaseBottom.map((item) => (
                      <div className="purchase-left">
                        <div className="left">
                          <img
                            className="items-image"
                            src={item.image}
                            alt="news"
                          />
                          <div className="wrapper">
                            <div className="voucher">{item.voucher}</div>
                            <div className="coupon">{item.coupon}</div>
                          </div>
                        </div>
                        <div className="right">
                          <div className="middle">
                            <div className="price">{item.price}</div>
                            <div className="input">
                              <button
                                onClick={() => setCount(count - 1)}
                                className="count"
                              >
                                -
                              </button>
                              <Input
                                type="number"
                                style={{ width: "20%" }}
                                defaultValue=""
                              />
                              <button
                                onClick={() => setCount(count + 1)}
                                className="count"
                              >
                                +
                              </button>
                            </div>
                            <div className="button">
                              <Button className="button-purchase">
                                <span className="style-name">Purchase</span>
                              </Button>
                            </div>
                          </div>
                          <div className="content">{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            }[tab.key]
          }
        </Card>
      </div>
    </Mainlayout>
  );
}
export default ServicePurchase;
