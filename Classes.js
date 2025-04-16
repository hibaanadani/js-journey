class BankAccount{
    constructor(ownerName,initialBalance){
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    getHistory(){
        if(!this.history){
            this.history=[]
        }
        return this.history;
    }

    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            this.getHistory().push('Deposited ${amount}');
            console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
        }
        else{
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
            this.getHistory().push('Withdrew ${amount}');
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        }
        else{
            console.log("Withdrawal amount must be positive and less than or equal to the balance.");
        }
    }
    TransferTo(anotherAccount, amount){
        if(amount > 0 && amount <= this.balance){
            this.withdraw(amount);
            anotherAccount.deposit(amount);
            this.getHistory().push('Transferred ${amount} to ${anotherAccount.ownerName}');
            console.log(`Transferred ${amount} to ${anotherAccount.ownerName}.`);
        }
        else{
            console.log("Transfer amount must be positive and less than or equal to the balance.");
        }
    }
    getSummary(){
        return `${this.ownerName}'s balance is ${this.balance}`;
    }
    printHistory(){
        console.log(`Transaction history for ${this.ownerName}:`);
        this.getHistory().forEach(transaction => {
            console.log(transaction);
        });
    }
}