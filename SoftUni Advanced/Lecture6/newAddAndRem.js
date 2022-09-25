function solve(arr) {
    let res = []
    let num = 1;
    
    arr.forEach(command => {
        command === 'add' ? res.push(num) : res.pop();
        num++;
    });
    return res.length === 0 ? 'Empty' : res.join("\n");
}
