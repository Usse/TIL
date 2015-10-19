###Swap variables without an aux variable

In ES6 you can swap variables using destructuring assignment

```javascript
var [a,b] = [0,1]
[a,b] = [b,a]
```

b will be 0 and a will be 1