###Call

Call is exactly the same as invoking a function as you would do normally, however the difference is
that you also get to specify the functions context. Here’s an example:

```js
function sayHello(firstName, secondName) {
    console.log(`${this.sayHello()} ${firstName} ${secondName}`);
}

var context = {
    sayHello() {
        return 'Hello';
    }
}

const firstName = 'Nicolas';
const secondName = 'Cage';

sayHello.call(context, firstName, secondName); //Hello Nicolas Cage
```

When I use call, I’m almost always using it to convert the ‘arguments’ object to a normal array
so that I can iterate over it for some reason. That looks like this:

```js
Array.prototype.slice.apply(arguments)
```



###Apply
Apply is exactly the same as call apart from the fact that you pass in the functions arguments as
an array and not separately. Here is the same example as above, but instead using apply:

```js
function sayHello(firstName, secondName) {
    console.log(`${this.sayHello()} ${firstName} ${secondName}`);
}

var context = {
    sayHello() {
        return 'Hello';
    }
}

const firstName = 'Nicolas';
const secondName = 'Cage';

sayHello.apply(context, [firstName, secondName]); //Hello Nicolas Cage
```



###Bind
The bind method enables you to pass arguments to a function without invoking it.
Instead, it returns a new function with the arguments bound preceding any further arguments.
Lets take a look at an example:

```js
function sayHello(firstName, secondName, middleName) {
    console.log(`${this.sayHello()} ${firstName} ${middleName} ${secondName}`);
}

var context = {
    sayHello() {
        return 'Hello';
    }
}

const firstName = 'Nicolas';
const secondName = 'Cage';
const middleName = 'Woo';

const boundFunc = sayHello.bind(context, firstName, secondName);

boundFunc(middleName); //Hello Nicolas Woo Cage
```

Another example:

```js
const numbers = [1,2,3,4];
const letters = ['a,b,c,d'];


function iterator(letters, collection, number) {
    //Whereas in a normal reduce I would only have access to the
    //data being mapped over - by using bind, I now have access to
    //another source of data.
}

const iteratedData = numbers.reduce(iterator.bind(null, letters), []);
```

Using bind is also super useful with React.js. For example - you can use it to bind your click
events to any further information they may need.

```html
<span className="account_uploads_stats__delete__button" onClick={this.props.deleteAction.bind(null, this.props.imageId)}>
    <i className="fa fa-trash"></i>
    Delete Image
</span>
```

Another useful example is when you’re passing functions down to child components.
You can bind data to these functions so that the child components don’t have to worry about
invoking the function with a particular piece of data. Here’s a basic example:

```js
imageIds.map((imageId) => {
    return <PictureOfPerson clickAction={this.props.personClickAction.bind(null, imageId)}/>
});
```

Now - when PictureOfPerson invokes its click action it will already be aware of the imageId
without explicity passing it in.
