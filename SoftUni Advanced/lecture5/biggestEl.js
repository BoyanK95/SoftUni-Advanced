function solve(input) {
    for (let array of input) {
        for (let index in array) {
            if (num[index] > num[index + 1]) {
                console.log(num[index]);
                
            }
        }
    }
}

solve([
  [20, 50, 10],

  [8, 33, 145],
]);
