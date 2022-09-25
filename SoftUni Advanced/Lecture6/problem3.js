function addAndRemoveEl(arr) {
  let initialNum = 1;
  let result = [];
    for (let command of arr) {
        if (command == 'add') {
            result.push(initialNum);
            initialNum++;
        }else{
            result.pop();
            initialNum++;
        }
    }
    if (result.length === 0) {
        console.log("Empty");
    }else{
        result.forEach(element => {
            console.log(element);
        });
    }
}

addAndRemoveEl(["add", "add", "add", "add"]);
console.log("----------------------");
addAndRemoveEl(['add', 'add', 'remove', 'add', 'add'])
console.log("-------------------");
addAndRemoveEl(['remove', 'remove', 'remove'])
