##Static class member

Like other languages with static class members, the static keyword will create a method associated with the class, and not with an instance of the class. In other words, you can only reach a static method using the name of the class.



```js
class Human {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello from ${this.name}`);
  }

  static sayHello() {
    console.log('Hello!');
  }
}

let usse = new Human('Usse');
usse.greet();
Human.sayHello();

```