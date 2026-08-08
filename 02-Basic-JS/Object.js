// Singleton 
/* object.create */

// object literals 

let user = {
//   KEY : Value 
    name : 'Admin',
    age: 20,
    email: "admin@gmail.com",
    address: 'Delhi'
    
}/*
console.log(user.email);

user.email = "empolly@microsoft.in"// yaha aapne ne object ke email ko change kr diay hai 
console.log(user);

Object.freeze(user)// yaha aapne en object ko freeze kr diya aab usme koi chenge ni hoga .. 
user.name = "Chnage"
console.log("Object freeze hai fer name change kiya = " ,user.name , " :: Ye name change ni hau ");
*/

user.greeting = function(){
    console.log("Hello User this is a Function inside object");
}
console.log(user.greeting);//[Function (anonymous)] .. ye exculate ni hua but reference aa gaya 
console.log(user.greeting());//

