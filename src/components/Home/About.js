import Button from "../common/Button";
import "./About.scss";

function About() {
  return (
    <section className="about-container" id="about">
      <div className="left"></div>
      <div className="middle">
        <div className="title">JUST PROVE YOUR IDEA</div>
        <div className="border"></div>
        <div className="description">
          AppDoctor is Mobile App Specialist and has fixed more than 500 app
          issues in 1st half of 2019. Researching customer’s repeating
          requirements, AppDoctor makes solutions for non-engineers. This is
          WebToApp Solution for your website. Just create your account and test
          your website as mobile app to see how it works. If you need more,
          contact us. AppDoctor is supporting your ideas.
        </div>
        <Button color="black" className="button">
          LOGIN
        </Button>
      </div>
      <div className="right"></div>
    </section>
  );
}
export default About;
