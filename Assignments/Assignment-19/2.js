// student details
let stu ={
    Name : 'vijay',
    Roll : 5101,
    address :{
    College : 'PVPSIT', 
    City : 'Vijayawada',
    Country : 'India',
    },
    marks : [60, 70,120, 100],
    agg:function(){
        let s = 0;
        for(let i=0;i<this.marks.length;i++){
            s+=this.marks[i];
            return s/this.marks.length;
        }
    }
};
console.log("\nStudent Details :")
console.log("Name :", stu.Name)
console.log("Regd.no :", stu.Roll)
console.log("Address :", stu.address)
console.log("Marks :", stu.marks)
console.log("Aggregation of marks :"+stu.agg())
