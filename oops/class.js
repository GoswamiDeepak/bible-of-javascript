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

const deepak_Ac = new BackAccount('Deepak G', 1000);
console.log(deepak_Ac);
deepak_Ac.deposit(3000);
console.log(deepak_Ac);
