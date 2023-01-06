let mySet = new Set([`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`])

mySet.add(`9`)
mySet.add(`10`)
mySet.add(`11`)
console.log(mySet.size)
console.log(mySet.has(`5`))
mySet.delete(`5`)
console.log(mySet.has(`5`))
console.log(mySet.size)

mySet.array.forEach(element => {

});

for (let y of mySet) {
    console.log(`y ${y}`)

}
mySet.forEach((c) => {
    console.log(`c ${c}`)

})
mySet.clear();
console.log(mySet)