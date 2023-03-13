/*let a = 1;
let b = 'sdasd \'"ASDASD"';
let bool1 = true;
let bool2 = false;

let n = 10001n;
let c = null;
let d; //? undefined


console.log ( a);
console.log ( b , bool1 , bool2);

console.log( typeof n );
*/
/*function isRound( n ){
    console.log( 'hello this is isRound');
    console.log( 'number: ', n);
    console.log( n % 10 === 0 ); //? >, <, >=, <=, ==, !=, ===,!==

}

isRound( 10 );
isRound( 30 );
isRound( 111 );
isRound( 123 );*/

function isRound( n ) {
    return n % 10 ===0;
}
console.log(10, isRound( 10 ) );
console.log(15, isRound( 15 ) );
console.log(20, isRound( 20 ) );
console.log(44, isRound( 44 ) );