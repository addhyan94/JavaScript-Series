/* First For Loop ...  */

// sintex ->
// for (let index = 0; index < 10; index++) {
//     const element = index; 
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let myarray = [1, 2, 3, 4]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
}


/* Nested For loop ..... loop ke aander loop */

for (let i = 0; i < 5; i++) {
    console.log(` This is a outer loop ${i}`);
    
    for (let j = i; j < 2; j++) {
        console.log(`This is a Inner Loop:  J value :: ${j} | I value ${i}`);
    }
    
}

/* Question -> print 1 to 5 tables using For loop  */

for (let i = 1; i <= 5; i++) {
    console.log(` Table of : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
       console.log(`${i} * ${j} = ${i*j}`);
    }
}

/* Keywords ...  
1. break
2. continue */

for (let i = 0; i < 11; i++) {
    if (i == 5) {
        console.log('5 is detected :: Now Break the loop ');
        break; // agar 5 mil jaye to yaha loop break kr de 
    }
    console.log(i);
}
for (let i = 0; i < 11; i++) {
    if (i == 5) {
        console.log('5 is detected :: continue the loop ');
        continue; // agar 5 mil jaye to 5 ko print na karke 5 ko jump kr lo or 6 per aa jao  
    }
    console.log(i);
}