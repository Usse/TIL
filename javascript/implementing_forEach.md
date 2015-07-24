###Implementing forEach in javascript for legacy browser


Native support was introduced in ECMA5 and JS 1.6, so Internet Explorer 8 and below need a little help..


```javascript
var forEach = function (obj, iterator) {
  for (var i = 0, l = obj.length; i < l; i += 1) {
    iterator.call(this, obj[i]);
  }
};
```

usage: 


```javascript
var array = [1,2,3,4,5,6,7,8,9,10];

array.forEach(function(el) {
  console.log(el);
})
```
