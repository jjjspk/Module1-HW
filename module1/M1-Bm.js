
//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:65130500123      Name: Thanakorn Wongkondee


class BankAccount {
    constructor(accountNumber){
        this.accountNumber = accountNumber
        this.balance = 0
        // this.transaction = []
    }

    deposit(amount){
        if(amount > 0){
            this.balance = this.balance + amount 
        }
        return this.balance
    }

    withdraw(amount){
        if(amount > 0){
            if(this.balance > amount){
                this.balance = this.balance - amount
                return this.balance
            }else{
                return null
            }

        }else{
            return null
        }
    }

    getBalance(){
        return this.balance
    }


    // transferFunds(targetAccountNumber,amount){
    //     const anotherAccount = xxx.find((xxx) => targetAccountNumber === xxx.id)

    //     if(this.balance >= amount){
    //         anotherAccount.balance = anotherAccount.balance + amount
    //         this.balance = this.balance - amount

    //         return true
    //     }else{
    //         return false
    //     }
    // }


    transferFunds2(targetAccount,amount){
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
console.log(myAccount.getBalance()); // Get the current balance'
// console.log(myAccount.getTransactions()); // Get all transactions


const myAccount2 = new BankAccount("1111")
console.log(myAccount2.deposit(200))
console.log(myAccount2.getBalance()) 

// myAccount.transferFunds(myAccount2,50) // ผมคิดว่าถ้าไม่ได้สร้าง array ขึ้นมาก็ใช้ transferFunds แบบนี้ไม่ได้
myAccount.transferFunds2(myAccount2,500)
console.log("----------")
console.log(myAccount.getBalance())
console.log(myAccount2.getBalance())
