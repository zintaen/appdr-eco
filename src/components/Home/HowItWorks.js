import "./HowItWorks.scss";

function HowItWorks() {
  return (
    <div className="hiw-container" id="howitworks">
      <div className="title">HOW IT WORKS</div>
      <div className="content">
        <div className="block">
          <div className="border">
            <div className="number">01</div>
          </div>
          <div className="bold">Register & set URL</div>
          <div className="small">
            Just cerate your ID and set your URL for <br />
            testing
          </div>
        </div>
        <div className="block">
          <div className="border line">
            <div className="number">02</div>
          </div>
          <div className="bold">Download app & enter your ID</div>
          <div className="small">
            Download base app and enter your ID when <br /> you run the app
          </div>
        </div>
        <div className="block">
          <div className="border">
            <div className="number">03</div>
          </div>
          <div className="bold">Test your Mobile App</div>
          <div className="small">
            Just test your mobile app with your website
          </div>
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;
