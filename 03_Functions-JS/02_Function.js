/* Ek argument ki jage 3-4 se bhi jada argument pass karte hai ...  */
function calculatePrice(...Num1) { /* yaha aapan rast option kr rahe hai .. isko sprit bhi bolte hai or rast bhi .. 
    sprit kisi bhi orbjct ya array ko alag alag karne ke liye use hota hai 
     or rast kisi bhi values ko array me banane ke liye bhi use me laya ja sakta hai*/ 

    return Num1
}

// console.log(calculatePrice(200, 400, 500)); // yaha multiple value pass ki .. agar rast ka use ni karte to ek br me ek he jata .. aab chahe jitna value bhej do sab leke bo ek array me convert kr dega 

const user = {
    name: "rahul",
    items: 3,
    ammount: 210000
}
/* Object ko Function me pass karte hai ..  */
function handel(anyobject ){
    // console.log(`User Name : ${anyobject.name} and Total Prise : ${anyobject.ammount}`);

}

// handel(user); // phale se define object ko bhi aapan function me bhej sakte hai 
handel({
    name : 'sham',
    ammount: 200
}); // ya khud ka call karte time bhi object banake usko bhej sakte hai 

/* array ko Function me pass karate hai  */
const mynewarray= [200, 400, 800, 10]

function checkker (getarray){
    return getarray[2]
}
console.log(checkker(mynewarray));// yaha aapne ne ek predefine array ko function me bhejke uski 2ed index bali value ko nikalke print karaya hai
console.log(checkker([500,10,20,60,80,70]));// yaha aapne ne call ke time he  array ko function me bhejke uski 2ed index bali value ko nikalke print karaya hai

 