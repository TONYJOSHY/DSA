class NQueens {
  constructor(N) {
    this.N = N;
    this.solutions = [];
  }

  solve() {
    this.board = Array.from({ length: this.N }, () => Array(this.N).fill("."));
    this.placeQueens(0); // Start placing queens from the first row
    return this.solutions;
  }

  placeQueens(row) {
    if (row === this.N) {
      this.addSolution(); // All queens are placed successfully
      return;
    }

    for (let col = 0; col < this.N; col++) {
      if (this.isSafe(row, col)) {
        this.board[row][col] = "Q"; // Place queen
        this.placeQueens(row + 1); // Recurse to place queen in the next row
        this.board[row][col] = "."; // Backtrack: remove queen
      }
    }
  }

  isSafe(row, col) {
    // Check column for another queen
    for (let i = 0; i < row; i++) {
      if (this.board[i][col] === "Q") {
        return false;
      }
    }

    // Check upper left diagonal for another queen
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (this.board[i][j] === "Q") {
        return false;
      }
    }

    // Check upper right diagonal for another queen
    for (let i = row - 1, j = col + 1; i >= 0 && j < this.N; i--, j++) {
      if (this.board[i][j] === "Q") {
        return false;
      }
    }

    return true;
  }

  addSolution() {
    const solution = this.board.map((row) => row.join(""));
    this.solutions.push(solution);
  }
}

// Example usage:
const nQueens = new NQueens(5);
const solutions = nQueens.solve();
console.log(solutions);
