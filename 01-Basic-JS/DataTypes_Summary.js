// Data type is 2 Type 
// 1. Primitive Data Type 
// 2. NonPrimitive DataType

// 1. Primitive DataType -> String , Boolearn , Number , NULL , Undefine .

const score = 100; 
//  Js me ek sabse mazedar cheez hai ki JS ko kabhi batana ni parta hai ki konsa type me dal rhaha hu ( for ex - C me in lagana part atha jisse data type o pat ahi .. but yaha JS me kuch es ani hota hai )
// Agar aapan ko ek fix karn hai ki score me bus number he jaye ya string he jayye to esa karte hai .. 
// const scoree:number = 100;

const isrannyday = false
const istrainontime = null;
// const isLongout ; // this is a undefine Data type...

const id = Symbol ('123') // ye ek symbol data type hai .. ye number ni aab ek sumbol ban gaya hai 
const secondid = Symbol('123') // ye dono alag alag hai dekh same rahe hai but hai alag alag 

console.log(id === secondid ); // ye iska type check karega 
console.log(id == secondid ); // ye iski value check karega

let bigNumber = 2345675687526562n 
// isme jitna bada number hota to isko declear karne ke liye last me n laga denge jisse js aapne aap he usko bigint me big number lele


// 2. NonPrimitive DataType -> Array , Object , Functions  

let fruits = ["Apple, Mango, Banana"] // This is a simple Array 

// Hear is a Object 
let obj = {
    name: "Sir",
    age: 30
}

// functions 

 let functions = function(){
console.log("Hello Sir");
 }

 console.log(typeof bigNumber);
 console.log(typeof functions);
 /*---- -------------- Value of typeof  
undefined = "undefined"
Null = "object"
Boolean = "boolean"
Number = "number"
String = "string" */

