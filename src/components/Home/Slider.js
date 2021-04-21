import { Carousel } from "antd";

import Button from "../common/Button";

import "./Slider.scss";

function Slider() {
  return (
    <section id="home">
      <Carousel draggable="true" autoplay>
        <div className="slider slider-1">
          <div className="content">
            <div className="top">If your have a website</div>
            <div className="middle">
              MAKE YOUR WEB <br />
              TO MOBILE APP
            </div>
            <div className="bottom">
              <Button className="button" color="transparent">
                HOW IT WORK
              </Button>
              <Button className="button" color="transparent">
                LOGIN
              </Button>
            </div>
          </div>
        </div>
        <div className="slider slider-2">
          <div className="content">
            <div className="top">If our base WebApp is fine as it is</div>
            <div className="middle">
              LAUNCH <br />
              YOUR APP
            </div>
            <div className="bottom">
              <Button className="button" color="transparent">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
        <div className="slider slider-3">
          <div className="content">
            <div className="top">Any bug or suggestion</div>
            <div className="middle">
              REPORT US <br />
              FOR NEXT UPDATE
            </div>
            <div className="bottom">
              <Button className="button" color="transparent">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
export default Slider;
