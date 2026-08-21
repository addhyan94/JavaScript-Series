/* For each loop

Mostlly time array ke liye ye jada comfitable raheta hai 

syntax -->
array.forEach(element => {
    console.log(element)
});*/

let arr= [1,2,3,4,5,6]
// arr.forEach(function (item) { // simplly Callback function banaya jata hai 
//     console.log(item);
// });


arr.forEach(item => { // uper normal function tha ye ARROW function hai 
    console.log(item);
});

arr.forEach((item, index, arr) => {  
    console.log(item, index, arr);
    console.log(`Items : ${item} -- Index : ${index} -- Full array ${arr}`);
});

/* Jab data base se array ke formate me objects aate hai tab  */

const mydata = [
    {
        coursename: 'HTML',
        coursefile: 'html'
    },
    {
        coursename: 'CSS',
        coursefile: 'css'
    },
    {
        coursename: 'JavaScript',
        coursefile: 'js'
    },
    {
        coursename: 'Python',
        coursefile: 'py'
    }
]
/* yaha aapne ne array ke aander object ko for each ki thorw aapan ne daa nikal liya hai */

mydata.forEach(item =>{
    console.log(item.coursename);
    console.log(item.coursefile);
});


/* Jab aapan ko koi aray me se filter karke kuch cheze nikalni ho to  */
const num = [1,2,3,4,5,6,7,8,9,10]

// let newnum = num.filter(i =>i >5) // (filter automatic return kr deta hai .. kuch bhi batana ni perta hai )

let newnum = num.filter(i =>{
   return i >5 // agar aapne ne isko scope me likha .. normal function ki tarah to aapn ko return karna parega .. single line for ya koi bhi operation me return ni karna perta hai .. automatic hota hai 
}) 

/* agar filter use ni karna hai foreach se he return chaiye hai to  */
 
// let newnum =[]
// num.forEach(i =>{
//     if (num > 5) {
//        newnum.push(num) // seedhi bt newnum bale array me push kr do num ki value jab condition true ho to..     
//     }
// })

console.log(newnum);

