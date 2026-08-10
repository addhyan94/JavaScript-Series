// Singleton 
/* object.create */

// object literals 

let user = {
//   KEY : Value 
    name : 'Admin',
    age: 20,
    email: "admin@gmail.com",
    address: 'Delhi'
    
}
console.log(user.email);
console.log(user["email"]);// ese declear karke print karana jada better hota hai 

user.email = "empolly@microsoft.in"// yaha aapne ne object ke email ko change kr diay hai 
console.log(user);

Object.freeze(user)// yaha aapne en object ko freeze kr diya aab usme koi chenge ni hoga .. 
user.name = "Chnage"
console.log("Object freeze hai fer name change kiya = " ,user.name , " :: Ye name change ni hau ");


user.greeting = function(){
    // console.log("Hello User this is a Function inside object");
    console.log(`Hello ${this.name} master `);
}
// console.log(user.greeting);//[Function (anonymous)] .. ye exculate ni hua but reference aa gaya 
console.log(user.greeting());//



// const appu = new Object() /* ye ek Singleton Object hai -- ye optput me empty dega */
const appu = {} /* YE ek NonSingleton Object hai -- ye bhi output me Empty he dega  */

appu.id = "HI4225"
appu.name = "Ramesh"
appu.isLogin = false
// console.log(appu);

const otheraPpu = {
    email: "ramesh@google.cpm",
    fullname: { // yaha sim ple object ke aander object bane hue hai 
        userfullname: {
            firstname : "Rahol",
            lastname : "Sharma"
        }
    }
}

console.log(otheraPpu.fullname);
console.log(otheraPpu.fullname.userfullname);
console.log(otheraPpu.fullname.userfullname.firstname);// object ke aander object ko access karne ke liye ese use kar sakte hai 


let obj1 = {1: 'a', 2: 'b'}
let obj2 = {5: 'D', 6: 'H'}

// let object3 = Object.assign(obj1, obj2) // ye dono object ko ek bana deta hai 
// let object3 = Object.assign({}, obj1, obj2) // Ye bhi dono ko ek banata hai but ye empty object me dalke ek banata hai fer object3 me save karta hai 
let object3 = {...obj1, ...obj2, ...appu} // simplly object ko sprit kr deta hai assign bagera kuch ni karna parega .. same array me bhi hota hai isme bhi ho rhaah hai
// console.log(object3);

const MainUsers= [
    {
        id: 512,
        name: 'Sonu',
        email: 'sonu3224@gmail.com'
    },
    {
        id: 513,
        name: 'sonumm',
        email: 'sonumm3224@gmail.com'
    },
    {
        id: 515,
        name: 'Hemit',
        email: 'Hemit3224@gmail.com'
    },
    {
        id: 588,
        name: 'gupta',
        email: 'gupta3224@gmail.com'
    }
]

console.log(MainUsers[1]['email'])// isme simple jo object me 1 index per hai uski email nikal do.. to dedi js ne 
console.log(Object.keys(appu)); //isme aapan appu bale object ki keys nikal rahe hai .. MTB array me index hota hai OBJECT me KEYS hoti hai 
console.log(Object.values(appu)); // jese keys nikali thi jese he values bhi nikala ja sakta hai 

console.log(Object.entries(appu));// isme jo jo key or value hoti hai usko ek array me aban diya jata hai .jese ( [name : Rahul] [age : 25] ) ese her ek pair ko array em convert kar diya jata hai ... 

console.log(appu.hasOwnProperty('name')); // yaha aapne object se pucgh rahe hai ki ye KEY hai tumare pass ya ni .. hai to true barna false 


const Course = {
    name : 'Javascript',
    price: 999,
    Plateform: 'Youtube'

}

// console.log(Course['name']);

// const {name} = Course// yaha aapne ek br declear karenge to bo br br course.name likhne ki jarurt ni hogi 
const {name: nn} = Course // yaha aapne usko ek chota naam de sakte hai ya naam ko change kar sakte hai
console.log(nn); 


