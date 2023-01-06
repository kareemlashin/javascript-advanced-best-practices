let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;
    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(() => {}).catch((err) => {}).finally(() => {});

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
const timeOut = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Completed in ${t}`)
        }, t)
    })
}

timeOut(1000)
    .then(result => console.log(result)) // Completed in 1000

// Promise.all
Promise.all([timeOut(1000), timeOut(2000)])