import { useState } from "react";
import ButtonRound from "../common/ButtonRound";

import "./ContactUs.scss";

function ContactUs() {
  const [error, setError] = useState({});
  const [form, setForm] = useState({});

  const _handleClick = () => {
    setError({ name: !form.name, email: !form.email, message: !form.message });
  };

  return (
    <div className="contact-us-container" id="contact-us">
      <hr className="line" />
      <div className="title">
        <span>CONTACT US</span>
      </div>
      <div className="form">
        <div className="half">
          <input
            type="text"
            className={`form-control ${error.name ? "error" : ""}`}
            placeholder="Name *"
            name="name"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            class="form-control"
            placeholder="Subject"
            name="subject"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="half">
          <input
            type="email"
            className={`form-control ${error.email ? "error" : ""}`}
            placeholder="Email *"
            name="email"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <div className="form-control">
            <input type="file" id="actual-btn" hidden />
            <input className="file-chosen" placeholder="Attachments" />
            <ButtonRound color="gray" className="button">
              ATTACH FILE
            </ButtonRound>
          </div>
        </div>
        <div className="full">
          <textarea
            className={`choose-file ${error.message ? "error" : ""}`}
            rows="6"
            placeholder="Your Message *"
            name="message"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          ></textarea>
        </div>
      </div>
      <div className="submit">
        <ButtonRound onClick={_handleClick} color="pink">
          SUBMIT
        </ButtonRound>
      </div>
    </div>
  );
}
export default ContactUs;
