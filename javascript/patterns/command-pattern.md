###Command pattern


[https://en.wikipedia.org/wiki/Command_pattern](https://en.wikipedia.org/wiki/Command_pattern)

In object-oriented programming, the command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.



```javascript
/* The Invoker function */
var Switch = function(){
    var _commands = [];
    this.storeAndExecute = function(command){
        _commands.push(command);
        command.execute();
    }
}

/* The Receiver function */
var Light = function(){
    this.turnOn = function(){ console.log ('turn on') };
    this.turnOff = function(){ console.log ('turn off') };
}

/* The Command for turning on the light - ConcreteCommand #1 */
var FlipUpCommand = function(light){
    this.execute = function() { light.turnOn() };
}

/* The Command for turning off the light - ConcreteCommand #2 */
var FlipDownCommand = function(light){
    this.execute = function() { light.turnOff() };
}

var light = new Light();
var switchUp = new FlipUpCommand(light);
var switchDown = new FlipDownCommand(light);
var s = new Switch();

s.storeAndExecute(switchUp);
s.storeAndExecute(switchDown);
```