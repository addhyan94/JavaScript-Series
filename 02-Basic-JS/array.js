const array = [1,2,3,4,5]

console.log(array[2]); // array ki indexing 0 se hoti hai .. or is time aapna 0,1,2 ese chal rahe hai to jo 2 index pr hai bo nikla rahe hai 

const names = ["Ninza", "Doramon"]
console.log(names);

/*  Array Methods ---------------- */

array.push(6) // push method array ke aander add kr deta hai value ko 

array.pop() // array ke aander jo last value hoti bo delete kr deta hai 

array.unshift(9) // unsift se jo value push karayi hai bo sabse aage hogi add ..push me last me hoti or unshift me sabse aage 

array.shift() // ye same pop ki tarah hai bus ye aage se value delete karta hai peeche se ni 

console.log(array.includes(9)); // ye aapan puch rahe hai ki array ke aander 9 hai ya ni .. 

console.log(array.indexOf(5)); // array ke aander 5 number jis index per hai bo puch rahe hai aapan JS se 

console.log(array); // normmaly Full array print kara rahe hai 


const narray = array.join()// join se simplelly array join hoke sting bana let ahia 
console.log(narray);// yaha kuch change ni hoga 
console.log(typeof narray); // bus jo array tha bo aab string me badal gaya hai 


/* Slice, Splice --------- */

console.log('A', array);
const nn = array.slice(1,3)// isme kya hota hai ki index 1st se leke 3 ke pahel tk print karao.. 3rd bana na karo .. or array me kuch change ni karo 
console.log(nn);
console.log('B', array);

const nnn = array.splice(1,3) // isme kya hot ahai ki 1 se leke 3 tk pure array me se cut karke print kar do .. original array he cut kr do 
console.log('C', array);
console.log(nnn);



const nam = ["Doramon", "Nobita","michain"]

array.push(nam)
// yaha kya hua ki jo array naam ka ek Array tha usme nam bale array ko push kr diay .. to js ne nam bale ko ek value ke type maan liya hai  
console.log(array);  // [ 1, 2, 3, 4, 5, [ 'Doramon', 'Nobita', 'michain' ] ]

let Newnam = nam.concat(array)
// yaha aapn en concat ka use kiya jo ksi bhi array ke aande rarry ki value dalega na ki ek arry ko vlaue banake 
console.log(Newnam);// [ 'Doramon', 'Nobita', 'michain', 1, 2, 3, 4, 5 ]

let newArray = [...array, ...nam]
// ye bahut coman methord hai .. ye arry ko spried kr deta hai .. ek ek element ko alg alg 
console.log(newArray);//[ 1, 2, 3, 4, 5, 'Doramon', 'Nobita', 'michain' ]

const NewOther = [1,2,3,[5,6,4],7,[99,3,88,1752,[25,5552,43664,"Hello"]]]

let confusionArry = NewOther.flat(Infinity)
// array ke ander array ho sakta hai .. usko solve karne ke liye flat ka use karenge 
console.log(confusionArry);
/* Output -> 
[
  1,    2,     3,
  5,    6,     4,
  7,    99,    3,
  88,   1752,  25,
  5552, 43664, 'Hello'
]*/

let what = Array.isArray("SIR")
console.log(what); // Yaha aapan check kar rahe hai ki array hai ya ni 
let what1 = Array.from("SIR")
console.log(what1); // Yaha aapan isko ek array bana rahe hai.. jo SIR likha ahi usko ek eke word me tod ke array me badal diya hai 


