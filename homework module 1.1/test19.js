// 19. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions / 
// Functions
// Instruction:
// - Write a JavaScript function, sumPositiveNumbers(numbers), that calculates the sum 
// of all positive numbers in an array. The function should return the sum of positive 
// numbers. If the array is empty or contains no positive numbers, the function should 
// return 0.
// Initiate code:
// // Insert your code here
// console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150]));
// console.log(sumPositiveNumbers([-1, -2, -3])); 
// console.log(sumPositiveNumbers([])); 
// output
// 42
// 0
// 0
function sumPositiveNumbers(numbers) {
    let sum = 0;
    for (let number of numbers) {
        if (number > 0) {
            sum += number;
        }
    }
    return sum;
}

console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150])); // Output: 42
console.log(sumPositiveNumbers([-1, -2, -3])); // Output: 0
console.log(sumPositiveNumbers([])); // Output: 0
