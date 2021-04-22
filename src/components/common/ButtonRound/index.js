import "./ButtonRound.scss";

function ButtonRound({ children, color, onClick }) {
  return (
    <button onClick={onClick} className={`button-round ${color}`}>
      {children}
    </button>
  );
}

export default ButtonRound;
