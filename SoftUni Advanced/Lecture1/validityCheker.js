function solve(x1, y1, x2, y2) {
    let res1 = Math.sqrt((x2-x1)**2)
    let res2 = Math.sqrt((y2-y1)**2)
    let res = Math.sqrt((x2-x1)**2 + (y2 -y1)**2)
    if (Number.isIntegerres1) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else{
        console.log(`{${x1$}, ${y1}} to 0, 0} is invalid`);
    }
    if (Number.isInteger(res)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1$}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}


solve(2, 1, 1, 1)





