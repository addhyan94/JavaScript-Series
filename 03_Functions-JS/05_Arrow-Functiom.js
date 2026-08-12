/*const user = {
    username: 'rahul',
    price: 999,

    welcomemsg: function(){
        console.log(`${this.username} Welcome To My Site`);// this ka mtb hai current contects
    }
}

user.welcomemsg()
user.username = 'shram' // call ke bd change kiya to bo function me change ni hoga
// agar change karke call kaiya jaye to change ho jayega naam 
*/
/* Now Arrow Function Start*/
const other = function (){ 
    console.log('This is a normal function ');
    
}
// Is bale arrow function me return dena bahut jaruri hota hai 
const otherone =(num1, num2)=>{
    // console.log('This is a Arrow function ');
    return num1 + num2
}

// is bale arrow function me return ki jarurat ni perti ek line me he pura function bana sakte hai 
const othertwo = (num1, num2) => num1 + num2//console.log('Again This is a Arrow Function');

// Again is bale  arrow function me bhi return ki jarurat ni perti  code ko () iske aander rakh diya jata hai bus 
const otherthree = (num1, num2) => (num1 + num2)//console.log('Once Again This is a Arrow Function'));

console.log(otherone(2,5))
console.log(othertwo(2,6))
console.log(otherthree(9,5))

const RTObject = () => ({name: 'User'}) // iske aander  object return karane ke liye {} lagana he perta hai 

console.log(RTObject());
