class Cat {
    constructor(name) {
        this.name = name;
    }
    makeSound(){
        console.log(`${this.name} Meawwss!`);
    }
}

let firstCat = new Cat('Kitriee');
let secondCat = new Cat('Garfield')
console.log(firstCat);
console.log(secondCat);
console.log('--------------');
secondCat.name = 'Mishy';
console.log(secondCat);

//Second example 
console.log('SecondExample');
console.log('-----------------');
let catNames = [
    'Navcho',
    'Garry',
    'Misho',
    'Poko',
    'Kitrie'
]

let cats = catNames.map(x => new Cat(x));

cats.forEach(x=>x.makeSound())