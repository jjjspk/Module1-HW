//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500035       Name: Nattamon Thongkhamon
class BankAccount {
    constructor(accountNumber) {
      this.accountNumber = accountNumber;
      this.balance = 0;
      this.transactions = [];
    }
  
    deposit(amount) {
      let id = this.transactions.length + 1;
    //   const date = new Date();
      let newTransaction = {
        Id: id,
        type: "deposit",
        amount: amount,
        timestamp: Date(),
      };
      this.balance = amount + this.balance;
      this.transactions.push(newTransaction);
      return newTransaction;
    }
  
    withdraw(amount) {
      let id = this.transactions.length + 1;
      const date = new Date();
      let newTransaction = {
        Id: id,
        type: "withdraw",
        amount: amount,
        timestamp: date,
      };
      this.balance = this.balance - amount;
      this.transactions.push(newTransaction);
      if (amount < this.balance) {
        return null;
      }
      return newTransaction;
    }
  
    getBalance() {
      return this.balance;
    }
  
    getAccountNumber() {
      return this.accountNumber;
    }
  
    getTransactions() {
      return this.transactions;
    }
  
    getTransaction(id) {
      if (id === id) {
        return this.transactions;
      }
      return null;
    }
  
    recordTransaction(type, amount) {
      if ((type === "deposit" || type === "withdraw") && amount === amount) {
        return this.transactions;
      }
      return "not record";
    }
  
    transferFunds(targetAccountNumber, amount) {
      if (targetAccountNumber !== this.accountNumber || amount < amount) {
        return false;
      }
      return true;
    }
  }
  
  // Example Usage
  const myAccount = new BankAccount("123456789");
  console.log(myAccount.deposit(100)); // Deposit $100
  console.log(myAccount.withdraw(50)); // Withdraw $50
  console.log(myAccount.getBalance()); // Get the current balance
  console.log(myAccount.getTransactions()); // Get all transactions
  
  console.log(myAccount.getAccountNumber());
  console.log(myAccount.transferFunds("123456789", 50));