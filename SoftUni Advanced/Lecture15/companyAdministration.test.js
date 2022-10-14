const companyAdministration = require('./companyAdministration');
const { assert, expect } = require('chai');


describe('Test companyAdministration object funtionality', ()=>{
    describe('Test hiringEmployee method', ()=>{
        it('Should throw error with incorect string', ()=>{
            expect(()=> companyAdministration.hiringEmployee('Boyan', 'DevOps', 5)).to.throw('We are not looking for workers for this position')
        })
        it('Should throw error with number', ()=>{
            expect(()=> companyAdministration.hiringEmployee('Boyan', 7, 5)).to.throw('We are not looking for workers for this position')
        })
        it('Should throw error with arr', ()=>{
            expect(()=> companyAdministration.hiringEmployee('Boyan', [], 5)).to.throw('We are not looking for workers for this position')
        })
        it('Should throw error with object', ()=>{
            expect(()=> companyAdministration.hiringEmployee('Boyan', {}, 5)).to.throw('We are not looking for workers for this position')
        })
        it('Should throw error with undefined', ()=>{
            expect(()=> companyAdministration.hiringEmployee('Boyan', undefined, 5)).to.throw('We are not looking for workers for this position')
        })
        it('Should return successfully hired with exp more than 3y', ()=>{
            expect(companyAdministration.hiringEmployee('Boyan', "Programmer", 5)).to.equal( `Boyan was successfully hired for the position Programmer.`)
        })
        it('Should return successfully hired with exp equal to 3y', ()=>{
            expect(companyAdministration.hiringEmployee('Boyan', "Programmer", 3)).to.equal( `Boyan was successfully hired for the position Programmer.`)
        })
        it('Should return is not approved  with exp less than 3y', ()=>{
            expect(companyAdministration.hiringEmployee('Boyan', "Programmer", 1)).to.equal( `Boyan is not approved for this position.`)
        })
    })
    describe('Test calculateSalary method', ()=>{
        it('Should throw error with string', ()=>{
            expect(()=> companyAdministration.calculateSalary('Boyan')).to.throw('Invalid hours')
        })
        it('Should throw error with string num', ()=>{
            expect(()=> companyAdministration.calculateSalary('7')).to.throw('Invalid hours')
        })
        it('Should throw error with arr', ()=>{
            expect(()=> companyAdministration.calculateSalary([])).to.throw('Invalid hours')
        })
        it('Should throw error with obj', ()=>{
            expect(()=> companyAdministration.calculateSalary({})).to.throw('Invalid hours')
        })
        it('Should throw error with undefined', ()=>{
            expect(()=> companyAdministration.calculateSalary(undefined)).to.throw('Invalid hours')
        })
        it('Should throw error with boolean', ()=>{
            expect(()=> companyAdministration.calculateSalary(true)).to.throw('Invalid hours')
        })
        it('Should throw error with negative', ()=>{
            expect(()=> companyAdministration.calculateSalary(-3)).to.throw('Invalid hours')
        })
        it('Should return total with hours less than 160', ()=>{
            expect(companyAdministration.calculateSalary(100)).to.equal(1500)
        })
        it('Should return total with hours more than 160', ()=>{
            expect(companyAdministration.calculateSalary(200)).to.equal(4000)
        })
    })
    describe('Test firedEmployee', ()=> {
        it('Should throw Error with first par as number',()=> {
            expect(()=> companyAdministration.firedEmployee(7, 2)).to.throw('Invalid input')
        })
        it('Should throw Error with first par as string',()=> {
            expect(()=> companyAdministration.firedEmployee('7', 2)).to.throw('Invalid input')
        })
        it('Should throw Error with first par as undefined',()=> {
            expect(()=> companyAdministration.firedEmployee(undefined, 2)).to.throw('Invalid input')
        })
        it('Should throw Error with first par as boolean',()=> {
            expect(()=> companyAdministration.firedEmployee(true, 2)).to.throw('Invalid input')
        })
        it('Should throw Error with second par as arr',()=> {
            expect(()=> companyAdministration.firedEmployee(['Boko'], [])).to.throw('Invalid input')
        })
        it('Should throw Error with second par as obj',()=> {
            expect(()=> companyAdministration.firedEmployee(['Boko'], {})).to.throw('Invalid input')
        })
        it('Should throw Error with second par as undefined',()=> {
            expect(()=> companyAdministration.firedEmployee(['Boko'], undefined)).to.throw('Invalid input')
        })
        it('Should throw Error with second par as boolean',()=> {
            expect(()=> companyAdministration.firedEmployee(['Boko'], false)).to.throw('Invalid input')
        })
        it('Should throw Error with second par as negative',()=> {
            expect(()=> companyAdministration.firedEmployee(['Boko'], -6)).to.throw('Invalid input')
        })
        it('Should throw Error with second par as floatNum',()=> {
            expect(()=> companyAdministration.firedEmployee(['Boko'], 3.33)).to.throw('Invalid input')
        })
        it('Should throw Error with second par as bigger than employee lenght',()=> {
            expect(()=> companyAdministration.firedEmployee(['Boko', 'Denis', 'Poko'], 5)).to.throw('Invalid input')
        })
        it('Should throw Error with second par as equal than employee lenght',()=> {
            expect(()=> companyAdministration.firedEmployee(['Boko', 'Denis', 'Poko'], 3)).to.throw('Invalid input')
        })
        it('Should return result with correct par',()=> {
            expect(companyAdministration.firedEmployee(['Boko', 'Denis'], 1)).to.equal('Boko')
        })
    })
})