// Const se cheze badlti ni hai ... ( aab isko change ni kar sakte )
const rollNumber = 20015;
// Ye change bhi ho sakti hai aapki marzi se ( jada ter isko use karte hai jab jarurat parne per change kr le )
let email = "hello@gmail.com";
// 
var password = "2002";

city = "Delhi";

//  Cghalo jo cheze hai unko change karke dekhte hai kesa kya hota hai ...

// rollNumber = 20014; ( Run karne per Error aa rha hai kuki Const hai isliye isko change ni kar sakte hai )
// console.log(rollNumber);

email = "change@gmail.com"
// console.log(email);
// ( Ye email; change ho gayi hai kuki ye let thi isko jab chaho jab change ho skati hai koi rouler ni hota hai isme isliye ye yaha per change ho gayi hai )

password = "2001";
// console.log(password);
// ( Var ek bahut kamjoor variable hai jo kahi bhi change ho jata hai agar isko aapne ek loop ya ek condition me crate kiya hai to ye us loop ya condition ke bahar apply ni hoga or ye hamesha kabhi bhi change ho jata hai ..)
city = "Indor"
// ( Console.log(...) ye to sab use karte hai or ye ek br me ek he cheez print kar sakta hai to iski jage aapna ...)
console.table([rollNumber, email, password, city])
//( rtable ke aander ke sath bahut sari cheeze print karta karte hai coma laga ke or ye ek table ki roop me aapna ko output me milegi ..)