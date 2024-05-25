let word = true;
const prObj = new Promise((fulfilled, rejected) => {
    setTimeout(() => {
        if(word==true)
            fulfilled('Promise is fulfilled');
        else
            rejected('Promise is rejected');
    }, 5000);
});
console.log(prObj);

prObj
.then((fulfilled) => {
    console.log(fulfilled);
})
.catch((fail) => {
    console.log(rejected);
});

let wish = true;
const wsObj = new Promise((fulfilled, rejected) => {
    setTimeout(() => {
        if(wish)
            rejected('Promise is rejected');
        else
            fulfilled('Promise is fulfilled');
    }, 5000);
});
console.log(wsObj);

wsObj
.then((fulfilled) => {
    console.log(fulfilled);
})
.catch((error) => {
    console.log(error);
});