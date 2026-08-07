let name = "Tiwari"
let repo = 10

// console.log(name + repo + "value");

// console.log(`Hello my name is : ${name} \n \t \t  & \n My Github Total Repo is : ${repo}`);

const gamename = new String('Shooter')

console.log(gamename[0]); // string ke 0 position per konsa char hai bo mil jayega 
console.log(gamename.length); // string ki length mil jayegi 
console.log(gamename.toUpperCase()); // char full upercase em ho jayega 
console.log(gamename.charAt(5)); // isme aapko 5 position per konsa cher hai bo pata chal jayega 
console.log(gamename.indexOf('t')); // isme aapko ye pata chalga ki ye char konsi position per hai .. 

let newString = gamename.substring(0, 3); // koi bhi string ko tood ke substring bana sakte hai 
console.log(newString); 

const NewAnotherstring = gamename.slice(-7, 2); // yaha per koi bhi value slice hoke dedeta hai 
console.log(gamename);

console.log(NewAnotherstring)

const nameone = " this is a space string .    "

console.log(nameone);
console.log(nameone.trim()); // trim string ke aage or peeche bale space ko hata deta hai 

const url = "https://mtycmp.in.ac.com%20home"
console.log(url.replace('%20', '-')// ye kisi bhi cheez ko replace kar deta hai 
);

console.log(url.includes('.com')) // ye check karta hai aapki string me ye keyword hai ya ni .. hai to true / false
console.log(url.includes('suree'))

const check = "hello_-Guys_-Kese-Ho_-sabhiii"

console.log(check.split("_-"))
// split se jo value dalenge baha se bo split kr dega string ko  - oututIs --> ('hello', 'Guys', 'Kese-Ho', 'sabhiii' )

