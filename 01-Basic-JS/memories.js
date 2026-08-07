// Memoryes is tow type 
/* 1 - Stack ( Primitive ) 
--> isme uper ke br dicealr karne per bd me value change kr do to change ho jati hai but uper change ni hoga ( dono me alag alag value rahegi ) */
/*2- Heap ( Non-Primitive )
isme agar ek br jo decler kiya to boi hoga a-or bd me value change karo to dono me he change ho jayegi (sath me change hoti hai value ...) */
let nameis = "My_second_name" // this is primitive type 

let secondNameis = nameis;
secondNameis = "My-Chaange-name"
console.log(nameis,secondNameis);

let user1 = {
    email : "user11@gamil.com",
    name : "userDitiles",
    age : 23,
    Stating_Timing : "10Am",
    End_Timing : "9PM"
}
let user2 = {
    email : "seconduser@gamil.com",
    name : "Empolly",
    age : 20,
    Stating_Timing : "10Am",
    End_Timing : "9PM"
}

console.log(user1,user2);
// Her is Non-Primitive ...
let userTow = user1

console.log(userTow);

userTow.email = "Googleee@gmail.com" 

console.log(user1.email);
console.log(userTow.email);

