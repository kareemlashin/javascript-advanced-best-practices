function greet(name, myFunction) {
    console.log('Hello world');
    myFunction(name);
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}
setTimeout(greet, 2000, 'John', sayName);

function myFunction(callback) {
    // 1. Do something
    // 2. Then execute the callback
    callback()
  }
  
  function myCallback() {
    // Do something else
  }
  
  myFunction(myCallback);

  function fetchData(url, cb) {
    // 1. Make API request to url
    // 2. If response successful, execute callback
    cb(res);
  }
  
  function callback(res) {
    // Do something with results
  }
  
  // Do something
  fetchData('https://sitepoint.com', callback);

  function sayHi() {
    console.log("Hi");
 }
  
  
 function welCome() {
    sayHi();
 }
  
 welCome() 
  