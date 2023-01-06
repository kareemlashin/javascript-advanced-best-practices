const salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');
const saladSecond = [
    '🍅',
    '🍄',
    '🥦',
    '🥒',
    '🌽',
    '🥕',
    '🥑'
];
const fruits = ['🍈', '🍍', '🍌', '🍉'];
const emotions = ['🙂', '😍', '🙄', '😟'];
const first = [1, 2, 3];
const second = [4, 5, 6];
const colors = ['red', 'blue', 'green'];
const names = ['tom', 'alex', 'bob', 'john'];
const junkFoodILove = [
    '🥖',
    '🍔',
    '🍟',
    '🍕',
    '🌭',
    '🥪',
    '🌮',
    '🍿'
];

const len = salad.length;
salad.push('🥜');
salad.unshift('🥜');
salad.pop();
salad.shift();
const saladCopy = salad.slice(1, 2);
Array.isArray([]);
const merged = first.concat(second);
const joined = emotions.join('<=>');
colors.fill('pink');
colors.fill('pink', 1, 3);
names.includes('tom');
names.indexOf('alex');
names.reverse();
names.sort();
const deleted = names.splice(2, 1, 'zack');


let students = [
    {
        'id': 001,
        'f_name': 'Alex',
        'l_name': 'B',
        'gender': 'M',
        'married': false,
        'age': 22,
        'paid': 250,
        'courses': ['JavaScript', 'React']
    }, {
        'id': 002,
        'f_name': 'Ibrahim',
        'l_name': 'M',
        'gender': 'M',
        'married': true,
        'age': 32,
        'paid': 150,
        'courses': ['JavaScript', 'PWA']
    }, {
        'id': 003,
        'f_name': 'Rubi',
        'l_name': 'S',
        'gender': 'F',
        'married': false,
        'age': 27,
        'paid': 350,
        'courses': ['Blogging', 'React', 'UX']
    }, {
        'id': 004,
        'f_name': 'Zack',
        'l_name': 'F',
        'gender': 'M',
        'married': true,
        'age': 36,
        'paid': 250,
        'courses': ['Git', 'React', 'Branding']
    }
];

const femaleStudents = students.filter((element, index) => {
    return element.gender === 'F';
})
const fullNames = students.map((element, index) => {
    return {
        'fullName': element['f_name'] + ' ' + element['l_name']
    }
});

const total = students.reduce((accumulator, student, currentIndex, array) => {
    accumulator = accumulator + student.paid;
    return(accumulator);
}, 0);
let hasStudentBelow30 = students.some((element, index) => {
    return element.age < 30;
});
const student = students.find((element, index) => {
    return element.age < 30;
});
const atLeastTwoCourses = students.every((elements, index) => {
    return elements.courses.length >= 2;
});
junkFoodILove.at(0);
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function (element) {
    return element * 3;
});
const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present'
];

const result = words.filter(word => word.length > 6);
