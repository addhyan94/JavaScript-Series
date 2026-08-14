
/* Now start Else IF  */


/* Why use Else If ..? 
--> simplly aapan bahut sari condition check karni hoti hai jese ye ni to ye .. ye ni to bo .. bo ni yafer ye .. ese akrte bahut sari conditon check 
karni hoti ahi to if ( 1 conditon check ) .. 1 false to else if ( 1 ke bd 2 check ) .... so more 
ese check karne ke liye bahut sari ya to bali condition banti hai unke liye else if ka use kiya jata hai  */

// let score = 201
// let score = 1
let score = 1000

if (score < 500) {
    console.log(`score: ${score} - Less then 500`);
}
else if (score < 100) {
    console.log(`score: ${score} - Less then 100`);
} else {
    console.log(`score: ${score} - less then 1200`);
    
}
