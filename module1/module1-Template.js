//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:  65130500081     Name: ศุภกร ปรีชานฤตย์
class BankAccount {

    constructor(accountNumber){
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.transactions = [];
    }


    deposit(amount){

        if(amount > 0){
            this.balance = this.balance + amount;
        }
        return this.balance


    }

    withdraw(amount){

        if(amount > 0 && amount <= this.balance){
            this.balance = this.balance - amount;
        }
        return this.balance

    }

    getBalance() {

        return this.balance

    }

    getAccountNumber(){

        return this.accountNumber
    }

    getTransactions(){
        return this.transactions

    }

    getTransaction(id){

    }

    recordTransaction(type, amount){

    }
    
    transferFunds(targetAccountNumber, amount){

    }







    
}
 
// Example Usage
const myAccount = new BankAccount("123456789");
console.log(myAccount.deposit(100)); // Deposit $100
console.log(myAccount.withdraw(50)); // Withdraw $50
console.log(myAccount.getBalance()); // Get the current balance
console.log(myAccount.getTransactions()); // Get all transactions