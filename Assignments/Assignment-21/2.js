let array=[1,2,3,4];
console.log("The Array is: ")
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
let newarray =array.map((n,ind)=>n+(ind+1)*10);
console.log("The New Array is: ");
for(let i=0;i<array.length;i++){
    console.log(newarray[i]);
}