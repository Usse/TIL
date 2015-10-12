let numbers = [1, 2, 3, 4, 5];
let people = ['jamie', 'jack', 'isaac'];


// Array.prototype.find
// Similar to filter but returns the actual only element
let oddNumber = numbers.find((x) => x % 2 == 1);
console.log("oddNumber", oddNumber);


// Array.prototype.findIndex
// Similar to find but returns the index of the element
let jackIndex = people.findIndex((x) => x === 'jack')
console.log("jackIndex", jackIndex);


// Array.prototype.entries
// Returns an Array Iterator
let entries = people.entries();
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
//we can also use the spread operator
let entries2 = people.entries();
console.log([...entries2]);


// Array.prototype.from
// generate an array
console.log(Array.from('hello'));
let nameSet = new Set(['jamie', 'jack'])
console.log(Array.from(nameSet));

//The second argument is a filter function
let double = Array.from([1,2,3,4,5], (x) => x * 2);
console.log(double);

let myArray = Array.from({length : 5}, (val, key) => key)
console.log("myArray", myArray);

let names = Array.from({length : 3}, (x) => 'Usse')
console.log("names", names);

let k = Array.from(['a','b'].keys())
let v = Array.from(['a','b'].values())
let e = Array.from(['a','b'].entries())
console.log("keys: ", k);
console.log("values: ", v);
console.log("entries: ", e);

for(let [index, elem] of ['a', 'b', 'c', 'd', 'e'].entries()) {
  console.log(`[${index}] ${elem}`)
}

let sevens = new Array(10).fill(7);
console.log("sevens: ", sevens);
