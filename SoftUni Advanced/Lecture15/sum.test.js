const sum = require('./sum');
const { assert } = require('chai');
const { it } = require('mocha');

describe('Sum of two numbers', () => {
    it('test with two numbers', () => {
        assert.equal(sum(3,4), 7);
    });

    it('test with swting and number', () => {
        assert.equal(sum('3',4), 7);
    });
});