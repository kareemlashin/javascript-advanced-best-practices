function DogObject(name, age) {
    this.name = name;
    this.age = age;
}
DogObject.prototype.speak = function () {
    return "I am a dog";
}
let john = new DogObject("John", 45);
/**
*
* Block
*
*/

function data(x, y, x) {
    this.x = x;
    this.y = y;
    this.z = z;
}
data.prototype.print = function () {
    return `x:${
        this.x
    } y:${
        this.y
    } z:${
        this.x
    }`
}
let m = new data();
m.print();
/**
*
* Block
*
*/

function Animals(name, age) {
    let newAnimal = Object.create(animalConstructor);
    newAnimal.name = name;
    newAnimal.age = age;
    return newAnimal;
}
Animals.prototype.sing = function(){
    return `${this.name} can sing`;
}
Animals.prototype.dance = function() {
    return `${this.name} can dance`;
}
let Bingo = new Animals("Bingo", "Hairy");


let animalConstructor = {
    sing: function() {
        return `${this.name} can sing`;
    },
    dance: function() {
        return `${this.name} can dance`;
    }
}
function Cats(name, age, whiskerColor) {
    let newCat = Animals(name, age);
    Object.setPrototypeOf(newCat, catConstructor);
    newCat.whiskerColor = whiskerColor;
    return newCat;
}
let catConstructor = {
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
Object.setPrototypeOf(catConstructor, animalConstructor);
const clara = Cats("Clara", 33, "purple");
clara.sing();
clara.whiskers();