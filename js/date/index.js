var date = new Date();
console.log(date);
var date2 = new Date(2002, 5, 24, 18, 30);
console.log(date2);
var date3 = new Date('Fri, 01 Jan 1971 00:00:00 GMT');
console.log(date3);

var date4 = new Date("January 31 1980 12:30");
console.log(date4);

console.log(date.getDay());
var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(dayNames[date.getDay()]);
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getTimezoneOffset());
/*
birthday.getFullYear();      // year
birthday.getMonth();         // month
birthday.getDate();          // date 30
birthday.getDay();           // day 6
birthday.getHours();         // hours
birthday.getMinutes();       // minute
birthday.getSeconds();       // Seconds
birthday.getMilliseconds();  // Milliseconds
birthday.getTime();          // 333849600000 (for GMT)
*/

function showTime() {
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let formatHours = convertFormat(hours)
    hours = checkTime(hours)
    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)
}

function convertFormat(time) {
    let format = 'AM '
    if (time >= 12) {
        format = 'PM'
    }
    return format
}

function checkTime(time) {
    if (time > 12) {
        time = time - 12;
    }
    if (time === 0) {
        time = 12;
    }
    return time
}

function addZero(time) {
    if (time < 10) {
        time = "0" + time
    }
    return time
}
showTime()
let x = new Date();
x.getDate();
x.getDay();
x.getHours();
x.getMinutes();
const date = new Date();

date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
var date = new Date(Date.UTC(2015, 0, 28, 4, 0, 0));
console.log(date.toLocaleDateString("nl",{year:"2-digit",month:"2-digit", day:"2-digit"}));
console.log(date.toLocaleDateString('ar-EG'));
/* 
https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format
For date : .toLocaleDateString('en-US', {day: "numeric"})

For month in full : .toLocaleDateString('en-US', {month: "long"})

For month in short : .toLocaleDateString('en-US', {month: "short"})

For day in full : .toLocaleDateString('en-US', {day: "long"})

For dayin short: .toLocaleDateString('en-US', {day: "short"})
*/

//return new Date(+date - date.getTimezoneOffset() * 60 * 1000).toISOString();
function yyyymmdd () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('');
  };
  var rightNow = new Date();
var res = rightNow.toISOString();
  
