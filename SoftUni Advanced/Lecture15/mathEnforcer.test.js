const mathEnforcer = require('./mathEnforcer');
const { assert } = require('chai');

describe('mathEnforcer', () =>{
    describe('addFive', ()=>{
        //Test with incorect input
        it('should retrun undefined with string parameter', ()=>{
            assert(mathEnforcer.addFive('TEST') === undefined)
        });
        it('should retrun undefined with a object parametar', ()=>{
            assert(mathEnforcer.addFive({}) === undefined)
        });
        it('should retrun undefined with an array parametar', ()=>{
            assert(mathEnforcer.addFive([]) === undefined)
        });
        it('should retrun undefined with undefined parametar', ()=>{
            assert(mathEnforcer.addFive(undefined) === undefined)
        });
        it('should retrun undefined with null parametar', ()=>{
            assert(mathEnforcer.addFive(null) === undefined)
        });
        //Test with correct input
        it('should retrun sum with five if parametar is a number', ()=>{
            assert(mathEnforcer.addFive(5) === 10)
        });
             it('should retrun sum with five if parametar is a number', ()=>{
            assert(mathEnforcer.addFive(-7) === -2)
        });
        it('should retrun sum with five if parametar is a decimal', ()=>{
            assert(mathEnforcer.addFive(7.77) === 12.77)
        });
    });
    describe('subtractTen', ()=>{
        it('should retrun undefined with string parameter', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined)
        });
        it('should retrun undefined with a object parametar', ()=>{
            assert(mathEnforcer.subtractTen({}) === undefined)
        });
        it('should retrun undefined with an array parametar', ()=>{
            assert(mathEnforcer.subtractTen([]) === undefined)
        });
        it('should retrun undefined with undefined parametar', ()=>{
            assert(mathEnforcer.subtractTen(undefined) === undefined)
        });
        it('should retrun undefined with null parametar', ()=>{
            assert(mathEnforcer.subtractTen(null) === undefined)
        });
        it('should retrun result if number parametar', ()=>{
            assert(mathEnforcer.subtractTen(15) === 5)
        });
        it('should retrun result with negative parametar', ()=>{
            assert(mathEnforcer.subtractTen(-10) === -20)
        });
        it('should retrun result with negative parametar', ()=>{
            assert(mathEnforcer.subtractTen(15.5) === 5.5)
        });
        
    });
    describe('sum', ()=>{
        it('should retrun undefined with string parameters', () => {
            assert(mathEnforcer.sum('TEST', 'double') === undefined)
        });
        it('should retrun undefined with a object parametars', ()=>{
            assert(mathEnforcer.sum({}, {}) === undefined)
        });
        it('should retrun undefined with an array parametars', ()=>{
            assert(mathEnforcer.sum([],[]) === undefined)
        });
        it('should retrun undefined with undefined parametars', ()=>{
            assert(mathEnforcer.sum(undefined, undefined) === undefined)
        });
        it('should retrun undefined with null parametar', ()=>{
            assert(mathEnforcer.sum(null) === undefined)
        });
        it('should retrun sum if numbers are parametars', ()=>{
            assert(mathEnforcer.sum(5,10) === 15)
        });
        it('should retrun sum if both negative numbers are parametars', ()=>{
            assert(mathEnforcer.sum(-5,-10) === -15)
        });
        it('should retrun sum if  negative and positive numbers are parametars', ()=>{
            assert(mathEnforcer.sum(-5,10) === 5)
        });
        it('should retrun sum if one decimal num and nomral num', ()=>{
            assert(mathEnforcer.sum(5,10.5) === 15.5)
        });
        it('should retrun sum with two decimal numbers', ()=>{
            assert(mathEnforcer.sum(5.5 ,10.5) === 16)
        });
    });
});