const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};
const barista = Object.create(job);
barista.position = "barista";
barista.showDetails();
/**
*
* Block
*
*/
const employees = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
};
const keys = Object.keys(employees);
console.log(keys);
Object.keys(employees).forEach(key => {
    let value = employees[key];
	 console.log(`${key}: ${value}`);
});
/**
*
* Block
*
*/
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

const values = Object.values(session);

console.log(values);
/**
*
* Block
*
*/
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};
const entries = Object.entries(operatingSystem);
console.log(entries);
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    console.log(`${key}: ${value}`);
});
/**
*
* Block
*
*/
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

const character = Object.assign(name, details);
console.log(character);
/**
*
* Block
*
*/

const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);
newUser.password = '*******';
newUser.active = true;
console.log(newUser);
/**
*
* Block
*
*/

const hero = {
    name: 'Batman'
  };
  hero.hasOwnProperty('name');     // => true
  hero.hasOwnProperty('realName'); // => false