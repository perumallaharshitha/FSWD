const form = document.querySelector("form");
const res = document.querySelector(".result");
let n1 = form.children[1];
let n2 = form.children[3];
    let add = document.querySelector('.add')
    let sub = document.querySelector('.sub')
    let mul = document.querySelector('.mul')
    let div = document.querySelector('.div')
    let mod = document.querySelector('.mod')
let v1 = Number(n1.value);
let v2 = Number(n2.value);

form.addEventListener('submit', (event) =>{
    event.preventDefault()   
})

add.addEventListener('click',()=>{
    res.textContent =  Number(n1.value) + Number(n2.value)
})
sub.addEventListener('click',()=>{
    res.textContent = Number(n1.value) - Number(n2.value)
})
mul.addEventListener('click',()=>{
    res.textContent = Number(n1.value) * Number(n2.value)
})
div.addEventListener('click',()=>{
    res.textContent = Number(n1.value) / Number(n2.value)
})
