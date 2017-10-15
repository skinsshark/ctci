/**
 *  Write an algorithm such that if an element in an MxN matrix is 0, its entire
 *  row and column are set to 0.
 */

function find_zeros(matrix) {
  //check first row/col before others bc will be flagging rows/cols here
  let row_has_zero = false; //checking if first row has zero
  let col_has_zero = false; //checking if first col has zero

  for (let j = 0; j < matrix[0].length; j++) { //check first row
    if (matrix[0][j] == 0) {
      row_has_zero = true;
      break;
    }
  }

  for (let i = 0; i < matrix.length; i++) { //check first col
    if (matrix[i][0] == 0) {
      col_has_zero = true;
      break;
    }
  }

  for (let i = 1; i < matrix.length; i++) { //check the rest of the grid
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) { //nullify rows according to flags
    if (matrix[i][0] == 0) {
      nullify_row(matrix, i);
    }
  }

  for (let j = 1; j < matrix[0].length; j++) { //nullify cols according to flags
    if (matrix[0][j] == 0) {
      nullify_col(matrix, j);
    }
  }

  if (row_has_zero) nullify_row(matrix, 0); //nullify first row if necessary
  if (col_has_zero) nullify_col(matrix, 0);//nullify first col if necessary

  return matrix;
}

function nullify_row(matrix, row) {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
}

function nullify_col(matrix, col) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

let matrix = [
  [3, 1, 4, 1, 5, 9],
  [2, 7, 9, 5, 0, 2],
  [8, 8, 4, 1, 9, 7]
];

console.log(find_zeros(matrix));
