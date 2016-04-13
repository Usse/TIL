##Map, filter and reduce


Initial array

```javascript
var array = [1,2,3,4,5,6,7,8,9,10];
```

####Map

map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes that are undefined, those which have been deleted or which have never been assigned values.

```javascript
var doubles = array.map(function(num) {
  return num * 2;
});
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```



####Filter
filter calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a true value or a value that coerces to true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callback test are simply skipped, and are not included in the new array.


```javascript
var odds = array.filter(function(num) {
  return num % 2 == 0;
});
// [2, 4, 6, 8, 10]
```




####Reduce
reduce executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments: the initial value (or value from the previous callback call), the value of the current element, the current index, and the array over which iteration is occurring.


```javascript
var total = array.reduce(function(a, b) {
  return a + b;
});
// 55
```
