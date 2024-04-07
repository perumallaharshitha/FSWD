
// Sum of Array elements:
let array1 = [15, 26, 37, 48, 59, 60];
let res1 = [];
console.log("The numbers of array :")
for(let i = 0 ; i < array1.length; i++){
    res1.push(array1[i]);
}
console.log(res1);
let s=0;
for(let index=0;index<array1.length;index++){
    s = s+array1[index]
}
console.log("The sum of array elements :", s)