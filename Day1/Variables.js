let score = 10;
score = 20 // reassign allowed

const age = 26;
age = 27; // not allowed type error





//const doesnot mean immutable
//imp interview question

const user = {
    name : 'John'
};

user.name = "Mike" // allowed

// why?
//Beacuse const prevents reassignment of binding , not modification of object

user = {} // not allowed
//but
user.name = "Mike"; // Allowed
//similarly:
const arr = [1,2,3]
arr.push(4); // allowed
arr = [2,6] // wrong not allowed





//let and const block scoped

if(true){
 let x = 10;
 const y = 20;
}

console.log(x);// error not accessible
console.log(y);// error not accessible

//But:

if (true) {
    var x = 10;
}

console.log(x); // 10
//This is one reason var can cause bugs.






//shadowing - A variable  inside a block  can have the same name as an outer variable
let name = "John"
{
    let name = "mike"
    console.log(name); // mike
}
console.log(name); // john
//The inner name shadows the outer one.

