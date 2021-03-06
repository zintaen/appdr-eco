import Button from "../common/Button";
import "./Price.scss";

function Price() {
  return (
    <section className="price-container" id="price">
      <div className="title">PRICE</div>
      <div className="content">
        <div className="border">
          <div className="top">
            <div className="block">
              <div className="items free"></div>
            </div>
            <div className="bold">TEST</div>
            <div className="large">FREE</div>
          </div>
          <div className="bottom">
            <div className="under">Android</div>
            <div className="under">iOS (2019 Q4)</div>
            <div className="under">Push notfication</div>
            <div className="under">Customize Splash Image (2019 Q4)</div>
            <Button color="black" className="button">
              LOGIN
            </Button>
          </div>
        </div>

        <div className="border">
          <div className="top">
            <div className="block">
              <div className="items builditas"></div>
            </div>
            <div className="bold">BUILD AS IT IS</div>
            <div className="large">$100</div>
            <div className="small">PER APP</div>
          </div>
          <div className="bottom">
            <div className="under">Base WebApp features</div>
            <div className="under">Customize Launcher icon</div>
            <div className="under">
              Build App with customer's <br /> developer account
            </div>
            <div className="under">Special Offer by 2019</div>
            <Button color="black" className="button">
              CONTACT US
            </Button>
          </div>
        </div>
        <div className="border">
          <div className="top">
            <div className="block">
              <div className="items customize"></div>
            </div>
            <div className="bold">CUSTOMIZE & BUILD</div>
            <div className="large">> $100</div>
            <div className="small">PER APP</div>
          </div>
          <div className="bottom">
            <div className="under">Base WebApp features</div>
            <div className="under">Customize Launcher icon</div>
            <div className="under">
              Customize WebApp by <br /> requirements
            </div>
            <div className="under">
              Build App with customer's <br /> developer account
            </div>
            <Button color="black" className="button">
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Price;
