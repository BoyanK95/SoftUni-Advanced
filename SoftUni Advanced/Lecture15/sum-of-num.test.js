// const { it } = require('mocha');
const expect = require('chai').expect;
const sum = require('./sum-of-num');

describe('Sum of Numbers', () => {
  it('Should retrun the sum of the num in the arr', () => {
    let numbers = [1, 2, 3, 4, 5];
    let expectedSum = 15;
    let actualSum = sum(numbers);

    expect(actualSum).to.equal(expectedSum);
  });
  it('Should retrun the sum with negative num in the arr', () => {
    let numbers = [1, 2, 3, 4, -5];
    let expectedSum = 5;
    let actualSum = sum(numbers);

    expect(actualSum).to.equal(expectedSum);
  });
  it('Should retrun 0 when only 0 is given', () => {
    let numbers = [0, 0, 0, 0, 0];
    let expectedSum = 0;
    let actualSum = sum(numbers);

    expect(actualSum).to.equal(expectedSum);
  });
});