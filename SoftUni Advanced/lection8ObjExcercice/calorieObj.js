function calorieObj(data) {
    let obj = {};
    
    for (let i = 0; i < data.length; i+=2) {
        obj[data[i]] = Number(data[i+1]);
    }
    console.log(obj);
}

calorieObj(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])