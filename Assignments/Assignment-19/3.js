//  product details
let product ={
    no : 'RZ8T81KDNOR',
    n : 'Galaxy A23',
    model : 'SM-A235F/DS',
    price : 25000,
    dis:function(discount){
        return this.price-(this.price*discount/100);
    }
}
console.log("\nProduct details :")
console.log("Product Nmuber :", product.no)
console.log("Product Name :", product.n)
console.log("Product Model :", product.model)
console.log("Product Price :", product.price)
console.log("Product Discount :", product.dis(25));