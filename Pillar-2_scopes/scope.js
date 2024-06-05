// var teacher  ="sanket "
// function fun(){
//     content="js"//auto-global
//     var teacher = "pulkit";
//     console.log(teacher);
// }
// function gun(){
//     var student ="Aditya"
//     console.log(student);
// }
// fun();
// gun();
// console.log(content)
// console.log(teacher);
 
//Another case 
var teacher  ="sanket "
function fun(){
    content="js"// parsing phase will ignore this because it is not in a formal declaration 
    var teacher = "pulkit";
    console.log(teacher);
}
function gun(){
    var student ="Aditya"
    console.log(student);
}
console.log(content)// not accessible because parsing phase ignore this and in execution phase it not reached while we want to acess it.

fun();
gun();

console.log(teacher);