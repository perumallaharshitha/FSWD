let a = 25
let b = 56
let c = 79
console.log("The value of a is : "+a)
console.log("The value of b is : "+b)
console.log("The value of c is : "+c)
console.log("\n")
if(a>b) {
    console.log("Greatest of two numbers is : "+a)
}
else {
    console.log("Greatest of two numbers is : "+b)
}
if(a>b && a>c){
    console.log("Greatest of three numbers is : "+a)
}
else if(b>a && b>c){
        console.log("Greatest of three numbers is : "+b)
}
else{
        console.log("Greatest of three numbers is : "+c)
}
let n = 56
function findFactors(n) {
    let fact = " ";
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            fact+= i+ " ";
        }
    }
    return fact;
}
const fact = findFactors(n);
console.log("Factors of " + n + " are : ");
console.log(fact)

let p = 23
console.log("p is : "+p)
function isPrime(p){
    if(p==1)
    return false
for(let i=2;i <= Math.sqrt(p);i++){
    if(p%i==0){
        return false
    }
}
return true
}
if(isPrime(p)){
    console.log(p + " is a Prime Number.")
}
else{
    console.log(p + " is not a Prime Number.")
}
function printEvenFactors(z) {
    for (let i = 1; i <= z; i++) {
        if (z % i === 0 && i % 2 === 0) {
            console.log(i);
        }
    }
}
let z = 12;
console.log("Even factors of " + z + ":");
printEvenFactors(z);

function sumOfDigits(number) {
    let numAsString = number.toString();
    
    // Initialize sum to 0
    let sum = 0;

    // Loop through each digit of the number
    for (let i = 0; i < numAsString.length; i++) {
        // Convert each digit back to a number and add it to the sum
        sum += parseInt(numAsString[i]);
    }
    
    // Return the sum
    return sum;
}

// Function to take user input
function getUserInput() {
    let userInput = prompt("Enter a number:");
    return parseInt(userInput);
}

// Get user input
const inputNumber = getUserInput();

// Check if the input is valid
if (isNaN(inputNumber)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    // Calculate the sum of digits
    const sum = sumOfDigits(inputNumber);
    console.log("Sum of digits of " + inputNumber + " is: " + sum);
}

    