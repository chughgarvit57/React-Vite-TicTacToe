import { FC } from "react";
import "./App.css";
import Board from "./components/Board";

const App: FC = () => {
  return (
    <div className="app">
      <h1 id="title">Tic Tic Toe</h1>
      <Board />
    </div>
  );
}

export default App;