function reverceArr(n, arr) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    let number = arr[i];
    newArr.unshift(number);
  }
  console.log(newArr.join(' '));
}

reverceArr(3, [10, 20, 30, 40, 50]);
reverceArr(4, [-1, 20, 99, 5]);
reverceArr(2, [66, 43, 75, 89, 47]);