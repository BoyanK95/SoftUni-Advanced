function solve(arr, step) {
  let res = [];
  for (let i = 0; i < arr.length; i += step) {
    res.push(arr[i]);
  }
  return res;
}

function solve2(arr, step) {
  return arr.filter((el, i) => {
    if (i % step === 0) {
      return el;
    }
  });
}
