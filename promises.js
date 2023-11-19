console.log("this is promises");

const students = [
    {name: "zuveria", subject: "maths"},
    {name: "mamatha", subject: "science"}
]

function enrollStudents(student){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
students.push(student);
console.log("students are pushed");
const error = false;
if(!error){
    resolve();
} else{
    reject();
}

        }, 1000);
    })
}