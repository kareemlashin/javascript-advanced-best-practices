let arr = ["Ilya", "Kantor"]


let [firstName, surname] = arr;

console.log(firstName); // Ilya
console.log(surname); // Kantor
const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};

const { name2, realName } = hero;
console.log(name2); // Ilya
console.log(realName); // Kantor



let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

let { size: { width2, height2 }, items: [item1, item2], title = "Menu" } = options;
console.log(width2);
console.log(height2);
console.log(item1);
console.log(item2);
console.log(title);


const user = {
    id: 1,
    email: 'kareem@gmail.com',
    personalInfo: {
        name: 'kareem',
        address: {
            line1: 'banha',
            line2: 'damlao',
            city: 'banha',
            state: 'code'
        }
    }
}
let { id, email } = user;
let { name } = user.personalInfo;
let { line1, line2, city, state } = user.personalInfo.address;
console.log(" id : " + id + " email : " + email + " name : " + name + "  line1: " + line1 + " line2 : " + line2 + "  city: " + city + " state :  " + state)
let data = {
    name: 'dfdfd',
    data2: {
        school: "it school",
        track: 'programing',
        address: {
            street: 'el5msa',
            country: 'ismailia',
            zip: '123-159',
            code: '09',
            desc: ["i", 't', 'school'],
            salary: {
                ob: '1000',
                food: 100,
                is_good: true
            }

        }
    }
};
let { your } = data;
let { school, track } = data.data2;
let { street, country, zip, code } = data.data2.address;
let { ob, food, is_good } = data.data2.address.salary;
let { o, b2, c2 } = data.data2.address.desc;
console.log(school);
console.log(track);
console.log(street);
console.log(country);
console.log(zip);
console.log(code);
console.log(ob);
console.log(food);
console.log(is_good);
const obj = {
    a: {
        b: {
            c: [1, 2, 3]
        }
    }
};

const {
    a: {
        b: {
            c: [
                one2,
                two2,
                three
            ]
        }
    }
} = obj;
console.log(one2);
console.log(two2);
console.log(three);
const obj2 = {
    a: ['a1', 'a2', 'a3'],
    b: ['b1', 'b2', 'b3'],
    c: ['c1', 'c2', 'c3'],
    d: ['d1', 'd2', 'd3'],
    e: ['e1', 'e2', 'e3']
}

const {
    a: [one1, two1, three1],
    b: [one22, two22, three2],
    c: [one3, two3, three3],
    d: [one4, two4, three4],
    e: [one5, two5, three5],
} = obj2;
console.log(one1);
console.log(one22);
console.log(one3);
console.log(one4);
console.log(one5);

console.log(two1);
console.log(two22);
console.log(two3);
console.log(two4);
console.log(two5);

console.log(three1);
console.log(three2);
console.log(three3);
console.log(three4);
console.log(three5);

let dd = [4, 5, 6, 5];
let [x2, y2, z2, b] = dd;
let y22 = {
    o: 4,
    v: 5
};
let { c, y222 } = y;

let options2 = {
    size: {
        width: 100,
        height: 200,
        one: [1, 2, 3, 4, 5],
        two: {
            one: 1
        }
    },
    items: ["Cake", "Donut"],
    extra: true
};
let { size: { width, height, one, two }, items: [z, x, y, u, i], extra } = options2;
console.log(width);