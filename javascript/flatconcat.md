```
var concat = (acc, input) => acc.concat([input]);
var flatcat = (acc, input) => acc.concat(input);

var arr = [[1,2,3],[4],[5,6],[7, [8,9]]];
var arr_concat = arr.reduce(concat,[]);
var arr_flatcat = arr.reduce(flatcat,[]);

console.log(arr_concat); 	// -> [[1, 2, 3],[4],[5, 6],[7, [8, 9]]]
console.log(arr_flatcat); 	// -> [1, 2, 3, 4, 5, 6, 7, [8, 9]]
```