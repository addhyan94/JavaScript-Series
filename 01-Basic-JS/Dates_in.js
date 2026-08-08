// Dates
let Mydate = new Date();

console.log(Mydate); // 2026-08-08T14:11:49.566Z

console.log(Mydate.toString()); // Sat Aug 08 2026 19:41:49 GMT+0530 (India Standard Time)
console.log(Mydate.toDateString()); // Sat Aug 08 2026
console.log(Mydate.toTimeString()); // 20:34:07 GMT+0530 (India Standard Time)
console.log(Mydate.toISOString()); //2026-08-08T15:04:07.102Z
console.log(Mydate.toJSON()); // 2026-08-08T15:04:07.102Z
console.log(Mydate.toLocaleDateString());//8/8/2026
console.log(Mydate.toLocaleTimeString());//8:34:07 PM
console.log(Mydate.toLocaleString());//8/8/2026, 8:34:07 PM

console.log(typeof Mydate); // date ka type hamesha Object aayega 

let createDate = new Date(2023, 0, 23) // ye ek custome Date declear kr sate hai .. or isme Starte Month 0 sehota hai 0 to 11 pure 12 month .. 
console.log(createDate.toDateString()); // Mon Jan 23 2023

let createDate2 = new Date(2023, 0, 23, 5, 3) // 1- year , 2- Month , 3- Date , 4- Hour , 5- Minite 
console.log(createDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM

let createDate3 = new Date("2025-01-12") // ye actuall Date formate hai ( yy-mm-dd ) isme month 1 se he chalu hota hai .. 
console.log(createDate3.toDateString()); // Sun Jan 12 2025

let createDate4 = new Date("01-18-2025") // Date Formate - ( mm-dd-yy )
console.log(createDate4.toLocaleString()); // 1/18/2025 

let Mytime = Date.now() 
// console.log(Mytime); //ye time hamesha milisecond me aayega 

console.log(Date.now()/1000); // ye second me aa jayega 
console.log(Math.floor(Date.now()/1000)); // jo point me aaya usko hatane ek liye


/* Some New Methords */

let newDate = new Date()
console.log(newDate);// 2026-08-08T17:05:28.367Z
console.log(newDate.getDate());//8
console.log(newDate.getDay());//6
console.log(newDate.getFullYear());//2026
console.log(newDate.getHours());//22
console.log(newDate.getMilliseconds());//367
console.log(newDate.getMinutes());//35
console.log(newDate.getMonth() + 1);//8
console.log(newDate.getSeconds());//28
console.log(newDate.getTime());//1786208728367
console.log(newDate.getTimezoneOffset());//-330
console.log(newDate.getUTCDate());//8

/* Coustom Date / Time kuch bhi deine kar sakte hai ..  */
let hhh = newDate.toLocaleString('default', {
    weekday:"long",
     
})

console.log(hhh); // day batayega 
