function Button({ onClick }) {
  return (
    <>
      <button className="btn" onClick={() => onClick("Rock")}>Rock</button>
      <button className="btn" onClick={() => onClick("Paper")}>Paper</button>
      <button className="btn" onClick={() => onClick("Scissor")}>Scissor</button>
    </>
  );
}

export default Button;