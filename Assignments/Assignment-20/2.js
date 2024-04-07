
// Product details
class product{
    constructor(brand,price,model){
        this.brand=brand;
        this.price=price;
        this.model=model;
    }
    dis = function(discount){
        return this.price-(this.price*discount/100);
    }
}
let p1=new product("Apple",150000,"iPhone 15 Pro");
let p2=new product("Redmi",78000,"11 prime 5g");
let p3=new product("Vivo",92000,"T2 Pro 5g");
let p4=new product("Oppo",100000,"F21 Pro");
let p5=new product("Samsung",120000,"Galaxy A23 5g");

console.log("The Discount of Product 1 is: ",p1.dis(15)); 
console.log("The Discount of Product 2 is: ",p2.dis(14));
console.log("The Discount of Product 3 is: ",p3.dis(13));
console.log("The Discount of Product 4 is: ",p4.dis(12));
console.log("The Discount of Product 5 is: ",p5.dis(11));