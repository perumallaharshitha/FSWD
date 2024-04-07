// Prime numbers of array;
function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    // Check from 2 to half of num
    for (let j = 2; j <= num / 2; j++) {
        if (num % j === 0) {
            return false;
        }
    }
    return true;
}

let array3 = [15, 26, 37, 48, 59, 60];
console.log("The Array elements :")
for(let i=0;i<array3.length;i++){
    console.log(array3[i])
}
let res3 = [];

for (let i = 0; i < array3.length; i++) {
    if (checkPrime(array3[i])) {
        res3.push(array3[i]);
    }
}

console.log("Prime numbers of array:", res3);