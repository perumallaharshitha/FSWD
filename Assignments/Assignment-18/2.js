// Even numbers of array:
let array2 = [15, 26, 37, 48, 59, 60];
console.log("The Array elements :")
for(let i=0;i<array2.length;i++){
    console.log(array2[i])
}
let res2 = [];
console.log("The even numbers of array :")
for(let i = 0 ; i < array2.length; i++){
    if(array2[i]%2==0){
        res2.push(array2[i]);
    }
}
console.log(res2);