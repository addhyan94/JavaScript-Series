const score = 400

const balance = new Number(100)
console.log(balance);

Balance = new String(balance) // yaha per balance ek string me convert ho gaya hai and Balance me save ho gaya hai 

console.log(Balance);

console.log(typeof balance) //iska Object aayega kuki ye ek New keyword se bana hua hai 

console.log(typeof score) // ye simplyy he banaya gaya hai to number he aayega .



console.log(typeof balance.toString()); // same yaha per bhi aab jo balance tha bo string me convert ho gaya hai ..

console.log(balance.toFixed(2)) // yaha per jese koi bhi calcualtion ki to kabhi kabhi float me number aate hai bo abhut bade hot ehai to point ke badd bale number ko fix karne ke liye use hota hai 

const authernumber = 25.9965412

console.log(authernumber.toPrecision(3)); // isme kya hota hai ki jo aapna float numver hai usko precision kr deta hai .. meens -> aapna bolte hai ₹ 24.9 dene hai kisi ko to aapan bolte hai point ku dekhna ₹ 25 dedo .. same boi cheez hai yaha point ke phlae jo value hai usko jada focus kiya jata hai 

const hhh = 1000000

console.log(hhh.toLocaleString('en-In'));

/*-------  Now Start Math Methords ------- */

console.log(Math);
console.log(Math.abs(-24)); // abs serf negitive (substraction) number ko Positive ( addition ) number me aa kr deta hai .

console.log(Math.round(4.3)); // ye serf float ( point ) number hata deta hai simple int me he deta hai result 

console.log(Math.ceil(5.2));// ye point ko hatake number bada deta hai jese 5.2 hai to bo seedhe 6 kar dega point hatake .. 

console.log(Math.floor(4.9));// ye serf point ke aage ka he number lega bus ..

console.log(Math.min(4,5,3,7,2,8,0,1,9)); // Min se .. array ke aander jo sabse choti value hoti hai bo aa jati hai 
console.log(Math.max(4,5,3,7,2,8,0,1,9)); // Max se .. array ke aander jo sabse Badi  value hoti hai bo aa jati hai 

let num = Math.random(); // ye koi bhi rendom number gernate kar deta hai but poin me ( 0 or 1 ) me he answer aayega hamesha 
console.log(Math.round((num*10))+1);
/*yaah aapne ne round off kr diya hai jisse point me number na mile fer usko kr diay *10 mtn jo random number point me bana hai bo ek point peeche ho jaye .. fer + 1 kr diya jisse 0 na mile 0 se bada he mile .. */
// -----------------------------------------------------------------
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)));/* yaha aapn ne ek fix number me niklna tha minium number 10 or maxuam number 20 tha to uper aapne 10 se multiply kiya tha but yaha aapne max se min ko subtact kiya fer +1 kiya jisse 0 na mile .. but yaha per aapan ko aabhi bhi 10 se chota mil rhaha tha to neeche  */

let tt = Math.random() * (max - min + 1) + min
console.log(Math.floor(tt));
/*  to yaha per continue kiya ki + min kr do jisse min ke uper he mile aapn lo result mtb 10 se uepr he mile 10 se neeche ni ..  */