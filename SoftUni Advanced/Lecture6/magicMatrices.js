function magicMatrices(matrix) {
  isMagical = true;

  for (let i = 0; i < matrix.length - 1; i++) {
    let sumRowOne = matrix[i].reduce((acc, el) => acc + el);
    let sumRowTwo = matrix[i + 1].reduce((acc, el) => acc + el);
    
    let sumColOne = 0
    let sumColTwo = 0;
    for(let col = 0; col <matrix.length; col++){
        sumColOne += matrix[i][col];
        sumColTwo += matrix[i + 1][col];
    }

    if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
        isMagical = false
    }
  }
  console.log(isMagical);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
