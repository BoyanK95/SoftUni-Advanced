const isOddOrEven = require('./isOddOrEven')
const { assert } = require('chai');



describe('isOddOrEven function test',() => {
    //invalid input test
    it('should retrun undefined if the parameter is number', () => {
          assert.equal(isOddOrEven(10), undefined);
    });
    it('should return undefined if the parameter is a object', () => {
          assert.equal(isOddOrEven({}), undefined);
    });
    it('should return undefined if the parameter is a array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('should return undefined if the parameter is a undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });
    it('should return undefined if the parameter is a null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });
    //valid input test
    it('should return even as result', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });
    it('should return odd as result', () => {
        assert.equal(isOddOrEven('Hello'), 'odd');
    });
});