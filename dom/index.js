var judul = document.getElementById("judul");

var h1 = document.getElementsByTagName("h1")[0];

var p1 = document.getElementsByClassName("p1")[0];

var p4 = document.querySelector("#b p");
var li2 = document.querySelector("#b ul li:nth-child(2)");

var p = document.querySelectorAll("p");
for (let index = 0; index < p.length; index++) {
  p[index].style.backgroundColor = "lightblue";
}

for (let index = 0; index < p1.length; index++) {
  p1[index].style.backgroundColor ='#000';
}
for (let index = 0; index < h1.length; index++) {
  h1[index].style.backgroundColor = 'red';
}
/********************************************* */
const pBaru = document.createElement("p");

judul.appendChild(pBaru);
judul.removeChild(pBaru);

/*style */
judul.style.backgroundColor = "lightgreen";


const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
p4.addEventListener("click", addItemOnP4);

function addItemOnP4() {
  const ul = sectionB.getElementsByTagName("ul")[0];
  const liBaru = document.createElement("li");
  liBaru.style.backgroundColor = "lightBlue";
  const textLiBaru = document.createTextNode("item baru");
  liBaru.appendChild(textLiBaru);
  ul.appendChild(liBaru);
}

const p3 = document.querySelector(".p3");

p3.addEventListener("click", function() {
  p3.style.backgroundColor = "Orange";
});
p3.addEventListener("click", function() {
  p3.style.color = "white";
});
p3.onclick=function clickButton() {
     console.log("ok")
}

//input ==> value
document.getElementById("history-value").innerText;


// find element
let someId=document.getElementById('someId');
let someClassName=document.getElementsByClassName('someClass');
let someTagName=document.getElementsByTagName('p');
let someClassSelector=document.querySelector('.someClass');
let someClassAll=document.querySelectorAll('.someClass');


console.log(someId);
console.log(someClassName[0]);
console.log(someTagName[0]);
console.log(someClassSelector);
console.log(someClassAll[0]);
let someClassName2=Array.from(document.getElementsByClassName('someClass'));
let someClassAll2=Array.from(document.querySelectorAll('.someClass'));
let someTagName2=Array.from(document.getElementsByTagName('p'));

for(let x of someClassName2)
{
     console.log(x)
}
for(let x of someClassAll2)
{
     console.log(x)
}
for(let x of someTagName2)
{
     console.log(x)
}

// classList
var firstHeading = document.getElementById('firstHeading');

firstHeading.classList.remove('foo');

firstHeading.classList.add('anotherclass');

firstHeading.classList.add('foo', 'bar');
firstHeading.classList.remove('foo', 'bar');

firstHeading.classList.toggle('visible');

console.log(firstHeading.classList.contains('foo'))
// Attribute
var newElement = document.getElementById('firstHeading');

newElement.getAttribute('class')
console.log(newElement.getAttribute('class'))
newElement.setAttribute('attr', 'value')
newElement.hasAttributes('attr')
console.log(newElement.hasAttributes('attr'))

// style
document.getElementById("firstHeading").style