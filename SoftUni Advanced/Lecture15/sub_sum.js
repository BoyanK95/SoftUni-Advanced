function subSum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN
    }
    let startIndex = Math.max(start, 0)
    let endIndex = Math.min(end, arr.length -1)

  let newArr = arr.slice(startIndex, endIndex + 1);
  let sum = newArr.map(Number).reduce((a, x) => a + x, 0);
  
  return sum
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));


module.exports = subSum;