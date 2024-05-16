// 7. // Objects
// Instruction:
// - Create an object person with properties: name (a string), age (a number), and 
// isStudent (a boolean).
// 7.1 Add a new property hobbies, an array of strings, to the person object.
// 7.2 Change the age property to a new value.
// 7.3 Delete the isStudent property.
// Initiate code: 
// // Insert your code here

let person = {

    name: 'JJ',
    age: 19,
    isStudent: true

}

person.hobbies = ['eating','sleeping'] //เพิ่ม property hobbies เป็น array

person.age = 20   //new value

delete person.isStudent //delete

console.log(person);



8. // Expressions, Operators, and Control Structures
// Instruction:
// - No coding, What is the result of the code below, and why is it displayed?
// Initiate code: 
// XXXXX : What is you think about result
if(1){
console.log(1); // XXXXX 1 เพราะเลขที่ไม่ใช่ 0 จะเป็นค่า true แสดงผลปกติ
}
if([]){
console.log([]);// XXXXX [] เพราะ array ว่าง จะเป็นค่า true แสดงผลปกติ
}
if(""){
console.log("");// XXXXX ไม่แสดง เพราะ string ว่าง จะเป็นค่า false ไม่ถูกดำเนินการ ไม่แสดงผล
}
if(null){
console.log(null); // XXXXX ไม่แสดง เพราะ null จะเป็นค่า false ไม่ถูกดำเนินการ ไม่แสดงผล
}
if(undefined){
console.log(undefined); // XXXXX ไม่แสดง เพราะ undefined จะเป็นค่า false ไม่ถูกดำเนินการ ไม่แสดงผล
}



9. // Expressions, Operators, and Control Structures / Objects
// Instruction:
// - Compare three objects with name properties (case-insensitive).
// Initiate code: 
// XXXXX is your code
let peopleObj1 = { name: "John", surname: "Doe" }
let peopleObj2 = { name: "Sarah", surname: "Wilson" }
let peopleObj3 = { name: "David", surname: "Brown" }

if(peopleObj1.name.toLocaleLowerCase() === peopleObj2.name.toLowerCase()||          //เปรียบเทีบให้เท่ากัน
peopleObj1.name.toLowerCase() === peopleObj3.name.toLowerCase()||
peopleObj2.name.toLowerCase() === peopleObj3.name.toLowerCase()) {



}
console.log("These two objects have the same name.");




10. // Arrays / Arrays Functions / Objects
// Instruction:
// - Display all the names of people objects (case-insensitive) that have the same name; 
// return an array of strings with the names that are the same.
// Initiate code:
// XXXXX is your code
let people = [
 { name: "John", surname: "Doe" },
 { name: "olivia", surname: "Smith" },
 { name: "john", surname: "Johnson" },
 { name: "Sarah", surname: "Wilson" },
 { name: "David", surname: "Brown" },
 { name: "Emily", surname: "Davis" },
 { name: "David", surname: "Miller" },
 { name: "Olivia", surname: "Taylor" },
 { name: "david", surname: "Anderson" },
 { name: "Sophia", surname: "Clark" }
];

// let result = people.forEach(people.name.toLowerCase() === people.name )
// console.log(result); // ["john", "olivia", "david"]




11. // Types, Values, and Variables
// Instruction:
// - No coding, What is the result of the code below, and why is it displayed?
// Initiate code: 
// XXXXX : What is you think about result

// const arr = [1, 2, 3];
// arr.push(4); // XXXXX       ตอบ push ได้ปกติ
// arr = [1, 2, 3, 4]; // XXXXX    ตอบ error เพราะ const เปลี่ยนค่าไม่ได้
// const obj = { name: 'Alice' };
// obj.age = 30; // XXXXX           ตอบ ใส่ age เข้าไปได้ปกติ
// obj = { name: 'Alice', age: 30 }; // XXXXX ตอบ error เพราะ const เปลี่ยนค่าไม่ได้



12.// Functions / Arrays / Arrays Functions
// Instruction:
// - Write a function uniqueElements(arrayValue) to return array of the unique elements 
// from an array.
// Initiate code:
// let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
// Insert your code here


function uniqueElements(arrayValue) {
    return arrayValue.filter((item, index, array) => array.indexOf(item) === index); // item คือสมาชิกในอาร์เรย์ที่ filter(), index คือ index ของ item, array คือ []
    // เปรียบเทียบกับ index ของ item ในอาร์เรย์ เท่ากับ index ที่ถูกส่งเข้ามา
}

let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];

numbers = uniqueElements(numbers) //เรียกใช้ function
console.log(numbers);


// array numbers after use function uniqueElements will be [1, 3, 8, 21, 13, 7]



