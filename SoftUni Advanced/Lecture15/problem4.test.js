const mathEnforcer = require('./mathEnforcer');
const { assert } = require('chai');
// const { describe } = require('mocha');

describe('Testing mathEnforcer function', ()=> {
    describe('addFive function', ()=> {
        it('should return undefined with string', ()=> {
            assert.equal(mathEnforcer.addFive('Sex'), undefined)
        });
        it('Should return undefined with obj', ()=> {
            assert.equal(mathEnforcer.addFive({}), undefined);
        });
        it('Should return undefined with array', ()=> {
            assert.equal(mathEnforcer.addFive([]), undefined);
        });
        it('Should return undefined with boolean', ()=> {
            assert.equal(mathEnforcer.addFive(true), undefined);
        });
        it('Should return undefined with undefined', ()=> {
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });
        it('Should return correct sum', ()=> {
            assert.equal(mathEnforcer.addFive(5), 10);
        });
    })
    describe('subtractTen testing function', ()=> {
        it('should return undefined with string', ()=> {
            assert.equal(mathEnforcer.subtractTen('Sex'), undefined)
        });
        it('should return undefined with obj', ()=> {
            assert.equal(mathEnforcer.subtractTen({}), undefined)
        });
        it('should return undefined with arr', ()=> {
            assert.equal(mathEnforcer.subtractTen([]), undefined)
        });
        it('should return undefined with boolean', ()=> {
            assert.equal(mathEnforcer.subtractTen(true), undefined)
        });
        it('should return undefined with undefined', ()=> {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined)
        });
        it('should return undefined with obj', ()=> {
            assert.equal(mathEnforcer.subtractTen({}), undefined)
        });
    })
})