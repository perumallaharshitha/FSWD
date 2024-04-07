// sum of array elements
let arr = [];
for(let i =0;i<5;i++){
    arr.unshift(15,25,35,45,55)
    console.log(arr[i]);
}
let sum =0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log("The sum of array elements is :", sum)