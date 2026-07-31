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

console.log(id === secondid );
console.log(id == secondid );


// 2. NonPrimitive DataType -> Array , Floeter , Object , Functions  

