###Property value shorthand


EcmaScript 6 provides a concise form for defining object literal methods and properties. This syntax can make defining complex object literals much cleaner.


With property value shorthand syntax, you can omit the property value if key matches variable name


```javascript
function getCar(make, model, value) {
  return {
    make,
    model,
    value
  };
}
```


```javascript
const name = 'Usse';
const person = {
  name,
  sayName() {
    console.log(name);
  }
}
person.sayName();
// --> Usse
```


```javascript
const gameName = "Call of Duty"
const gameType = "FPS"
const game = { gameName, gameType }
console.log(game); 
// --> { gameName: 'Call of Duty', gameType: 'FPS' }
```