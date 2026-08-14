
/* What is switch ? Why use ? Deffrence between if-else.

--> Switch bhi same if else jesa he hai but yaha alag hai 
jese aapne ghr me switch hote hai ki fan chalana to ye bala button dawao .. light chalana to ye bala button dawao 
same bese he isme hai .. aapn ko ek board banana hai to user ko ek button dawana hai bus 

iska use yahi hai ki light chalaan to second button dawao 
or fan chalana hai to first button dawao ..

agar user ko game khelna hai to uske pass 3 buttons hote hai 
1- play
2- more
3- Exit

to ye ek switch hai agar user ne 1 dawaya to 2,3 run ni honge .. bus yahi hai 

aab deffrence kya hai if-else or switch me 

deffrence itna he hai ki .. 
if-else me aapan condition check karte hai yaha aapne predefine conditions bana dete hai
uper bataya mene game bala .. same if-else se bhi hota hai but switch ka sytense simple hai thasit.
. 

Switch syntex ->
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

*/

// const month = 3
// const month = 1
const month = 5

switch (month) {
    case 1:
        console.log(`This month is jan... (1)`);
        break;
    case 2:
        console.log(`This month is fab... (2)`);
        break;
    case 3:
        console.log(`This month is march... (3)`);
        break;
    case 4:
        console.log(`This month is april... (4)`);
        break;

    default:
        console.log("Koi bhi month ni hai inme se 4 ke alawa bala hai ");
        break;
}

/* switch me chahe number pass karalo chahe string sab chal jata hai  */

const monthh = 'march'

switch (month) {
    case 'jan':
        console.log(`This month is jan... (1)`);
        break;
    case 'fab':
        console.log(`This month is fab... (2)`);
        break;
    case 'march':
        console.log(`This month is march... (3)`);
        break;
    case 'april':
        console.log(`This month is april... (4)`);
        break;

    default:
        console.log("Koi bhi month ni hai inme se 4 ke alawa bala hai ");
        break;
}

