function BackAccount(name, balance = 0) {
    this.username = name;
    this.accountno = Date.now();
    this.balance = balance;
}
BackAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};

BackAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
};

const deepak_Ac = new BackAccount('Deepak G', 1000);
console.log(deepak_Ac);
deepak_Ac.deposit(5000)
console.log(deepak_Ac);
