let person = {
    name: 'Poko',
    age: 25,
    height: 190
};

let personPrototype = Object.getPrototypeOf(person);
personPrototype.weight = 77
console.log(personPrototype);

console.log(person);
console.log(person.weight);