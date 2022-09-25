let student = {
    name: 'Ivan',
    age: 18,
    bodytype: 'Ektomorph'
};

let otherObj = {
    address: 'Rakovski 34',
    city: 'Sofia'
};

let newStudent = Object.assign(student, otherObj)

console.log(newStudent);


const compareNumber = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a
};


let numbers = [1, 2, 5, 7, 32, 532, 63,777];

numbers.sort(compareNumber.descending);

console.log(numbers);