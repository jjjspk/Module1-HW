//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:  65130500081     Name: ศุภกร ปรีชานฤตย์
class BankAccount {

    constructor(accountNumber){
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.transactions = [];
    }


//     //deposit(amount)
// • Parameters: amount type: number
// • Increases the account balance by the specified amount if it's positive. 
// Records the deposit transaction with its details. Returns the new 
// balance.

    deposit(amount){

        const id = this.transactions.length + 1 //ทำให้เป็น running number

        const transaction = {       //ทำให้เป็นรูปแบบตามที่กำหนด
            Id : id,
            type : 'deposit',
            amount : amount,
            timestamp : Date()

        }

        if(amount > 0){
            this.balance = this.balance + amount;   //บวกเข้า balance

            // return this.balance

            this.transactions.push(transaction); //push ข้อมูลเข้าไป

        return transaction;   //return ค่าออกมาตามโจทย์ต้องการ
        }

        return null           //ไว้ข้างนอก if  
                   
            
    }



//     withdraw(amount)
// • Parameters: amount type: number
// • Decreases the account balance by the specified amount if there are 
// sufficient funds and the amount is positive. Records the withdrawal 
// transaction with its details. Returns the new balance or null if insufficient 
// funds.

    withdraw(amount){

        const id = this.transactions.length + 1 //ทำให้เป็น running number

        const transaction = {       //ทำให้เป็นรูปแบบตามที่กำหนด
            Id : id,
            type : 'withdraw',
            amount : amount,
            timestamp : Date()

        }


        if(amount > 0 && amount <= this.balance){       //เช็คว่าจำนวนเงินที่ถอนเป็นจำนวนบวกและต้องน้อยกว่าหรือเท่ากับจำนวนที่มีอยู่ในบัญชีถึงจะถอนได้
            this.balance = this.balance - amount;      //ลบออกจาก balance  

            this.transactions.push(transaction); //push ข้อมูลเข้าไป
            return transaction;
        }
        return null  //ไว้นอก if

    }



// • getBalance() 
// • Parameters: -
// • Returns the current balance of the account.



    getBalance() {

        return this.balance

    }


    // • getAccountNumber()
// • Parameters: -
// • Returns the unique account number associated with the account.

    getAccountNumber(){

        return this.accountNumber
    }

// • getTransactions()
// • Parameters: -
// • Returns the array of recorded transactions, including details such as type, 
// amount, and timestamp for each transaction.

    getTransactions(){
        return this.transactions

    }



    // getTransaction(id)
    // • Parameters: id type: number
    // • Retrieves a specific transaction by its ID from the transactions array. 
    // Returns the transaction details or null if not found.



    getTransaction(id){             //ดูของ tk น่าจะง่ายกว่า   

        for(let i = 0; i < this.transactions.length; i++){   //วนเข้าไปเพื่อหา id ที่ตรง
        
        if (this.transactions[i].Id === id) {   //เช็คว่าตรงมั้ย
            return this.transactions[i];       //ถ้าตรงก็ใช่ คืนค่า
        }
    }

        return null                      //ถ้าไม่ก็ null

    }


//     recordTransaction(type, amount)
// • Parameters: type type: string, amount type: number
// • Records details of a transaction, including its type ('deposit' or 
// 'withdrawal'), amount, and the current timestamp. This method is usually 
// called internally by the deposit and withdraw methods

    recordTransaction(type, amount){

        const transaction = {       //ทำให้เป็นรูปแบบตามที่กำหนด          
            type : type,            //ตามที่ให้มา
            amount : amount,
            timestamp : Date()
        }
        this.transactions.push(transaction);       //push เข้าไป



    }



//     transferFunds(targetAccountNumber, amount)
// • Parameters: targetAccountNumber type: string, amount type: number
// • Transfers the specified amount from this account to another account identified 
// by the target account number, if funds allow. Deducts the amount from this 
// account and adds it to the target account. Returns true if the transfer was 
// successful, false if not enough funds or targetAccountNumber not exists.
    
    transferFunds(targetAccountNumber, amount){

           if(this.balance >= amount){
            targetAccount.balance = targetAccount.balance + amount
            this.balance = this.balance - amount

            return true
        }else{
            return false
        }
    }


    }







    

 
// Example Usage
const myAccount = new BankAccount("123456789");
console.log(myAccount.deposit(100)); // Deposit $100
console.log(myAccount.withdraw(50)); // Withdraw $50
console.log(myAccount.getBalance()); // Get the current balance
console.log(myAccount.getTransactions()); // Get all transactions