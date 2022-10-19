const { expect } = require('chai')
const numberOperations = require('./numberOperations ')


describe('Tests numberOperations functionality', ()=>{
    describe('Tests powNumber method', ()=>{
        it('Should return the power of the num', ()=>{
            expect(numberOperations.powNumber(2)).to.be.equal(4)
        })
    })
    describe('Tests numberChecker method', ()=>{
        it('Throw error with string input', ()=>{
            expect(()=>numberOperations.numberChecker('number')).to.throw('The input is not a number!')
        })
        it('Throw error with arr input', ()=>{
            expect(()=>numberOperations.numberChecker([2, 3])).to.throw('The input is not a number!')
        })
        it('Throw error with undefined input', ()=>{
            expect(()=>numberOperations.numberChecker(undefined)).to.throw('The input is not a number!')
        })
        it('Throw error with obj input', ()=>{
            expect(()=>numberOperations.numberChecker({})).to.throw('The input is not a number!')
        })
        it('Should return res with num < 100', ()=>{
            expect(numberOperations.numberChecker(30)).to.be.equal('The number is lower than 100!')
        })
        it('Should return res with num = 100', ()=>{
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!')
        })
        it('Should return res with num > 100', ()=>{
            expect(numberOperations.numberChecker(110)).to.be.equal('The number is greater or equal to 100!')
        })
    })
    describe('Test sumArrays method', ()=>{
        it('Should return result with arr1 is bigger',()=>{
            expect(numberOperations.sumArrays([1,2,3], [1,2]).to.deep.equal([2,4,3]))
        })
    })
})