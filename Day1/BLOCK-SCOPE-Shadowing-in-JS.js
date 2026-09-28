{
 var a = 10   
 let b = 20
 const c = 30   

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b);
// console.log(c);


//shadowing var
var e = 100
{
 var e = 10
 console.log(e); 
}
console.log(e);
//shadowing let 
let g = 100
{
    let g = 10
    console.log(g); //10
}
console.log(g); // 100

//shadowing const 
const f = 100
{
    const f = 10
    console.log(f); //10
}
console.log(f); // 100