import { FC } from "react";
import styles from "../styles/Square.module.css";
import { SquareProps } from "../model/index.ts";

const Square: FC<SquareProps> = ({ value, onClick , isGameOver }) => {
  return (
    <button className={`${styles.square} ${isGameOver ? styles.noHover : ''}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;