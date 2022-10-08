let PaymentPackage = require('./PaymentPackage')
let { assert } = require('chai')

describe('PaymentPackage', ()=>{
    describe('create isntace', ()=>{
        let paymentPackage;
        beforeEach(()=>{
            paymentPackage = new PaymentPackage('Denis', 7)
        });

        it('name should be correct', ()=>{
            assert.equal(paymentPackage._name, 'Denis', 'name has correct')
        })
    })
})