function oddPosition(arr) {
    let result = arr
    .filter((num, index) => index % 2 !== 0)
    .map((n)=> n * 2)
    .reverse();

    console.log(result);
    
}

oddPosition([10, 15, 20, 25]);
oddPosition([3, 0, 10, 4, 7, 3]);
