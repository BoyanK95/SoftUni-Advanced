function solve(arr) {
  let result = [];
  let biggestOne = arr.shift();
  result.push(biggestOne);
  for (let number of arr) {
    if (number >= biggestOne) {
      result.push(number);
      biggestOne = number;
    }
  }
  return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20]);

console.log("-----------------------------------");

function listOfNames(names) {
  let sortedNames = names.sort((a, b) => a.localeCompare(b));
  
  sortedNames.forEach((element, i) => {
    console.log(`${i +1}.${element}`);
  });
  
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
