/*  Inmediately Invoked Function Expressions (IIFE) */

/* This is a normal function .. */
// function cake(){
//     console.log(`DB Connecter`);
// }
// cake();

/*Now hear is a IIFE Function kisko Function ke ktm hote he Call kar diay jata Hai  */

(function Mycake(){
    console.log(`Function Automatic Loaded`);
})(); // pura function ko () ke aander likh do fer call karane ke liye just last me (); lagake call bus bt ktm 


( () => {
    console.log(`Hear is IIFE ArrowFunction  `);
})();


( (name) => {
    console.log(`Hear is IIFE ArrowFunction Run & Show ${name} `);
})(`Hello`); // yaha aapan argument bhi pass akra sakte hai 