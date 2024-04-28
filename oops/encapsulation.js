//Encapsulation :- private property || private method || Getter || Setter
class BackAccount {
    #balance = 0; //private property only access within class, child class can not use private value
    //properties*************
    constructor(username, balance = 0) {
        this.username = username;
        this.accountNum = Date.now();
        this.#balance = balance;
    }
    //Method *************
    deposite(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }

    setBalance(amount) {
        this.#balance = amount;
    }
    getBalance() {
        return this.#balance;
    }

    //Setter function
    set updateBalance(amount) {
        this.#balance = amount;
    }
    //getter function
    get checkBalance() {
        return this.#balance;
    }
}

//******* Inheritance  */

class SavingAccount extends BackAccount {
    loan = 0;
    constructor(username, balance) {
        super(username, balance);
        this.transactionLimit = 10000;
    }

    loanTaking(amount) {
        this.loan = amount;
    }
}

const deepakAc = new SavingAccount('Deepak g', 5000);
console.log(deepakAc);
console.log(deepakAc.getBalance());
console.log(deepakAc.checkBalance);
deepakAc.updateBalance = 10000;
console.log(deepakAc.checkBalance); //setter method we dont use ()
// deepakAc.loanTaking(5000);
// console.log(deepakAc);
// deepakAc.balance = 6000;
