let arr = [1, 2, 3];
let arr2 = [4, 5];

arr = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ] 

let arr3 = [...arr];

let arr4 = [1, 2, 3, -1];
console.log(Math.min([...arr4])); //-1 
console.log(Math.max(...arr4)); //-1 



const user1 = {
    name: 'Jen',
    age: 22,
};

const user2 = {
    name: "Andrew",
    location: "Philadelphia"
};

const clonedUser = {...user1 };
console.log(clonedUser);


const mergedUsers = {...user1, ...user2 };
console.log(mergedUsers)

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum([...numbers]));

console.log(sum.apply(null, numbers));
const dateFields = [1970, 0, 1];
const date = new Date(...dateFields);
console.log(date)

let blog1Subscribers = ['billy@example.com', 'sally@gmail.com'];
let blog2Subscribers = ['timmy@gmail.com', 'tammy@example.com', 'tommy@gmail.com'];
let subscribers = [...blog1Subscribers, ...blog2Subscribers];
console.log(subscribers);

let o1 = { a: 1, b: 2 };
let o2 = { c: 3, d: 4, ...o1 };
console.log(o2);

const userProvided = {
    name: 'Bil Smith',
    email: 'bil@example.com',
};
const defaultValues = {
    name: 'Unknown',
    address: 'Alien',
    phone: null,
    email: null
};
const userInfo = {...defaultValues, ...userProvided };

function myFun(...marks) {
    for (let x of marks) {
        console.log(x)

    }
}

let marks = [10, 23, 83, -1, 92];
myFun(...marks);

let kk = [1, 2, 3, 4, 5];
let m = [...kk];


function sum(x, y, z) {
    let xx = x + y + z;
}
sum(...kk);