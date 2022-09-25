function solve(arr) {
    let res = [];
    let biggestOne = arr.shift();
    res.push(biggestOne);

    for (let el of arr) {
        if (el >= biggestOne) {
            res.push(el);
            biggestOne = el;
        }
    }
    return res
}

solve([1, 3,8, 4, 10, 12, 3, 2, 24]);