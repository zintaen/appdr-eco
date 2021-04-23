import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

import "./Register.scss";

function Register() {
  return (
    <div className="register-container">
      <div className="title">WTA</div>
      <div className="content">Register to WTA</div>
      <div className="login">Create account to see it in action.</div>
      <input
        type="text"
        id="register_email"
        className="ant-input mt-15"
        placeholder="e-mail"
      />
      <input
        action="click"
        id="register_password"
        type="password"
        className="ant-input mt-15"
        aria-autocomplete="list"
        placeholder="password"
      />
      <input
        action="click"
        id="register_password"
        type="password"
        className="ant-input mt-15"
        aria-autocomplete="list"
        placeholder="URL"
      />
      <div className="login mt-15">
        <Checkbox>I accept the Terms and Conditions.</Checkbox>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button green mt-15"
      >
        Sign Up
      </Button>
      <div className="login mt-15">
        <a href="#" className="login">
          Already have an account?
        </a>
      </div>

      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button white mt-15"
      >
        <Link to="/login">Login</Link>
      </Button>

      <div className="login mt-15">WTA &copy; 2018</div>
    </div>
  );
}
export default Register;
