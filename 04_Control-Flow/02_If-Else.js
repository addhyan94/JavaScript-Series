/* Now IF-Else start  */

/* What is else ? & Why use ?
//  -> if hamesha condition check karta hai agar condition tru to if ke aander ka code run karo .. but problem is jab false ho jaye to kya run karo .. 
to else ka use karte hai .. sapose else na lagaye 
*/
// let temperature = 40;
let temperature = 60;
if (temperature < 50) {
    console.log('Temperature is less than 50');
}
console.log('No Temperature is More than 50');
 /* Dekho problem yaha aayi ki agar 50 se chota hai to if chal gaya or if ke bd bala code bhi chal gaya  */
 /*chalo aab temp ko 60 kr diya aab condition false ho gayi to if ni chala or dusra bala chal gaya to shai answer diya agar 50 ni hai to more then 50 dekhao 
 but jab if true hua tab bhi bd me more then 50 show hua he na .. 
 isko fix karne ke liye else ka use kiya jata hai  */

 // let temp = 40;
let temp = 60;
if (temp < 50) {
    console.log('Temperature is less than 50');
}
else{
console.log('No Temperature is More than 50');
}

/*aab yaha agar 50 se kam hai to serf less then 50 he dekhega  */
/* or agar 50 se jada hai to serf more then 50 he dekhega .. isliey else ka use kiya jata hai  */
