class BackAccount {
    username;
    account;
    balance;

    constructor(username, balance = 0) {
        this.username = username;
        this.balance = balance;
        this.account = Date.now();
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

class SavingAccount extends BackAccount {
    transationLimited = 10000;
    constructor(username, balance) {
        super(username, balance);
    }
    takingLoan(amount) {
        console.log('Taking loan', amount);
    }
}

const deepakAcc = new SavingAccount('Deepak G', 5000);
console.log(deepakAcc);

