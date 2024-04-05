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
console.log("\n")
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
console.log("\n")
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
console.log("\n")
let z = 12;
console.log("Even factors of " + z + ":");
printEvenFactors(z);
console.log("\n")

let m = 1234;
let sum = 0;
let rev = 0;
let temp = m; 

while (temp > 0) {
    rev = temp % 10;
    sum += rev;
    temp = Math.floor(temp / 10);
}

console.log(sum);  