class BankAccount{
    constructor(ownerName,initialBalance){
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
        }
        else{
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        }
        else{
            console.log("Withdrawal amount must be positive and less than or equal to the balance.");
        }
    }
}