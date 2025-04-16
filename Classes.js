class BankAccount{
    //time complexity is O(1) because we are just assigning values, not using loops
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
    //time complexity O(1) because we are just adding to the balance
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
    //time complexity O(1) because we are just subtracting from the balance, similar to deposit
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
    //O(1), calling previous O(1) deposit and withdraw methods
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
    //O(1) because we are just returning a string
    getSummary(){
        return `${this.ownerName}'s balance is ${this.balance}`;
    }
    //O(n) because we are using forEach to iterate over the history array
    printHistory(){
        console.log(`Transaction history for ${this.ownerName}:`);
        this.getHistory().forEach(transaction => {
            console.log(transaction);
        });
    }
}
const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300); 
acc1.transferTo(acc2, 200); 
acc1.getSummary(); // John's balance is $300 
acc2.getSummary(); // Sara's balance is $500 
acc1.printHistory();

//time complexity is O(n) because we have the printHistory method, but we would have O(1) if we did not call the getHistory method