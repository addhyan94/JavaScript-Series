/* for in loop 

mostlly use object .. esa ni ahi ki serf object but mostlly time object ke liey ajda sahi ahi 

syntax -->
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
}
*/

let obj = {
    js :' javascript',
    cpp: 'C++'
}

for (const key in obj) {
//    console.log(key);// isme serf object ki keys aayegi not values
//    console.log(obj[key]); // aab isme serf value aayegi 
   
   console.log(`${key} Shortcut is for ${obj[key]}`);
}