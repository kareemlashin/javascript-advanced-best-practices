// Cleaner Code  JavasScript 
// ! naming 
const DAY_IN_MILLISECONDS = 3600 * 24 * 1000; // 86400000
const USER_TYPES = {
    REGULAR_EMPLOYEE: '1'
}
let users = ['Muhammad Ahsan', 'Darainn Mukarram'];

const createUser = (name, designation, type) => {
    console.log({
        name,
        designation,
        type
    });
}

class Player {
    constructor(name, score, position) {
        this.position = position;
        this.score = score;
        this.name = name;
    }
    setName(name) {
        this.name = name;
    }
    setPosition(position) {
        this.position = position;
    }
    setScore(score) {
        this.score = score;
    }
}

// Bad 
const yyyymmdstr = moment().format("YYYY/MM/DD");
// Good
const currentDate = moment().format("YYYY/MM/DD");

// BAD
function createMicrobrewery(name) {
    const breweryName = name || "Hipster Brew Co.";
    // ...
}

// GOOD
function createMicrobrewery(name = "Hipster Brew Co.") {
    // ...
}

// BAD
function createMenu(title, body, buttonText, cancellable) {
    // ...
}

createMenu("Foo", "Bar", "Baz", true);

// GOOD 
function createMenu({
    title,
    body,
    buttonText,
    cancellable
}) {
    // ...
}

createMenu({
    title: "Foo",
    body: "Bar",
    buttonText: "Baz",
    cancellable: true
});

// BAD
function emailClients(clients) {
    clients.forEach(client => {
        const clientRecord = database.lookup(client);
        if (clientRecord.isActive()) {
            email(client);
        }
    });
}

// GOOD 
function emailActiveClients(clients) {
    clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
    const clientRecord = database.lookup(client);
    return clientRecord.isActive();
}

// BAD
function addToDate(date, month) {
    // ...
}

const date2 = new Date();

// It's hard to tell from the function name what is added
addToDate(date, 1);

// GOOD
function addMonthToDate(month, date) {
    // ...
}

const date3 = new Date();
addMonthToDate(1, date);

// BAD
function createFile(name, temp) {
    if (temp) {
        fs.create(`./temp/${name}`);
    } else {
        fs.create(name);
    }
}

// GOOD
function createFile(name) {
    fs.create(name);
}

function createTempFile(name) {
    createFile(`./temp/${name}`);
}

// Bad 😕
const TargetColor = "purple";
const fnd = true;
const list = ["blue", "green", "yellow"];
const obj = { color: "blue", hex: "#800080" };

if (validateSave(obj)) {
  d.save(obj);
}

if (exist) {
  // ...
}

// Better 😀
const targetColor = "purple"; /* camelCase notation to define variables,function and
methods in JavaScript */
const foundColor = false;
const colors = ["blue", "green", "yellow"];
const color = { name: "blue", hex: "#800080" };
const isColorValid = validateColor(color.hex);

if (isColorValid) {
  database.save(color);
}

if (isColorExist) {
  // ...
}
// ...

// Bad 😕
user.goAway(); // slang
save(n); // common abbreviation
allBooks = books.filter(book => {}); // misrepresentation

// Better 😀
user.remove();
save(user);
filteredBooks = books.filter(book => {}); /* Alternatively a different name 
based on the filtering criteria */

// https://blog.bitsrc.io/5-ways-to-write-clean-javascript-code-19aa6338fe00
// https://github.com/ryanmcdermott/clean-code-javascript
// https://dev.to/alexomeyer/8-must-know-tips-for-writing-clean-code-with-javascript-i4
// https://blog.logrocket.com/12-tips-for-writing-clean-and-scalable-javascript-3ffe30abfe20/
// https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/
// https://javascript.plainenglish.io/javascript-clean-code-best-practices-461c24c53cae
// https://flatlogic.com/blog/javascript-clean-code-principles/