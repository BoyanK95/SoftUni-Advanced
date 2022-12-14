function solution() {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recepiesEnum = {
        apple:{carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate:10, flavour: 20},
        burger: {carbohydrate: 5, fat:7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, fat: 10, carbohydrate: 10, flavour: 10}
    }

    return function inputHandler(input) {
        let actionHandler = cmdOption()
        let [cmd, microelement, quantity] = input.split(" ");
       return actionHandler[cmd](microelement, quantity)
    }
    
    function cmdOption() {  
        return {
            restock:(microelement, quantity)=> {
                store[microelement] = store[microelement] + Number(quantity)
                return "Success"
            },
            prepare: (recipe, quantity)=> {
                let isDone = true;
                let str = '';
                let coppyStore = JSON.parse(JSON.stringify(store))
                for (let [key, v] of Object.entries(recepiesEnum[recipe])) {
                    let needValue = Number(quantity) * v;
                    if (store[key] < needValue) {
                        isDone = false;
                        str = `Error: not enough ${key} in stock`
                        break;
                    }
                    coppyStore[key] -= needValue
                }
                if (!isDone) {
                    return str
                }
                store = coppyStore;
                return 'Success'
            },
            report:  ()=> {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
            }
        }
    }
}


let manager = solution ();
// console.log (manager ("restock flavour 50")); // Success
// console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log (manager ("restock flavour 50"));
console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));
