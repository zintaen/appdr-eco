import "./ButtonRound.scss";

function ButtonRound({ children, color }) {
  return <button className={`button ${color}`}>{children}</button>;
}

export default ButtonRound;
