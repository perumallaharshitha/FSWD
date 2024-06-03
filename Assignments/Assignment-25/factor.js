// factor.js
const form= document.querySelector("form")
const h2= document.querySelector('.result')
let f1 = form.children[1];
let btn= form.children[2];
form.addEventListener('submit', (event)=> {
    event.preventDefault(); // Prevent form from submitting in the default way
    let v1 = Number(f1.value);
    h2.textContent= v1;
    let factors = findFactors(v1);
   
    h2.textContent = `Factors of ${v1}: ${factors.join(', ')}`;
});

function findFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
