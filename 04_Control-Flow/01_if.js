
// agar is ki condition true hai to code scope se aander jayega .. or condition False hue to code scope ke aander ni jayega
if (true) { 
    console.log('Hello This is True'); 
}
if (false) { 
    console.log('Hello This is False ');
}
// Serf true bala run hua kuki uper bataya gaya hai ki condition hamesha check hoti hai agar check shai hai to ture tabhi run hoga 

if (2 == 2) {
    console.log('Yes 2 equal hai 2 ke ye true hai ');
}

let userishear = true
if (userishear) {
    console.log('Yes User yaha hai ');
    
}

/*  Operators jo If me use karte hai 
< --> Lessthen  
> --> greeterthen
<= --> gretterthen equal 
>= --> Lessthen eQual 
== --> Equal 
!= --> NotEqual 
=== --> DataType Check 
!== --> Not Equal Datatype  */


let scoree = 201

// if (scoree > 100) console.log('yes ye bhi if condition hai ');
  
 /* loggical operoter ->
 && --> jab dono condition sare true ho to aage jane do  .. or ek false or ek true to ni jane do 
 || --> jab koi bhi ek condition true ho to jane do .. dono false to ni jane do ... barna jane do 
 
 */ 

 const userloggedin =true
 const payment = true

 if (userloggedin && payment) {
    console.log('Allow user access my code ');
 }
 /* yaha hua kya .. yaha aapn check  kar rahe ahi ki user logged in hai .. agar haa to ok
 or fer user ne payment ki hai .. agar true to tk hai 
 to sath me he dono true hona chaiye jabhi aage ka code access kar sakta hai 
 isliye && use kiya hai  */

let loggedin = false
let paymentyes = false
let followyou = true

if (followyou || paymentyes || loggedin) {
    console.log('Welcome User ');
}
/* yaha kya hau .. user ne na logged in kiya na payment ki bus follow kiya to aapan ne uska welocme kar diya 
agar teeno true hote to bhi chalta agar 2 true hote to bhi chalta or 1 true hai to bhi chal rhaha hai 
agar user ne follow ni kiya hota .. sare false hote to welcome ni hota .. */

/* Nullish Coalescing Operator (??): Null, Undefined*/

// let value1 = 5 ?? 10 // samjho ki 5 ni to 10 sahi 

// value1 = null ?? 10
// yaha aapne kiya ki agar response me null aaya to 10 dedo null ni do 
 
value1 = undefined ?? 50
// same boi jo uper bataya ... 

console.log(value1);

/* Terniary operator........................ */

// if-else ka beta bol sate hai 
// syntex ->
// condition ? true : false

let myscore = 500
myscore >=800 ? console.log("less then 800") : console.log("more then 100")

