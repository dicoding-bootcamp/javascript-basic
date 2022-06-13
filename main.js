const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital);
console.log(capital.size)
console.log(capital.get("Tokyo"))
console.log(capital.set("Nusantara", "Indonesia"))
console.log(capital.size)


