const numbers = [10, 25, 3, 40, 15, 8, 50];

console.log(numbers.length); //Find the length.

console.log(numbers[0]); //Get the first element.

console.log(numbers.pop()); //Get the last element. 

numbers.push(100)
console.log(numbers); //Add 100 to the end.;


numbers.shift() //Remove the first element.
console.log(numbers);


 //Check whether 40 exists.
console.log(numbers.includes(40));

//Find the index of 15.
console.log(numbers.indexOf(15));


//Array methods

//Create a new array containing double each number.
let newArr = numbers.map( num => num*2)
console.log(newArr);

//Get only numbers greater than 20.
let newArr2 = numbers.filter(num => num > 20)
console.log(newArr2);

//Find the first number greater than 30.
let newArr3 = numbers.find(num => num > 30)
console.log(newArr3);


//Calculate the total sum.
let newArr4 = numbers.reduce((acc,current)=>{
    acc = acc + current
    return acc
},0)
console.log(numbers, newArr4);


//find largest in array
let newArr5 = numbers.reduce((acc,current)=>{
    if(acc < current){
        acc = current
    }
    return acc
},0)
console.log(numbers, newArr5);


//tricky map
const users = [
    {firstName:"Vikrant",lastName:'Raikwar', age:26},
    { firstName: "Shigeru", lastName:'Miyamoto', age:75},
    {firstName:"Mario",lastName:'Bros', age:50},
    { firstName: "princess", lastName:'peach', age:26},
]

//list all the names
//["Vikrant Raikwar", ... ]

let allNames = users.map(user=>{
    return user.firstName+ ' ' + user.lastName;
}) 
// let allNames = users.map(user=> user.firstName+ ' ' + user.lastName) 

console.log(allNames);

//[26: 2,75:1,50:1]

let ageGroup = users.reduce((acc,current)=>{
    if(acc[current.age]){
        acc[current.age] = acc[current.age] + 1
    }else{
        acc[current.age] = 1
    }
    return acc
},{})
console.log(ageGroup);

//filter first name of all people whose age is less that 30 - chaining

let lesstThan30 = users.filter(user => user.age < 30).map(user => user.firstName)
console.log(lesstThan30);

//filter first name of all people whose age is less that 30 - using reduce


let lessThan30reduce = users.reduce((acc,current)=>{
    if(current.age < 30){
         acc.push(current.firstName)
    }
    return acc
},[]) 
console.log(lessThan30reduce);
