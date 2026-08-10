function print () {

console.log('H');
console.log('E');
console.log('L');
console.log('L');
console.log('O');

}
 print()

 function addnum(a, b){ // function me elements (Perameters) ko batan ni perta int chaoiye ya string JS automatic leleta hai aapne hisab se 
    num = a + b 
    // return(num)
    
    console.log(num);
    
 }
//  console.log(addnum(5, 9)); // ayah per ese bhi kr sakte hai function me return karake 
 addnum(2, 3 ) // yaha aapne ko value (arguments) deni perti hai 
 addnum(2, 'h') // JS aapne hisab se bana leta hai to yaha aap string bhi dedo to bhi kaam kr deta hai bo 


function loginuser(urname) {
    return `${urname} Just Logged Inn`
}
console.log(loginuser("Tiwari Ji")); // Return me ->  Tiwari Ji Just Logged Inn 
console.log(loginuser(""));  // Return me ->  Just Logged Inn 
console.log(loginuser());  // Return me -> Undefine Just Logged Inn .. Kuki kuch define he ni kiya gaya hai argument me 

/* agar humko chaiye hai ki agar user ne khali argument bhej diya hai to Error aaye to esa kr sate hai */

function loginuser(urname) {
    // if (urname === undefined) {
    if (!urname) { // is line ka bhi same mtb hai ki username undefine hai to error msg dedo .. 
        console.log(`Please Enter Username `);
        return // yaha return kara diya hai jisse agar if ture hua to bo return kr dega aage ni barega code isliye isme else ki jarurat ni paregi .. 
    }
        return `${urname} Just Logged Inn`
}
/* agar aab user kuch bhi pass na kare to uske pass ek error msg aa ajyega undefine output ni aayega */
console.log(loginuser()); //Please Enter Username 
// console.log(loginuser("Name")); //Name Just Logged Inn


/*agar humko chaiye hai ki user khali bhej he na paye .. or agar Bychange khli aa jaye to aapna system automatic usko fill kar de ByDefult */
function loginuser(urname = "User") {
        return `${urname} Just Logged Inn`
}
// yaha aapne ne khali agrument bheja hai but fer bhi output me automatic argument fill kar diya hai .. 
// console.log(loginuser()); // Output- > User Just Logged Inn 
// or agar argument bheja to argument he jayega By Defult bala ni aayega fer 
console.log(loginuser("Addhyan")); // Output -> Addhyan Just Logged Inn
