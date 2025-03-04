class MarchingCubes {
  constructor() {
    this.triTable = [
      [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 8, 3, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 9, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 1, 9, 8, 3, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 10, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 8, 3, 1, 2, 10, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [9, 2, 10, 9, 0, 2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 2, 10, 3, 10, 8, 8, 10, 9, -1, 0, 0, 0, 0, 0, 0],
      [2, 3, 11, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [11, 0, 8, 11, 2, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 9, 0, 2, 3, 11, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 1, 9, 2, 9, 11, 11, 9, 8, -1, 0, 0, 0, 0, 0, 0],
      [3, 10, 1, 3, 11, 10, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 8, 1, 8, 10, 10, 8, 11, -1, 0, 0, 0, 0, 0, 0],
      [0, 3, 11, 0, 11, 9, 9, 11, 10, -1, 0, 0, 0, 0, 0, 0],
      [11, 10, 9, 11, 9, 8, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 7, 8, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 3, 0, 4, 7, 3, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 7, 8, 9, 0, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [9, 4, 7, 9, 7, 1, 1, 7, 3, -1, 0, 0, 0, 0, 0, 0],
      [4, 7, 8, 1, 2, 10, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 3, 0, 4, 7, 3, 2, 10, 1, -1, 0, 0, 0, 0, 0, 0],
      [2, 9, 0, 2, 10, 9, 4, 7, 8, -1, 0, 0, 0, 0, 0, 0],
      [3, 2, 7, 7, 9, 4, 7, 2, 9, 9, 2, 10, -1, 0, 0, 0],
      [8, 4, 7, 3, 11, 2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [7, 11, 2, 7, 2, 4, 4, 2, 0, -1, 0, 0, 0, 0, 0, 0],
      [2, 3, 11, 1, 9, 0, 8, 4, 7, -1, 0, 0, 0, 0, 0, 0],
      [2, 1, 9, 2, 9, 4, 2, 4, 11, 11, 4, 7, -1, 0, 0, 0],
      [10, 3, 11, 10, 1, 3, 8, 4, 7, -1, 0, 0, 0, 0, 0, 0],
      [4, 7, 0, 0, 10, 1, 7, 10, 0, 7, 11, 10, -1, 0, 0, 0],
      [8, 4, 7, 0, 3, 11, 0, 11, 9, 9, 11, 10, -1, 0, 0, 0],
      [7, 9, 4, 7, 11, 9, 9, 11, 10, -1, 0, 0, 0, 0, 0, 0],
      [4, 9, 5, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 3, 0, 4, 9, 5, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 5, 4, 0, 1, 5, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 8, 3, 4, 3, 5, 5, 3, 1, -1, 0, 0, 0, 0, 0, 0],
      [1, 2, 10, 9, 5, 4, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 9, 5, 8, 3, 0, 1, 2, 10, -1, 0, 0, 0, 0, 0, 0],
      [10, 5, 4, 10, 4, 2, 2, 4, 0, -1, 0, 0, 0, 0, 0, 0],
      [4, 8, 3, 4, 3, 2, 4, 2, 5, 5, 2, 10, -1, 0, 0, 0],
      [2, 3, 11, 5, 4, 9, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [11, 0, 8, 11, 2, 0, 9, 5, 4, -1, 0, 0, 0, 0, 0, 0],
      [5, 0, 1, 5, 4, 0, 3, 11, 2, -1, 0, 0, 0, 0, 0, 0],
      [11, 2, 8, 8, 5, 4, 2, 5, 8, 2, 1, 5, -1, 0, 0, 0],
      [3, 10, 1, 3, 11, 10, 5, 4, 9, -1, 0, 0, 0, 0, 0, 0],
      [9, 5, 4, 1, 0, 8, 1, 8, 10, 10, 8, 11, -1, 0, 0, 0],
      [10, 5, 11, 11, 0, 3, 11, 5, 0, 0, 5, 4, -1, 0, 0, 0],
      [4, 10, 5, 4, 8, 10, 10, 8, 11, -1, 0, 0, 0, 0, 0, 0],
      [7, 9, 5, 7, 8, 9, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 9, 5, 0, 5, 3, 3, 5, 7, -1, 0, 0, 0, 0, 0, 0],
      [8, 0, 1, 8, 1, 7, 7, 1, 5, -1, 0, 0, 0, 0, 0, 0],
      [3, 1, 5, 3, 5, 7, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [7, 9, 5, 7, 8, 9, 1, 2, 10, -1, 0, 0, 0, 0, 0, 0],
      [1, 2, 10, 0, 9, 5, 0, 5, 3, 3, 5, 7, -1, 0, 0, 0],
      [7, 8, 5, 5, 2, 10, 8, 2, 5, 8, 0, 2, -1, 0, 0, 0],
      [10, 3, 2, 10, 5, 3, 3, 5, 7, -1, 0, 0, 0, 0, 0, 0],
      [9, 7, 8, 9, 5, 7, 11, 2, 3, -1, 0, 0, 0, 0, 0, 0],
      [0, 9, 2, 2, 7, 11, 2, 9, 7, 7, 9, 5, -1, 0, 0, 0],
      [3, 11, 2, 8, 0, 1, 8, 1, 7, 7, 1, 5, -1, 0, 0, 0],
      [2, 7, 11, 2, 1, 7, 7, 1, 5, -1, 0, 0, 0, 0, 0, 0],
      [11, 1, 3, 11, 10, 1, 7, 8, 9, 7, 9, 5, -1, 0, 0, 0],
      [11, 10, 1, 11, 1, 7, 7, 1, 0, 7, 0, 9, 7, 9, 5, -1],
      [5, 7, 8, 5, 8, 10, 10, 8, 0, 10, 0, 3, 10, 3, 11, -1],
      [11, 10, 5, 11, 5, 7, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [10, 6, 5, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 8, 3, 10, 6, 5, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [9, 0, 1, 5, 10, 6, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 1, 9, 8, 3, 1, 10, 6, 5, -1, 0, 0, 0, 0, 0, 0],
      [6, 1, 2, 6, 5, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 1, 2, 6, 5, 1, 0, 8, 3, -1, 0, 0, 0, 0, 0, 0],
      [5, 9, 0, 5, 0, 6, 6, 0, 2, -1, 0, 0, 0, 0, 0, 0],
      [6, 5, 2, 2, 8, 3, 5, 8, 2, 5, 9, 8, -1, 0, 0, 0],
      [2, 3, 11, 10, 6, 5, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 11, 2, 0, 8, 11, 6, 5, 10, -1, 0, 0, 0, 0, 0, 0],
      [0, 1, 9, 3, 11, 2, 10, 6, 5, -1, 0, 0, 0, 0, 0, 0],
      [10, 6, 5, 2, 1, 9, 2, 9, 11, 11, 9, 8, -1, 0, 0, 0],
      [11, 6, 5, 11, 5, 3, 3, 5, 1, -1, 0, 0, 0, 0, 0, 0],
      [11, 6, 8, 8, 1, 0, 8, 6, 1, 1, 6, 5, -1, 0, 0, 0],
      [0, 3, 11, 0, 11, 6, 0, 6, 9, 9, 6, 5, -1, 0, 0, 0],
      [5, 11, 6, 5, 9, 11, 11, 9, 8, -1, 0, 0, 0, 0, 0, 0],
      [7, 8, 4, 6, 5, 10, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 4, 7, 3, 0, 4, 5, 10, 6, -1, 0, 0, 0, 0, 0, 0],
      [6, 5, 10, 7, 8, 4, 9, 0, 1, -1, 0, 0, 0, 0, 0, 0],
      [5, 10, 6, 9, 4, 7, 9, 7, 1, 1, 7, 3, -1, 0, 0, 0],
      [1, 6, 5, 1, 2, 6, 7, 8, 4, -1, 0, 0, 0, 0, 0, 0],
      [7, 0, 4, 7, 3, 0, 6, 5, 1, 6, 1, 2, -1, 0, 0, 0],
      [4, 7, 8, 5, 9, 0, 5, 0, 6, 6, 0, 2, -1, 0, 0, 0],
      [2, 6, 5, 2, 5, 3, 3, 5, 9, 3, 9, 4, 3, 4, 7, -1],
      [4, 7, 8, 5, 10, 6, 11, 2, 3, -1, 0, 0, 0, 0, 0, 0],
      [6, 5, 10, 7, 11, 2, 7, 2, 4, 4, 2, 0, -1, 0, 0, 0],
      [4, 7, 8, 9, 0, 1, 6, 5, 10, 3, 11, 2, -1, 0, 0, 0],
      [6, 5, 10, 11, 4, 7, 11, 2, 4, 4, 2, 9, 9, 2, 1, -1],
      [7, 8, 4, 11, 6, 5, 11, 5, 3, 3, 5, 1, -1, 0, 0, 0],
      [0, 4, 7, 0, 7, 1, 1, 7, 11, 1, 11, 6, 1, 6, 5, -1],
      [4, 7, 8, 9, 6, 5, 9, 0, 6, 6, 0, 11, 11, 0, 3, -1],
      [7, 11, 4, 11, 9, 4, 11, 5, 9, 11, 6, 5, -1, 0, 0, 0],
      [10, 4, 9, 10, 6, 4, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [10, 4, 9, 10, 6, 4, 8, 3, 0, -1, 0, 0, 0, 0, 0, 0],
      [1, 10, 6, 1, 6, 0, 0, 6, 4, -1, 0, 0, 0, 0, 0, 0],
      [4, 8, 6, 6, 1, 10, 6, 8, 1, 1, 8, 3, -1, 0, 0, 0],
      [9, 1, 2, 9, 2, 4, 4, 2, 6, -1, 0, 0, 0, 0, 0, 0],
      [0, 8, 3, 9, 1, 2, 9, 2, 4, 4, 2, 6, -1, 0, 0, 0],
      [0, 2, 6, 0, 6, 4, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 4, 8, 3, 2, 4, 4, 2, 6, -1, 0, 0, 0, 0, 0, 0],
      [4, 10, 6, 4, 9, 10, 2, 3, 11, -1, 0, 0, 0, 0, 0, 0],
      [8, 2, 0, 8, 11, 2, 4, 9, 10, 4, 10, 6, -1, 0, 0, 0],
      [2, 3, 11, 1, 10, 6, 1, 6, 0, 0, 6, 4, -1, 0, 0, 0],
      [8, 11, 2, 8, 2, 4, 4, 2, 1, 4, 1, 10, 4, 10, 6, -1],
      [3, 11, 1, 1, 4, 9, 11, 4, 1, 11, 6, 4, -1, 0, 0, 0],
      [6, 4, 9, 6, 9, 11, 11, 9, 1, 11, 1, 0, 11, 0, 8, -1],
      [11, 0, 3, 11, 6, 0, 0, 6, 4, -1, 0, 0, 0, 0, 0, 0],
      [8, 11, 6, 8, 6, 4, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 7, 8, 6, 8, 10, 10, 8, 9, -1, 0, 0, 0, 0, 0, 0],
      [3, 0, 7, 7, 10, 6, 0, 10, 7, 0, 9, 10, -1, 0, 0, 0],
      [1, 10, 6, 1, 6, 7, 1, 7, 0, 0, 7, 8, -1, 0, 0, 0],
      [6, 1, 10, 6, 7, 1, 1, 7, 3, -1, 0, 0, 0, 0, 0, 0],
      [9, 1, 8, 8, 6, 7, 8, 1, 6, 6, 1, 2, -1, 0, 0, 0],
      [7, 3, 0, 7, 0, 6, 6, 0, 9, 6, 9, 1, 6, 1, 2, -1],
      [8, 6, 7, 8, 0, 6, 6, 0, 2, -1, 0, 0, 0, 0, 0, 0],
      [2, 6, 7, 2, 7, 3, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [11, 2, 3, 6, 7, 8, 6, 8, 10, 10, 8, 9, -1, 0, 0, 0],
      [9, 10, 6, 9, 6, 0, 0, 6, 7, 0, 7, 11, 0, 11, 2, -1],
      [3, 11, 2, 0, 7, 8, 0, 1, 7, 7, 1, 6, 6, 1, 10, -1],
      [6, 7, 10, 7, 1, 10, 7, 2, 1, 7, 11, 2, -1, 0, 0, 0],
      [1, 3, 11, 1, 11, 9, 9, 11, 6, 9, 6, 7, 9, 7, 8, -1],
      [6, 7, 11, 9, 1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 0, 7, 0, 6, 7, 0, 11, 6, 0, 3, 11, -1, 0, 0, 0],
      [6, 7, 11, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 11, 7, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 0, 8, 11, 7, 6, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 11, 7, 9, 0, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 8, 3, 1, 9, 8, 7, 6, 11, -1, 0, 0, 0, 0, 0, 0],
      [11, 7, 6, 2, 10, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 2, 10, 0, 8, 3, 11, 7, 6, -1, 0, 0, 0, 0, 0, 0],
      [9, 2, 10, 9, 0, 2, 11, 7, 6, -1, 0, 0, 0, 0, 0, 0],
      [11, 7, 6, 3, 2, 10, 3, 10, 8, 8, 10, 9, -1, 0, 0, 0],
      [2, 7, 6, 2, 3, 7, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 7, 6, 8, 6, 0, 0, 6, 2, -1, 0, 0, 0, 0, 0, 0],
      [7, 2, 3, 7, 6, 2, 1, 9, 0, -1, 0, 0, 0, 0, 0, 0],
      [8, 7, 9, 9, 2, 1, 9, 7, 2, 2, 7, 6, -1, 0, 0, 0],
      [6, 10, 1, 6, 1, 7, 7, 1, 3, -1, 0, 0, 0, 0, 0, 0],
      [6, 10, 1, 6, 1, 0, 6, 0, 7, 7, 0, 8, -1, 0, 0, 0],
      [7, 6, 3, 3, 9, 0, 6, 9, 3, 6, 10, 9, -1, 0, 0, 0],
      [6, 8, 7, 6, 10, 8, 8, 10, 9, -1, 0, 0, 0, 0, 0, 0],
      [8, 6, 11, 8, 4, 6, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [11, 3, 0, 11, 0, 6, 6, 0, 4, -1, 0, 0, 0, 0, 0, 0],
      [6, 8, 4, 6, 11, 8, 0, 1, 9, -1, 0, 0, 0, 0, 0, 0],
      [1, 9, 3, 3, 6, 11, 9, 6, 3, 9, 4, 6, -1, 0, 0, 0],
      [8, 6, 11, 8, 4, 6, 10, 1, 2, -1, 0, 0, 0, 0, 0, 0],
      [2, 10, 1, 11, 3, 0, 11, 0, 6, 6, 0, 4, -1, 0, 0, 0],
      [11, 4, 6, 11, 8, 4, 2, 10, 9, 2, 9, 0, -1, 0, 0, 0],
      [4, 6, 11, 4, 11, 9, 9, 11, 3, 9, 3, 2, 9, 2, 10, -1],
      [3, 8, 4, 3, 4, 2, 2, 4, 6, -1, 0, 0, 0, 0, 0, 0],
      [2, 0, 4, 2, 4, 6, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 9, 3, 8, 4, 3, 4, 2, 2, 4, 6, -1, 0, 0, 0],
      [9, 2, 1, 9, 4, 2, 2, 4, 6, -1, 0, 0, 0, 0, 0, 0],
      [6, 10, 4, 4, 3, 8, 4, 10, 3, 3, 10, 1, -1, 0, 0, 0],
      [1, 6, 10, 1, 0, 6, 6, 0, 4, -1, 0, 0, 0, 0, 0, 0],
      [10, 9, 0, 10, 0, 6, 6, 0, 3, 6, 3, 8, 6, 8, 4, -1],
      [10, 9, 4, 10, 4, 6, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 11, 7, 5, 4, 9, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 8, 3, 9, 5, 4, 7, 6, 11, -1, 0, 0, 0, 0, 0, 0],
      [0, 5, 4, 0, 1, 5, 6, 11, 7, -1, 0, 0, 0, 0, 0, 0],
      [7, 6, 11, 4, 8, 3, 4, 3, 5, 5, 3, 1, -1, 0, 0, 0],
      [2, 10, 1, 11, 7, 6, 5, 4, 9, -1, 0, 0, 0, 0, 0, 0],
      [0, 8, 3, 1, 2, 10, 4, 9, 5, 11, 7, 6, -1, 0, 0, 0],
      [6, 11, 7, 10, 5, 4, 10, 4, 2, 2, 4, 0, -1, 0, 0, 0],
      [6, 11, 7, 5, 2, 10, 5, 4, 2, 2, 4, 3, 3, 4, 8, -1],
      [2, 7, 6, 2, 3, 7, 4, 9, 5, -1, 0, 0, 0, 0, 0, 0],
      [4, 9, 5, 8, 7, 6, 8, 6, 0, 0, 6, 2, -1, 0, 0, 0],
      [3, 6, 2, 3, 7, 6, 0, 1, 5, 0, 5, 4, -1, 0, 0, 0],
      [1, 5, 4, 1, 4, 2, 2, 4, 8, 2, 8, 7, 2, 7, 6, -1],
      [5, 4, 9, 6, 10, 1, 6, 1, 7, 7, 1, 3, -1, 0, 0, 0],
      [4, 9, 5, 7, 0, 8, 7, 6, 0, 0, 6, 1, 1, 6, 10, -1],
      [3, 7, 6, 3, 6, 0, 0, 6, 10, 0, 10, 5, 0, 5, 4, -1],
      [4, 8, 5, 8, 10, 5, 8, 6, 10, 8, 7, 6, -1, 0, 0, 0],
      [5, 6, 11, 5, 11, 9, 9, 11, 8, -1, 0, 0, 0, 0, 0, 0],
      [0, 9, 5, 0, 5, 6, 0, 6, 3, 3, 6, 11, -1, 0, 0, 0],
      [8, 0, 11, 11, 5, 6, 11, 0, 5, 5, 0, 1, -1, 0, 0, 0],
      [11, 5, 6, 11, 3, 5, 5, 3, 1, -1, 0, 0, 0, 0, 0, 0],
      [10, 1, 2, 5, 6, 11, 5, 11, 9, 9, 11, 8, -1, 0, 0, 0],
      [2, 10, 1, 3, 6, 11, 3, 0, 6, 6, 0, 5, 5, 0, 9, -1],
      [0, 2, 10, 0, 10, 8, 8, 10, 5, 8, 5, 6, 8, 6, 11, -1],
      [11, 3, 6, 3, 5, 6, 3, 10, 5, 3, 2, 10, -1, 0, 0, 0],
      [2, 3, 6, 6, 9, 5, 3, 9, 6, 3, 8, 9, -1, 0, 0, 0],
      [5, 0, 9, 5, 6, 0, 0, 6, 2, -1, 0, 0, 0, 0, 0, 0],
      [6, 2, 3, 6, 3, 5, 5, 3, 8, 5, 8, 0, 5, 0, 1, -1],
      [6, 2, 1, 6, 1, 5, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 9, 5, 8, 5, 3, 3, 5, 6, 3, 6, 10, 3, 10, 1, -1],
      [1, 0, 10, 0, 6, 10, 0, 5, 6, 0, 9, 5, -1, 0, 0, 0],
      [0, 3, 8, 10, 5, 6, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [10, 5, 6, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [11, 5, 10, 11, 7, 5, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [5, 11, 7, 5, 10, 11, 3, 0, 8, -1, 0, 0, 0, 0, 0, 0],
      [11, 5, 10, 11, 7, 5, 9, 0, 1, -1, 0, 0, 0, 0, 0, 0],
      [9, 3, 1, 9, 8, 3, 5, 10, 11, 5, 11, 7, -1, 0, 0, 0],
      [2, 11, 7, 2, 7, 1, 1, 7, 5, -1, 0, 0, 0, 0, 0, 0],
      [3, 0, 8, 2, 11, 7, 2, 7, 1, 1, 7, 5, -1, 0, 0, 0],
      [2, 11, 0, 0, 5, 9, 0, 11, 5, 5, 11, 7, -1, 0, 0, 0],
      [9, 8, 3, 9, 3, 5, 5, 3, 2, 5, 2, 11, 5, 11, 7, -1],
      [10, 2, 3, 10, 3, 5, 5, 3, 7, -1, 0, 0, 0, 0, 0, 0],
      [5, 10, 7, 7, 0, 8, 10, 0, 7, 10, 2, 0, -1, 0, 0, 0],
      [1, 9, 0, 10, 2, 3, 10, 3, 5, 5, 3, 7, -1, 0, 0, 0],
      [7, 5, 10, 7, 10, 8, 8, 10, 2, 8, 2, 1, 8, 1, 9, -1],
      [7, 5, 1, 7, 1, 3, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 1, 0, 8, 7, 1, 1, 7, 5, -1, 0, 0, 0, 0, 0, 0],
      [0, 5, 9, 0, 3, 5, 5, 3, 7, -1, 0, 0, 0, 0, 0, 0],
      [7, 5, 9, 7, 9, 8, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 5, 10, 4, 10, 8, 8, 10, 11, -1, 0, 0, 0, 0, 0, 0],
      [11, 3, 10, 10, 4, 5, 10, 3, 4, 4, 3, 0, -1, 0, 0, 0],
      [9, 0, 1, 4, 5, 10, 4, 10, 8, 8, 10, 11, -1, 0, 0, 0],
      [3, 1, 9, 3, 9, 11, 11, 9, 4, 11, 4, 5, 11, 5, 10, -1],
      [8, 4, 11, 11, 1, 2, 4, 1, 11, 4, 5, 1, -1, 0, 0, 0],
      [5, 1, 2, 5, 2, 4, 4, 2, 11, 4, 11, 3, 4, 3, 0, -1],
      [11, 8, 4, 11, 4, 2, 2, 4, 5, 2, 5, 9, 2, 9, 0, -1],
      [2, 11, 3, 5, 9, 4, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 5, 10, 4, 10, 2, 4, 2, 8, 8, 2, 3, -1, 0, 0, 0],
      [10, 4, 5, 10, 2, 4, 4, 2, 0, -1, 0, 0, 0, 0, 0, 0],
      [0, 1, 9, 8, 2, 3, 8, 4, 2, 2, 4, 10, 10, 4, 5, -1],
      [10, 2, 5, 2, 4, 5, 2, 9, 4, 2, 1, 9, -1, 0, 0, 0],
      [4, 3, 8, 4, 5, 3, 3, 5, 1, -1, 0, 0, 0, 0, 0, 0],
      [0, 4, 5, 0, 5, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 3, 9, 3, 5, 9, 3, 4, 5, 3, 8, 4, -1, 0, 0, 0],
      [4, 5, 9, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [7, 4, 9, 7, 9, 11, 11, 9, 10, -1, 0, 0, 0, 0, 0, 0],
      [8, 3, 0, 7, 4, 9, 7, 9, 11, 11, 9, 10, -1, 0, 0, 0],
      [0, 1, 4, 4, 11, 7, 1, 11, 4, 1, 10, 11, -1, 0, 0, 0],
      [10, 11, 7, 10, 7, 1, 1, 7, 4, 1, 4, 8, 1, 8, 3, -1],
      [2, 11, 7, 2, 7, 4, 2, 4, 1, 1, 4, 9, -1, 0, 0, 0],
      [0, 8, 3, 1, 4, 9, 1, 2, 4, 4, 2, 7, 7, 2, 11, -1],
      [7, 2, 11, 7, 4, 2, 2, 4, 0, -1, 0, 0, 0, 0, 0, 0],
      [7, 4, 11, 4, 2, 11, 4, 3, 2, 4, 8, 3, -1, 0, 0, 0],
      [7, 4, 3, 3, 10, 2, 3, 4, 10, 10, 4, 9, -1, 0, 0, 0],
      [2, 0, 8, 2, 8, 10, 10, 8, 7, 10, 7, 4, 10, 4, 9, -1],
      [4, 0, 1, 4, 1, 7, 7, 1, 10, 7, 10, 2, 7, 2, 3, -1],
      [4, 8, 7, 1, 10, 2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [9, 7, 4, 9, 1, 7, 7, 1, 3, -1, 0, 0, 0, 0, 0, 0],
      [8, 7, 0, 7, 1, 0, 7, 9, 1, 7, 4, 9, -1, 0, 0, 0],
      [4, 0, 3, 4, 3, 7, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 8, 7, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 9, 10, 8, 10, 11, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 11, 3, 0, 9, 11, 11, 9, 10, -1, 0, 0, 0, 0, 0, 0],
      [1, 8, 0, 1, 10, 8, 8, 10, 11, -1, 0, 0, 0, 0, 0, 0],
      [3, 1, 10, 3, 10, 11, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 9, 1, 2, 11, 9, 9, 11, 8, -1, 0, 0, 0, 0, 0, 0],
      [0, 9, 3, 9, 11, 3, 9, 2, 11, 9, 1, 2, -1, 0, 0, 0],
      [11, 8, 0, 11, 0, 2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 11, 3, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 10, 2, 3, 8, 10, 10, 8, 9, -1, 0, 0, 0, 0, 0, 0],
      [9, 10, 2, 9, 2, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 8, 2, 8, 10, 2, 8, 1, 10, 8, 0, 1, -1, 0, 0, 0],
      [2, 1, 10, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 9, 1, 8, 1, 3, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 9, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 3, 8, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.edge_vertices = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [6, 5],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];

    this.index_to_vertex = [
      [0, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 1],
    ];
  }

  computeVertexValues(volume, dims, cell, values) {
    for (var i = 0; i < this.index_to_vertex.length; ++i) {
      var v = this.index_to_vertex[i];
      var voxel =
        ((cell[2] + v[2]) * dims[1] + cell[1] + v[1]) * dims[0] +
        cell[0] +
        v[0];
      values[i] = volume[voxel] / 255.0;
    }
  }

  lerpVerts(va, vb, fa, fb, isoval, vert) {
    var t = 0;
    if (Math.abs(fa - fb) < 0.0001) {
      t = 0.0;
    } else {
      t = (isoval - fa) / (fb - fa);
    }
    vert[0] = va[0] + t * (vb[0] - va[0]);
    vert[1] = va[1] + t * (vb[1] - va[1]);
    vert[2] = va[2] + t * (vb[2] - va[2]);
  }

  marchingCubesJS(volume, dims, isovalue) {
    const triangles = [];
    var vertexValues = [0, 0, 0, 0, 0, 0, 0, 0];
    var vert = [0, 0, 0];
    for (var k = 0; k < dims[2] - 1; ++k) {
      for (var j = 0; j < dims[1] - 1; ++j) {
        for (var i = 0; i < dims[0] - 1; ++i) {
          this.computeVertexValues(volume, dims, [i, j, k], vertexValues);
          var index = 0;
          for (var v = 0; v < 8; ++v) {
            if (vertexValues[v] <= isovalue) {
              index |= 1 << v;
            }
          }
          for (var t = 0; this.triTable[index][t] != -1; ++t) {
            var v0 = this.edge_vertices[this.triTable[index][t]][0];
            var v1 = this.edge_vertices[this.triTable[index][t]][1];

            this.lerpVerts(
              this.index_to_vertex[v0],
              this.index_to_vertex[v1],
              vertexValues[v0],
              vertexValues[v1],
              isovalue,
              vert
            );

            vert[0] += i + 0.5;
            vert[1] += j + 0.5;
            vert[2] += k + 0.5;
            triangles.push(vert);
          }
        }
      }
    }
    return triangles;
  }
}
