let y = new Map([
    ["x", 5],
    ['c', 4]
]);
y.array.forEach(element => {
    console.log(element)
});
contacts.set('Jessie', 4)
y.has('Jessie')
y.get('Jessie')
y.delete('Jessie')
y.clear()
console.log(y.size) // 1