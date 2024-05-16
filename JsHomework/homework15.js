15. // Expressions, Operators, and Control Structures / Arrays
// Instruction:
// - Destructure the first two elements and the last element of an array into new variables.
// Initiate code:
// const numbers = [1, 2, 3, 4, 5];
// Insert your code here
const numbers = [1, 2, 3, 4, 5];

// Destructuring สมาชิก2ตัวแรก
const [first, second] = numbers;

// Destructuring สมาชิกสุดท้าย
const last = numbers[numbers.length - 1];

console.log(first);
console.log(second);
console.log("Last element:", last);