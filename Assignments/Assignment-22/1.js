let string = "aaaabbababababbbbabababaaaa"
let acount=0;
let bcount=0;
for(let i=0;i<string.length;i++){
    if(string[i]=='a'){
        acount++;
    }
    else{
        bcount++;
    }
}
console.log("Frequency of a is : ", acount);
console.log("Frequency of b is : ", bcount);




