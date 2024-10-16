export interface SquareProps {
    value: string | null;
    onClick: () => void;
    isGameOver: string | boolean;
}

export interface BoardProps {
    size: number;
}