import { Carousel } from "antd";

import "./PartnersAndClients.scss";

function PartnersAndClients() {
  return (
    <div className="partners-and-clients">
      <Carousel draggable="true" slidesToShow="5" autoplay>
        {Array.from(Array(64).keys()).map((item) => {
          return (
            <img
              className="logo"
              alt={`logo_${item + 1}`}
              src={
                process.env.PUBLIC_URL + `/client_logos/logo_${item + 1}.jpg`
              }
            />
          );
        })}
      </Carousel>
    </div>
  );
}
export default PartnersAndClients;
