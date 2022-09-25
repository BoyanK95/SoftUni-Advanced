function sortingNum(arr) {
    let result = []
    arr.sort((a, b)=>a -b)
    for (let i = 0; i <= arr.length + 2; i++) {
        let firstNum = arr.shift();
        let lastNum = arr.pop()
        result.push(firstNum);
        result.push(lastNum);
        
    }
    return result
}

sortingNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])

function sumFirstAndLat(arr) {
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());
    let sum = firstNum + lastNum;
    console.log(sum);
}

sumFirstAndLat(['20', '30', '40']);

console.log("----------");


