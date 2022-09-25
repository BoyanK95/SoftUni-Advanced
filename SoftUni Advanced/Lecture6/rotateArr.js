function rotateArr(arr, num) {
  
  for (let i = 0; i < num; i++) {
    let number = arr.pop();
    arr.unshift(number);
    
  }
  console.log(arr.join(' '));
  
}

rotateArr(
  ["1", "2", "3", "4"],

  2
);

rotateArr(["Banana", "Orange", "Coconut", "Apple"], 15);
