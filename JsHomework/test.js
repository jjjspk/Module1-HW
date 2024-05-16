// Constructor
// • Constructor(password): 
// • Parameters: password type: string
// • Initializes the locker as locked (true) and sets the initial password, 
// provided as an argument.
// Properties
// • locked: Indicates whether the locker is locked or unlocked, type: boolean.
// • password : Stores the locker's password securely, type: string.



// setPassword(oldPassword, newPassword): 
// • Parameters: oldPassword type: string, newPassword type: string
// • Allows the password to be changed if the old password provided matches 
// the current one. Return string "success" and "unsuccess" failure cases.

// • unlock(password): 
// • Parameters: password type: string
// • Attempts to unlock the locker if the correct password is provided, with 
// Return string for both "correct" and "incorrect" password attempts. Then, 
// set 'locked' to false.

// • lock(): 
// • Parameters: -
// • Lock the locker. Then, set 'locked' to true.

// • isLocked(): 
// • Parameters: -
// • Returns the locked status of the locker without changing its state, 
// providing a means to check if the locker is "locked" or "unlocked".

// tryMultiplePasswords(passwordsArray)
// • Parameters: passwordsArray (type: array of string)
// • Attempts to unlock the locker using a list of possible passwords. Tries each 
// password until one succeeds or all fail.Returns "unlocked" if one of the 
// passwords was correct, "still locked" otherwise



class Locker {

    constructor(password){
        this.locked = true
        this.password = password  //จากโจทย์
    }



    setPassword(oldPassword, newPassword){

        if(this.password.toLowerCase() === oldPassword.toLowerCase()){  //ถ้าพาสเวิดที่ใส่เท่ากับพาสเวิดเก่า
            this.password = newPassword //ใส่ค่าใหม่ 
            return "correct"
        }

        return 'incorrect'

    }

    unlock(password){

        if(password === this.password){      //ถ้า password ที่ใส่ตรงกับ password ที่มีเก็บไว้อยู่
            return "correct"                 //จะถูกต้อง
        }
        return 'incorrect'

    }

    lock(){

        this.locked = true  //โจทย์ให้ lock = true

    }

    isLocked(){

        if(this.locked){           //เช็คว่า lock ก็ return lock
            return "locked"
        }

        return "unlocked"

        // return this.locked

    }

    tryMultiplePasswords(passwordsArray){

        // for(let i = 0; i < this.password.length; i++){

        //     if(this.password[i].passwordsArray === passwordsArray){
        //         return this.password
        //     }
        // }


        for(let i =0; i<passwordsArray.length; i++){  // for loop เข้าไปหา
            console.log(passwordsArray[i])
        }


    }




}
const myLocker = new Locker("1234");
console.log(myLocker.unlock("1111")); // Attempting with the wrong password: "incorrect"
console.log(myLocker.unlock("1234")); // Attempting with the correct password: "correct"
console.log(myLocker.isLocked()); // Checking if unlocked: "unlocked"
myLocker.lock(); // Locking the locker
console.log(myLocker.isLocked()); // Should be "locked"
// Attempting to unlock with multiple passwords
console.log(myLocker.tryMultiplePasswords(["1111", "2222", "1234"])); // "unlocked"