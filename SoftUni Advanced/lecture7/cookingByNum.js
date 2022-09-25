function solve(num, ...commands) {
    num = Number(num);
   
    
    let commandObj = {
        chop: num => num / 2,
        dice: num => Math.sqrt(num),
        spice:num => num + 1,
        bake: num => num * 3,
        fillet: num => num -= num*0.2
    }
    
    for (let command of commands) {
        num = commandObj[command](num);
        console.log(num);
    }
}


solve('32','chop','chop','chop','chop','chop',)
console.log("-------------");
solve('9','dice','spice','chop','bake','fillet',)

