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

/*function isRound( n ) {
    return n % 10 ===0;
}
console.log(10, isRound( 10 ) );
console.log(15, isRound( 15 ) );
console.log(20, isRound( 20 ) );
console.log(44, isRound( 44 ) );*/

/*function mod(a, b) {;
        return a % b;

}*/

/*function getMax(a, b){
    if (a > b){
        return a;
    } else{
        return b;
    }
}

console.log('2 VS 5', getMax(2, 5));
console.log('8 VS 5', getMax(8, 5));
console.log('3 VS 5', getMax(3, 5));
*/

function checkNumInRange( num, start, end) {
    return num > start && num < end;
    
 /*       if (num >start) {
        if (num < end){
            return true;
        }else{
            return false;
        }
    }else {
        return false;
    }
    */
}

/* && (AND, * )
true && true === true           1*1===1
true && false === false         1*0
false && true === false         0*1
false && false ===false         0*0

|| (OR, +)
true || true === true           1+1 === 1
true || false === true          1+0
false || true === true          0+1
false || false ===false         0+0 === 0
*/

console.log( '5 in 2 .....12', checkNumInRange( 5, 2, 12 ));
console.log( '15 in 2 .....12', checkNumInRange( 15, 2, 12 ));
console.log( '-5 in 2 .....12', checkNumInRange( -5, 2, 12 ));