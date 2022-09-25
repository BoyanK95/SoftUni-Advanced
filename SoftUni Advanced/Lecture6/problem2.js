function printEveryNthEl(arr, step) {
    let result = []
  for (let i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }
  return result
}

printEveryNthEl(
  ["5", "20", "31", "4", "20"],

  2
);

printEveryNthEl(['dsa', 'asd', 'test', 'tset'], 2)

printEveryNthEl(['1', '2', '3', '4', '5'], 6);
