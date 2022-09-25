function biggerHalf(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    return sortedArr.slice(sortedArr.length / 2)
}

let result = biggerHalf([4, 7, 2, 5])
console.log(result);