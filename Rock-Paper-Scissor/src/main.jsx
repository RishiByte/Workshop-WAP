import { createRoot } from 'react-dom/client'
import Button from './Buttons'
import Heading from './heading'
import Score from './score'
import { useState } from 'react';

function App() {
  const [compScore, setCompScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [userMove, setUserMove] = useState("");
  const [compMove, setCompMove] = useState("");
  const [result, setResult] = useState("");

  function handleClick(move) {
    const moves = ['Rock', 'Paper', 'Scissor'];
    const randomMove = moves[Math.floor(Math.random() * 3)];

    setUserMove(move);
    setCompMove(randomMove);

    if (
      (move === 'Rock' && randomMove === 'Scissor') ||
      (move === 'Paper' && randomMove === 'Rock') ||
      (move === 'Scissor' && randomMove === 'Paper')
    ) {
      setUserScore(prev => prev + 1);
      setResult("You Win 🎉");
    } 
    else if (move === randomMove) {
      setResult("Draw 🤝");
    } 
    else {
      setCompScore(prev => prev + 1);
      setResult("You Lose 😢");
    }
  }

  const icons = {
    Rock: "🪨",
    Paper: "📄",
    Scissor: "✂️"
  };

  return (
    <>
      <Heading />

      <Score UserScore={userScore} CompScore={compScore} />

      <h2>You chose: {icons[userMove]}</h2>
      <h2>Computer chose: {icons[compMove]}</h2>

      <h2>{result}</h2>

      <Button onClick={handleClick} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);

export default App;