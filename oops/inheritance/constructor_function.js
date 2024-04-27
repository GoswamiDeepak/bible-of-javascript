function BackAccount(username, balance = 0) {
    this.username = username;
    this.accountNo = Date.now();
    this.balance = balance;
}

BackAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};

BackAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
};

//********** Inheritance Saving Account */
function SavingAccount(username, balance) {
    BackAccount.call(this, username, balance);
    this.transactionLimit = 10000;
}

SavingAccount.prototype = Object.create(BackAccount.prototype);

SavingAccount.prototype.takingLoan = function (amount) {
    console.log('Loan amount', amount);
};

const savingAccount = new SavingAccount('Deepak G', 2000);
console.log(savingAccount);
savingAccount.takingLoan(50000);
