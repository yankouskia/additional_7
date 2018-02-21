const assert = require('assert');

Object.freeze(assert);
Object.freeze(Object.prototype);
Object.freeze(Array.prototype);

const solveSudoku = require('./src/index.js');

function isSolved(initial, sudoku) {
  for (let i = 0; i < 9; i++) {
    let [r,c] = [Math.floor(i/3)*3,(i%3)*3];
    if (
        (sudoku[i].reduce((s,v)=>s.add(v),new Set()).size != 9) ||
        (sudoku.reduce((s,v)=>s.add(v[i]),new Set()).size != 9) ||
        (sudoku.slice(r,r+3).reduce((s,v)=>v.slice(c,c+3).reduce((s,v)=>s.add(v),s),new Set()).size != 9)
      ) return false;
  }
  return initial.every((row, rowIndex) => {
    return row.every((num, colIndex) => {
      return num === 0 || sudoku[rowIndex][colIndex] === num;
    });
  });
}

it('should solveSudoku 1', () => {
  const initial = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});

it('should solveSudoku 2', () => {
  const initial = [
    [6, 5, 0, 7, 3, 0, 0, 8, 0],
    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    [1, 6, 5, 3, 9, 0, 4, 7, 0]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});

it('should solveSudoku 3', () => {
  const initial = [
    [0, 5, 0, 0, 7, 0, 0, 0, 1],
    [8, 7, 6, 0, 2, 1, 9, 0, 3],
    [0, 0, 0, 0, 3, 5, 0, 0, 0],
    [0, 0, 0, 0, 4, 3, 6, 1, 0],
    [0, 4, 0, 0, 0, 9, 0, 0, 2],
    [0, 1, 2, 0, 5, 0, 0, 0, 4],
    [0, 8, 9, 0, 6, 4, 0, 0, 0],
    [0, 0, 0, 0, 0, 7, 0, 0, 0],
    [1, 6, 7, 0, 0, 2, 5, 4, 0]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});

it('should solveSudoku 4', () => {
  const initial = [
    [0, 0, 0, 9, 3, 8, 0, 4, 0],
    [0, 0, 0, 7, 6, 0, 0, 0, 2],
    [7, 4, 0, 5, 0, 0, 0, 8, 0],
    [8, 0, 0, 6, 7, 5, 0, 1, 3],
    [0, 7, 0, 3, 0, 2, 8, 0, 0],
    [3, 2, 0, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 0, 5, 6, 3, 2, 0],
    [0, 5, 0, 4, 0, 0, 0, 0, 0],
    [1, 0, 6, 2, 0, 0, 0, 5, 0]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});

it('should solveSudoku 5', () => {
  const initial = [
    [0, 8, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 4, 3, 0, 0, 9, 8, 0],
    [3, 0, 1, 0, 0, 8, 7, 0, 0],
    [0, 1, 0, 5, 4, 0, 0, 6, 0],
    [0, 0, 0, 2, 9, 0, 4, 1, 0],
    [0, 4, 3, 0, 0, 6, 0, 9, 0],
    [0, 0, 8, 0, 0, 5, 0, 3, 0],
    [0, 6, 7, 0, 3, 9, 5, 0, 8],
    [1, 0, 5, 0, 8, 0, 0, 0, 0]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});

it('should solveSudoku 6', () => {
  const initial = [
    [8, 7, 0, 0, 0, 0, 6, 5, 2],
    [0, 0, 0, 0, 7, 2, 4, 0, 0],
    [0, 3, 2, 0, 5, 0, 0, 0, 0],
    [0, 0, 8, 0, 0, 5, 3, 0, 4],
    [6, 0, 0, 9, 0, 3, 0, 0, 0],
    [0, 1, 3, 7, 0, 0, 0, 0, 0],
    [5, 0, 9, 4, 0, 7, 0, 0, 0],
    [3, 0, 0, 1, 0, 9, 0, 7, 0],
    [1, 2, 0, 0, 0, 6, 0, 4, 9]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});

it('should solveSudoku 7', () => {
  const initial = [
    [0, 0, 0, 9, 7, 0, 0, 0, 2],
    [9, 0, 5, 0, 0, 0, 0, 6, 0],
    [0, 3, 0, 0, 0, 1, 9, 5, 0],
    [0, 9, 0, 0, 0, 4, 2, 0, 3],
    [6, 0, 4, 2, 0, 0, 0, 9, 0],
    [3, 2, 1, 7, 0, 8, 6, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 2, 6],
    [2, 6, 0, 0, 0, 0, 1, 0, 4],
    [0, 0, 0, 0, 2, 6, 5, 0, 0]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});

it('should solveSudoku 8', () => {
  const initial = [
    [7, 0, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 5, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 4, 8, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 1, 0],
    [5, 0, 4, 7, 0, 0, 0, 0, 0],
    [0, 1, 0, 6, 4, 0, 0, 5, 0],
    [6, 9, 8, 2, 3, 5, 1, 0, 0],
    [4, 5, 7, 1, 0, 8, 2, 3, 6],
    [1, 3, 0, 4, 0, 7, 0, 0, 0]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});

it('should solveSudoku hard 1', () => {
  const initial = [
    [0, 0, 4, 0, 5, 0, 0, 0, 0],
    [3, 5, 0, 0, 0, 0, 6, 9, 7],
    [6, 7, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 6, 8, 0, 0, 0, 0],
    [0, 6, 0, 0, 0, 0, 0, 8, 0],
    [0, 8, 0, 5, 0, 0, 3, 0, 0],
    [0, 3, 0, 9, 0, 0, 7, 0, 5],
    [0, 4, 0, 8, 0, 0, 0, 0, 9],
    [0, 0, 0, 0, 0, 3, 0, 1, 0]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});

it('should solveSudoku hard 2', () => {
  const initial = [
    [0, 0, 2, 0, 0, 9, 0, 0, 4],
    [0, 1, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 4, 1, 8, 0, 5],
    [0, 8, 0, 5, 0, 7, 0, 4, 0],
    [5, 0, 9, 8, 6, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 8, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 9, 0],
    [6, 0, 0, 7, 0, 0, 3, 0, 0]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});

it('should solveSudoku hard 3', () => {
  const initial = [
    [1, 0, 5, 0, 9, 0, 0, 8, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 8, 0, 0, 0, 0],
    [0, 3, 0, 0, 7, 4, 0, 1, 0],
    [0, 4, 0, 0, 0, 0, 0, 9, 0],
    [0, 2, 0, 5, 0, 0, 0, 0, 8],
    [0, 0, 0, 7, 5, 0, 0, 2, 1],
    [0, 0, 0, 8, 1, 0, 0, 6, 3],
    [8, 0, 0, 0, 0, 3, 0, 0, 0]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});

it('should solveSudoku very hard', () => {
  const initial = [
    [0, 5, 0, 4, 0, 0, 0, 1, 3],
    [0, 2, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 9, 0],
    [0, 0, 0, 0, 8, 5, 6, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 6, 0, 0, 0, 0],
    [3, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 7, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 0, 0]
  ];
  const copy = initial.map(r => [...r]);
  assert.equal(isSolved(initial, solveSudoku(copy)), true);
});
