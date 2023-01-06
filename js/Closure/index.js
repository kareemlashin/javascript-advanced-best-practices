// https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/
// https://www.programiz.com/javascript/closure
function add_main(z) {
    console.log(z)
    return function subAdd(y) {
        console.log(z + y)
    }
}
const add1 = add_main(1);
const add2 = add_main(2);
add1(5);
add2(5);
/**
*
* Block
*
*/
// Function to increment counter
function add() {
    let counter = 0;
    counter += 1;
    return counter;
}

// Call add() 3 times
add();
add();
add();

function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4
/**
*
* Block
*
*/

function greeting(message) {
    return function(name){
         return message + ' ' + name;
    }
 }
 let sayHi = greeting('Hi');
 let sayHello = greeting('Hello');

 
console.log(sayHi('John')); // Hi John
console.log(sayHello('John')); // Hello John