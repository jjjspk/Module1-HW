//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:  65130500081     Name: ศุภกร ปรีชานฤตย์
class BankAccount {

    constructor(accountNumber){
        this.accountNumber = accountNumber
        this.balance = 0
        this.transactions = []
        
    }


    deposit(amount){

        const id = this.transactions.length + 1       //ทำให้เป็น running number

        const transaction = {                         //สร้างตามโจทย์
            Id: id,
            type: 'deposit',
            amount: amount,
            timestammp: Date()

        }                                             
         
        
        //เขียนเงื่อนไข

        if(amount > 0){
            this.balance = this.balance + amount                //เอาจากในวงเล็บมาเขียนเงื่อนไข


            this.transactions.push(transaction)            //ใหญ่push เล็กเข้า

            return transaction;                           //return ออกมา
        }

        return null



      

    }

    withdraw(amount){


        const id = this.transactions.length + 1 

        
        const transaction = {                         //สร้างตามโจทย์
            Id: id,
            type: 'withdraw',
            amount: amount,
            timestammp: Date()

        }       



            if(amount > 0 && amount <= this.balance){

            this.balance = this.balance - amount                //เอาจากในวงเล็บมาเขียนเงื่อนไข


            this.transactions.push(transaction)            //ใหญ่push เล็กเข้า

            return transaction;                           //return ออกมา
        }

        return null




       
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

        //ดูของ tk น่าจะง่ายกว่า


    }

    recordTransaction(type, amount){

        const transaction = {       //ทำให้เป็นรูปแบบตามที่กำหนด          
            type : type,            //ตามที่ให้มา
            amount : amount,
            timestamp : Date()
        }
        this.transactions.push(transaction);       //push เข้าไป



    }
    
    transferFunds(targetAccountNumber, amount){

        //ดูของ tk + testhomework

    }







    
}
 
// Example Usage
const myAccount = new BankAccount("123456789");
console.log(myAccount.deposit(100)); // Deposit $100
console.log(myAccount.withdraw(50)); // Withdraw $50
console.log(myAccount.getBalance()); // Get the current balance
console.log(myAccount.getTransactions()); // Get all transactions