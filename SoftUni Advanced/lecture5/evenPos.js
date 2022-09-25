function evenPosition(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (i % 2 === 0) {
      result.push(number);
    }
  }
  console.log(result.join(' '));
}

evenPosition(["20", "30", "40", "50", "60"]);
