let arr = [];
for (let index = 0; index < arr.length; index++) {
    var index = arr[index]
}

var i = 11;
while (i <= 15) {
    document.write(i + "<br/>");
    i++;
}
var i=21;  
do{  
document.write(i + "<br/>");  
i++;  
}while (i<=25); 

let numbers =[1,1];
numbers.forEach(function(value, index, array) {

});

// https://stackoverflow.com/questions/9329446/loop-over-an-array-in-javascript
let theArray =[];
for (const element of theArray) {
}
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
/**
*
* Block
*
*/

for (const propertyName in theArray) {
        const element = theArray[propertyName];
}

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
const objectArr = [45, 4, 9, 16, 25];

let txt = "";
for (let x in objectArr) {
  txt += numbers[x];
}
