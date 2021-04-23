import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

import "./Login.scss";

function Login() {
  return (
    <div className="login-container">
      <div className="title">WTA</div>
      <div className="content">Welcome to WTA</div>
      <div className="login">Login in. To see it in action.</div>
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
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button green mt-15"
      >
        Log in
      </Button>
      <div className="login mt-15">
        <a href="#" className="login">
          Do not have an account?
        </a>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button white mt-15"
      >
        <Link to="/register">Sign Up</Link>
      </Button>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button yellow mt-15"
      >
        Android app download
      </Button>
      <div className="login mt-15">WTA &copy; 2018</div>
    </div>
  );
}
export default Login;
