// Nested Scope 
/*
function one(){ // perent function 
    let username = 'Admin'

    function two(){ // chaild function 
        let address = "India"
        console.log(username);
        
    }
    // console.log(address); // yaha ye error dega kuki jo address tha bo to local varival me bana tah glowal me ni .. to jo two bala unction tha uske aander tha but two bala function to band ho gaya fer address ko print kara rahe the isliye bo print ni karega .. 

    two()// fer aapen en two bale function ko all kiay .. 
    // but two bale function me jo user name tha bo tow bale function ke liye glowal tha .. isliye usne username ko print kara diya ..  
}
one()
*/
/*  Interesting Topic */
console.log(three(5)); // function ke sath jab name decelar karte hai to function ko kahi bhi call kar sakte hai chahe function ke neeche function se phale 

function three(num){ // ye bhi ek function hai 
    return num + 1    
}

const adtwo = function(num){ // ye bhi ek function hai 
return num + 2
}

console.log(adtwo(5)); // but jab ek varival me function ko dalte hai uper function me varival declear kr rahe the 
// but yaha variable me function dal rahe hai to isme function hamesha uper he rahena chaiye fer uske neeche function ko call kar payenge 

