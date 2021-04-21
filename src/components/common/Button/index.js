import "./Button.scss";

function Button({ children, color }) {
  return <button className={`button ${color}`}>{children}</button>;
}

export default Button;
