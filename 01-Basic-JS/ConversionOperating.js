let score = 23;
let score2 = "23abc";// ye ek string hai 
console.log(typeof score);
console.log(typeof (score2));


let change = Number(score2); // yaha per string ko number me change kr rahe hai ...
console.log(typeof (change)); // jo change kiya uska type check kar rhe hai ki kya hai ...
console.log(change); // jo change hua usko print kiya 
// but print karne per NAN aa rha  hai because score2 me ek string thi 23abc naam se kuch number or kuch words to bo words ko change ni kr paya to NAN aaya ( Not A Number )...Number me change to hoga uska type but string me words hai to NAN he aayega ...  
/*.......................................................*/
// Number e change karne per kuch cheze esi aayegi ... 

// number bala string -> "33" => 33 ( number mil jayega )

// word + number -> "25abc22" => NAN ( type change hoga but qesult NAN aayega )

// boolean type -> true => 1 , false => 0 ( ye change ho jayega but 1 or 0 ke form me result aayega )

// undefine ko change karenge to ( type hange ho jayega but result NAN he aayega )

// agar null ko change akrenge to ( type change ho jayega but result aayega 0 .. )


/* Same hear boolean me cheze change karne per  */

let loggedin1 = 1;
let boologin1 = Boolean(loggedin1);
console.log(boologin1);

/* yaha loggedin1 me 1 pass kiya to result true aayega  */

let loggedin2 = 0;
let boologin2 = Boolean(loggedin2);
console.log(boologin2);

/* yaha loggedin2 me 0 pass kiya to result false aayega  */

let loggedin3 = "";
let boologin3 = Boolean(loggedin3);
console.log(boologin3);

/* yaha loggedin3 me kuch bhi pass ni kiya  to result false aayega  */

let loggedin4 = "pass";
let boologin4 = Boolean(loggedin4);
console.log(boologin4);

/* yaha loggedin4 me string pass ki mtb kuch bhi pass kiya to result true aayega   */

// same hear yaha per string me change karnege 

let check = 12;
let changecheck = String(check);
console.log(changecheck);
console.log(typeof (changecheck))
// yaha aapna ne ek number diya usko string me change kiya to result 12 aaya but type string me change ho gaya 