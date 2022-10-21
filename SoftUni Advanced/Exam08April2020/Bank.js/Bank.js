class Bank{
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = []
    }
    newCustomer(customer){
        //let custumer = {firstName, lastName, personalId}
        let currentCustomer = this.allCustomers.find(c => c.firstName === customer.firstName)

        if (currentCustomer) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} is already our customer!`)
        }
        this.allCustomers.push(customer)
        return customer
    }
    
    depositMoney (personalId, amount){
        let currentCustomer = this.allCustomers.find(c => c.personalId === personalId)
        if (!currentCustomer) {
            throw new Error(`We have no customer with this ID!`)
        }
        if (!currentCustomer.hasOwnProperty('totalMoney')) {
            currentCustomer.totalMoney = 0;
        }
        if (!currentCustomer.hasOwnProperty('transactions')) {
            currentCustomer.transactions = []
        }
        currentCustomer.transactions.unshift(`${currentCustomer.transactions.length + 1}. ${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`)
        currentCustomer.totalMoney += amount
        return `${currentCustomer.totalMoney}$`
    }

    withdrawMoney (personalId, amount){
        let customer = this.allCustomers.find(c => c.personalId === personalId)
        
        if (!customer) {
            throw new Error(`We have no customer with this ID!`)
        }

        let finalSum = customer.totalMoney - amount
        if (finalSum < 0) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }
        if (!customer.hasOwnProperty('transactions')) {
            customer.transactions = []
        }
        //2 .Svetlin Nakov made depostit of 250$!
        customer.transactions.unshift(`${customer.transactions.length +1}. ${customer.firstName} ${customer.lastName}  withdrew  ${amount}$!`)
        customer.totalMoney -= amount
        return `${customer.totalMoney}$`
    }
    customerInfo (personalId){
        let customer = this.allCustomers.find(c => c.personalId === personalId)
        if (!customer) {
            throw new Error(`We have no customer with this ID!`)
        }
        let result = [
            `Bank name: ${this._bankName}`,
            `Customer name: ${customer.firstName} ${customer.lastName}`,
            `Customer ID: ${personalId}`,
            `Total Money: ${customer.totalMoney}$`,
            `Transactions:`
        ]
        customer.transactions.forEach(t => {
            result.push(t)
        });
        return result.join('\n')
    }

}


let bank = new Bank(`SoftUni Bank`);

console.log(bank.newCustomer({firstName: `Svetlin`, lastName: `Nakov`, personalId: 6233267}));
console.log(bank.newCustomer({firstName: `Mihaela`, lastName: `Mileva`, personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
