// Employee details
class employee{
    constructor(name,age,basic){
        this.name=name;
        this.age=age;
        this.basic=basic;
    }
}
employee.prototype.salary=function(){
    return this.basic;
}
let e1 =new employee("Sidhharth",23,51000);
let e2 =new employee("Mohit",20,52000);
let e3 =new employee("Harshitha",18,53000);
let e4 =new employee("Aditya",16,54000);
let e5 =new employee("Yukta",15,55000);
console.log("The Salary of employee 1 is: " ,e1.salary());
console.log("The Salary of employee 2 is: " ,e2.salary());
console.log("The Salary of employee 3 is: " ,e3.salary());
console.log("The Salary of employee 4 is: " ,e4.salary());
console.log("The Salary of employee 5 is: " ,e5.salary());