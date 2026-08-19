
/* for of loop 

mainlly use array and Mapss .. 

syntax-> 
for (const index of object) { // object mtb kis cheez per loop chalana hai 
    
}*/

let arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}
// isme jaruri ni hai ki serf array or object per he kaam kare sab per karta hai ye kaam 

let word = 'Hello'
for (const i of word) {
    console.log(`Each char is:  ${i}`);
}

// Maps 
// ye array or dekhe me object  jesa he hota hai but ye alag hai 

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('IN',"India") // kabhi bhi isme same type ki 2 value ni jati hai .. object ya array me chal jati hai but isme ni 
// console.log(map)

for (const i of map) {
    // console.log(i); // isme sab aa jayega key or value 
}
for (const [key, value] of map) {
    console.log(key, '-', value); // isme sab alag alag aayenge 
}

/* Map use arrow function */

const num = [1,2,3,4,5,6,7,8,9]

let newnum = num.map(i => i + 10)
console.log(newnum);

/* output--> 
11, 12, 13, 14, 15,
  16, 17, 18, 19 */