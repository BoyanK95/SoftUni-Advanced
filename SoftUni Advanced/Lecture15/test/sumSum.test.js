// const { assert } = require('chai');
const assert = require('assert').strict;
const solve = require('../sub_sum');

describe('sub-sum calc ',  () => {
    it('Should calculate sub-sum', () => {
        let expSum = 150;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = 3;
        let endIndex= 300
    
        let actualSum = solve(numbers, startIndex, endIndex);
    
        assert.equal(actualSum, expSum);
    });
    
    it('Should calculate sub-sum is lower than 0', () =>{
        let expSum = 60;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = -100;
        let endIndex= 2
    
        let actualSum = solve(numbers, startIndex, endIndex);
    
        assert.equal(actualSum, expSum);
    });
});

