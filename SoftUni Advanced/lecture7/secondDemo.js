
//Making an object
let person = {name:'Poko'}
console.log(person);
console.log('---------------');

//asigning keys and key-values
 person.name = "Misho";
 person['age'] = 23;
 console.log(person);
console.log('-------------');
 let days = 'days';

 person[days] = 4;

 console.log(person);

 console.log(`------------------Finished with object assigning keys and values--------------`);

 //object Destructuring Assingment Syntax

 let {age, breed, ...rest} = person;

 console.log(rest);

 console.log('-----------------------');

 //Object references

 let otherPerson = person;
 otherPerson.name = 'Rafo'

 console.log(person);

 console.log('---------------------');

 //first way to clone object
console.log('------------First way of cloning objects--------------');
 let {...clonedPerson} = person;
 clonedPerson.name = 'Devid';
clonedPerson.type = 'Trapper';
clonedPerson.days = 3;

console.log(person);
console.log(clonedPerson);

console.log('------------------');

// Objects as associative-arrays

let phones = {
    'Boyan Koychev' : '08978632121',
    'Nina Koychev' : '08973218632121',
    'Niko Koychev' : '08978632121',
    'Poko Atanasov' : '0897321332121',
    'Dimitar Atanasov-pirata' : '0897321332121',
};

console.table(phones);
console.log('--------------');

phones['Dimitar Atanasov-pirata'] = 123456;

console.log(phones);

console.log('------------------');

//Iteration for-in

for(key in phones){
    console.log(key);
    console.log(phones[key]);
}
console.log('--------------------------');
//Iteration - methods

let names = Object.keys(phones);
let phoneNum =  Object.values(phones);
let phoneEntries = Object.entries(phones) // Used for sorting objects

console.log(names);
console.log(phoneNum);

console.table(phoneEntries);

for (const [key, value] of phoneEntries) {
    console.log(key);
    console.log(value);
}

console.log('--------Iterating through keys of obj------');

names.forEach(x => {
   console.log(`${x} - ${phones[x]}`); 
});







 
