import { employees } from './module1.js';

console.log("1. Find the names of employees of Hyderabad");
let stack = [];
for (let a = 0; a < employees.length; a++) {
    if (employees[a].address.city === "hyderabad") {
        stack.push(employees[a].name);
    }
}
console.log(stack);

console.log("2. Find the name and address of employees whose age is between 40 and 50");
for (let b = 0; b < employees.length; b++) {
    if (employees[b].age >= 40 && employees[b].age <= 50) {
        console.log(employees[b].name, employees[b].address);
    }
}

console.log("3. Find the employees who are not from Hyderabad");
for (let c = 0; c < employees.length; c++) {
    if (employees[c].address.city != "hyderabad") {
        console.log(employees[c].name);
    }
}

console.log("4. Find the names (array of names) of employees whose skill is reactjs");
let reactjs = [];
for (let d = 0; d < employees.length; d++) {
    if (employees[d].skills.includes("reactjs")) {
        reactjs.push(employees[d].name);
    }
}
console.log(reactjs);
