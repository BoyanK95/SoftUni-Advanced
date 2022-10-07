let person = {
    name: 'Pesho',
    age: 20
}

let internalNameProp = Object.getOwnPropertyDescriptor(person, 'name');
console.log(internalNameProp);


console.log('after');

//Modify int propertyu of existing property
Object.defineProperty(person, 'name', {enumerable: false })

console.log(Object.getOwnPropertyDescriptor(person, 'name'));


//Add new property and confiture internal properties
Object.defineProperty(person, 'height', {value: 190, enumerable: true})

for (const key in person) {
    console.log(key);
}

Object.keys(person).forEach(x => console.log(x))


//Define more than one property at once
Object.defineProperties(person, {
    name: {
        enumerable: true
    },
    age: {
        value: 22,
        configurable: false
    }
})

console.table(person);


//Can NOT change property with writable - false
Object.defineProperty(person, 'eyeColor', {value: 'Brown', writable: false});

console.log(person.eyeColor);

console.log('----------------------');

person.eyeColor = 'Blue'; // Does NOT work !!!

console.log(person);


//add getter:
Object.defineProperty(person, 'info', {
    get: function () {
        return `${this.name} - ${this.age} years old, has ${this.eyeColor} eyes and is ${this.height} cm tall`
    },
    set: function (value) {
        let [name, ageText, height] = value.split(' - ');
        this.name = name;
        this.age = Number(ageText);
        this.height = Number(height)
    }
});

console.log(person.info);

console.log('-------------------------');


person.info = 'Poko - 24 - 175';
console.log(person.info);

person.weight = 77;

console.table(person);


//Object.freeze 
Object.freeze(person);

person.occupation = 'Fixed-income trader';  //Will not work (throws Error in strickt mode)

console.table(person);


let clonedPerson = {... person}; //shallow coppie

let newClonedPerson = Object.assign({}, person);
console.log(newClonedPerson);

Object.seal(clonedPerson)

