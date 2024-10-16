export const getWinningCombinations = (size: number) => {
  const combinations = [];

  // Calculate rows
  for (let row = 0; row < size; row++) {
    const rowCombination = [];
    for (let col = 0; col < size; col++) {
      rowCombination.push(row * size + col);
    }
    combinations.push(rowCombination);
  }

  // Calculate columns
  for (let row = 0; row < size; row++) {
    const colCombination = [];
    for (let col = 0; col < size; col++) {
      colCombination.push(col * size + row);
    }
    combinations.push(colCombination);
  }

  // Calculate diagonals
  const diagonal1 = [];
  const diagonal2 = [];
  for (let i = 0; i < size; i++) {
    diagonal1.push(i * size + i); // Top-left to bottom-right
    diagonal2.push((i + 1) * size - (i + 1)); // Top-right to bottom-left
  }
  combinations.push(diagonal1);
  combinations.push(diagonal2);
  return combinations;
};
