function addAndRemove(arrOfCommands) {
  let res = [];
  let num = 1;
  for (let command of arrOfCommands) {
    switch (command) {
      case "add":
        res.push(num);
        num++;
        break;
      case "remove":
        res.pop();
        num++;
        break;
    }
  }
  if (res == []) {
    console.log('Empty');
  }else{
    res.forEach(el => {
        console.log(el);
      });
  }
  
}

addAndRemove(["add", "add", "add", "add"]);
addAndRemove(['remove', 'remove', 'remove'])
