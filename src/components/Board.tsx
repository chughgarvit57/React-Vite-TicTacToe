import { FC, useState } from "react";
import styles from "../styles/Board.module.css";
import Square from "./Square";

const Board: FC = () => {
  // State to keep track of current game state (array of squares)
  const [squares, setSquares] = useState(Array(9).fill(""));

  // State to keep track of current player's turn (X or O)
  const [isXNext, setIsXNext] = useState(true);
  // State to store the history of the moves
  const [history, setHistory] = useState<string[][]>([]);

  // Function for handling user clicks and placing X and O based on user clicks
  const handleSquareClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) {
      return; // Square is already occupied / somebody won , do nothing!
    }
    setHistory([...history, squares]);
    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext((isXNext) => !isXNext);
    calculateWinner(newSquares);
  };

  // Function to undo move
  const undoMove = () => {
    if (history.length == 0) {
      return;
    }
    const previousState = history[history.length - 1];
    setHistory(history.slice(0, history.length - 1));
    setSquares(previousState);
    setIsXNext((isXNext) => !isXNext);
  };

  const calculateWinner = (squares: string[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of winningCombinations) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  // Function to restart the game
  const restartGame = () => {
    setSquares(Array(9).fill(""));
    setIsXNext(true);
    setHistory([]);
  };

  const winner = calculateWinner(squares);
  // Variable that will hold draw state as boolean
  const draw = !winner && squares.every((square) => square !== "");
  // Variable that will hold game status (winner, draw, or current player's turn)
  const status = winner
    ? `Winner: ${winner}`
    : draw
    ? `It's a draw!`
    : `Player: ${isXNext ? "X" : "O"}`;
  // Variable that will determine whether game is over or not
  const isGameOver = winner || draw;
  return (
    <div className={styles.board}>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleSquareClick(index)}
            isGameOver={isGameOver}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button
          disabled={Boolean(!history.length || winner || draw)}
          className={styles.undoButton}
          onClick={undoMove}
        >
          Undo
        </button>
        <button className={styles.restartButton} onClick={restartGame}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Board;
