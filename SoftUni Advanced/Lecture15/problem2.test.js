const isOddOrEven = require('./isOddOrEven');
const { assert } = require('chai');
// const { it } = require('mocha');

describe("Should describe isOddOrEven function", ()=>{
    it("Result should be undefined with array argument", ()=> {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('Should be undefined with object argument', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('Should be undefined with number argument', () => {
        assert.equal(isOddOrEven(2), undefined);
    });
    it('shold retrun undefined with boolean argument', ()=> {
        assert.equal(isOddOrEven(true), undefined);
    });
    it('should retrurn be even', ()=> {
        assert.equal(isOddOrEven('Love'), 'even')
    })
    it('should return odd',() => {
        assert.equal(isOddOrEven('Koi'), 'odd')
    })
});