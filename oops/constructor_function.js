function BackAccount(name, balance = 0) {
    this.username = name;
    this.accountno = Date.now();
    this.balance = balance;
    this.deposit = function (balance) {
        this.balance += balance;
    };
    this.withdraw = (balance) => {
        this.balance -= balance;
    };
}

const deepakAc = new BackAccount('Deepak G', 1000);
deepakAc.deposit(3000); //depositing 3000 rupee
deepakAc.withdraw(500); //withdroa 500 rupee
console.log(deepakAc);
