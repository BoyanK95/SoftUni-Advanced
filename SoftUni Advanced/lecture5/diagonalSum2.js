function diagonalSum(input) {
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;

  let firstIndex = 0;
  let secondIndex = input[0].length - 1;
  

  input.forEach(array => {
    firstDiagonalSum += array[firstIndex++];
    secondDiagonalSum += array[secondIndex--]
  });
  console.log(firstDiagonalSum + ' ' + secondDiagonalSum);
}

diagonalSum([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
