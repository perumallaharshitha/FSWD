
// student marks
let student=[
    { 
        name:"ravi",
        marks :{ 
                    maths: 89, 
                    physics : 70 , 
                    chemistry :88
                }
    },
    { 
        name:"bhanu",
        marks :{ 
                    maths: 98, 
                    physics : 50 , 
                    chemistry :68
                }
    },
    { 
        name:"kiran",
        marks :{ 
                    maths: 50,
                    physics : 82 , 
                    chemistry :94
                }
    },
]
function high(sub) {
    let maxi = 0;
    let name = "";
    for (let i = 0; i < student.length; i++) {
        if (student[i].marks[sub] > maxi) {
            maxi = student[i].marks[sub];
            name = student[i].name;
        }
    }
    return name;
}

console.log("The student with the top marks in maths is: " , high("maths"));
console.log("The student with the top marks in physics is: " , high("physics"));
console.log("The student with the top marks in chemistry is: " , high("chemistry"));