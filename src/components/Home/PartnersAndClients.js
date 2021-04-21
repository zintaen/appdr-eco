import { Carousel } from "antd";

import "./PartnersAndClients.scss";

function PartnersAndClients() {
  return (
    <section className="partners-and-clients-conatainer">
      <div className="title">PARTNERS AND CLIENTS</div>
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
    </section>
  );
}
export default PartnersAndClients;
