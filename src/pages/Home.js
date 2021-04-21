import { useState, useEffect } from "react";
import { Layout } from "antd";

import Navigation from "../components/Home/Navigation";
import Slider from "../components/Home/Slider";
import About from "../components/Home/About";
import HowItWorks from "../components/Home/HowItWorks";
import BugSuggestion from "../components/Home/BugSuggestion";
import Price from "../components/Home/Price";
import PartnersAndClients from "../components/Home/PartnersAndClients";
import ContactUs from "../components/Home/ContactUs";
import MyFooter from "../components/Home/Footer";
import "./Home.scss";

const { Header, Content, Footer } = Layout;

function Home() {
  const [color, setColor] = useState("black");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset);
      if (window.pageYOffset < 60) {
        setColor("black");
      } else {
        setColor("white");
      }
    });
  }, []);

  return (
    <>
      <Header className={color}>
        <Navigation color={color} />
      </Header>

      <Content>
        <Slider />
        <About />
        <HowItWorks />
        <BugSuggestion />
        <Price />
        <PartnersAndClients />
        <ContactUs />
      </Content>

      <Footer>
        <MyFooter />
      </Footer>
    </>
  );
}

export default Home;
