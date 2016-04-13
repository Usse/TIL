###Facade

```js
// Implementations
var facade = (function() {
  var _private = {
    run: function( speed ) {
      console.log('running at speed ' + speed);
    },

    jump: function( ) {
      console.log("I'm jumping !")
    }
  };

  return function( args ) {
    _private.jump();
    if( args.run ) {
      _private.run(args.speed);
    }
  };

})();

// Usages
facade({speed: 10, run: true});
```

###Factory

```js
// Implementation
var vehiclePrototype = {
  init:function( model ) {
    this.model = model;
  }

  setModel: function( model ) {
    this.model = model;
  },

  getModel: function() {
    console.log('The model of this vehicle is: ' + this.model);
  }
}

function vehicle( model ) {
  function F();
  F.prototype = vehiclePrototype;

  var f = new F();

  f.init(model);
  return f;
};

// Usages
var myVehicle = vehicle('Skoda Fabia');
myVehicle.getModel();
```

###Mediator

```js
var mediator = (function() {

  // Storage for our topics/events
  var channels = {};

  // Subscribe to an event, supply a callback to be executed
  // when that event is broadcast
  var subscribe = function(channel, fn) {
    if ( !channels[channel] ) channels[channel] = [];
    channels[channel].push({context: this, callback: fn});
    return this;
  };

  // Publish/broadcast an event to the rest of the application
  var publish = function(channel) {
    if ( !channels[channel] ) return false;
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0, l = channels[channel].length; i < l; i++) {
      var subscription = channels[channel][i];
      subscription.callback.apply(subscription.context, args);
    }
    return this;
  };

  return {
    publish: publish,
    subscribe: subscribe,
    installTo: function(obj) {
      obj.subscribe = subscribe;
      obj.publish = publish;
    }
  }
})();

//Usages

(function( m ) {

  // Set a default value for 'person'
  var person = 'Luke';

  // Subscribe to a topic/event called 'nameChanged' with
  // a callback function which will log the original
  // person's name and (if everything works) the incoming
  // name
  m.subscribe('nameChange', function( arg ) {
    console.log( person ); //Luke
    person = arg;
    console.log( person ); //Aubin
  });

  // Publish the 'nameChange' topic/event with the new data
  m.publish('nameChange', 'Aubin');

})( mediator );
```

###Mixin

```js

// Define a simple Car constructor
var Car = function(settings) {
  this.model = settings.model || 'no model provided';
  this.color = settings.color || 'no color provided';
};

// Mixin
var Mixin = function() {};

Mixin.prototype.driveForward = function() {
  console.log('drive forward');
}

Mixin.prototype.driveBackward = function() {
  console.log('drive backward');
}

// Augment Module : to extend an existing object with a method from another
function augment( receivingClass, givingClass ) {

  //Only provide certain method
  if( arguments[2] ) {
    for( i = 2, len = arguments.length; i < len; i++ ) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  }
  // Provide all methods
  else {
    for( var methodName in givingClass.prototype ) {

      // Check existing method in receivingClass
      if( !Object.hasOwnProperty(receivingClass.prototype, methodName) ) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }

    }
  }
}

// Usages
var myCar = new Car({
  model: 'Ferarri F50',
  color: 'red'
});

augment(myCar, Mixin);
myCar.driveForward();

// Ouput => 'drive forward'
```


###Module
```js
var someModule = (function() {

  var privateVar = 5;

  // private methods
  var privateMethod = function() {
    return 'Private Test';
  };

  return {
    // public attributes
    publicVar: 10,
    // public methods
    publicMethod: function() {
      return 'Followed By Public Test';
    },

    // let's access the private members
    getData: function() {
      return privateMethod() + this.publicMethod() + privateVar;
    }
  }

})();

// Implementation
someModule.getData();
```


###Observer
```js
var pubsub = {};

(function(q) {

  var topics = {},
      subUid = -1;

  // Publish or broadcast events of interest
  // with a specific topic name and arguments
  // such as the data to pass along
  q.publish = function( topic, args ) {

    if ( !topics[topic] ) {
      return false;
    }

    var subscribers = topics[topic],
        len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func(topic , args);
    }

    return this;
  }

  // Subscribe to events of interest
  // with a specific topic name and a
  // callback function, to be executed
  // when the topic/event is observed
  q.subsribe = function( topic, func ) {

    if ( !topics[topic] ) {
      topics[topic] = [];
    }

    var token = (++subUid).toString();
    topics[topic].push({
      token: token,
      func: func
    });
    return token

  };

  // Unsubscribe from a specific
  // topic, based on a tokenized reference
  // to the subscription
  q.unsubscribe = function( token ) {
    for ( var m in topics ) {
      if ( topics[m] ) {
        for (var i = 0, j = topics[m].length; i < j; i++) {
          if ( topics[m][i].token === token ) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
  }

})( pubsub );

//Implémentation
var triggerAlert = function(text) {
  console.log('Alert: ' + text + ' !');
  return;
}

//Listen to alert
var myAlertToken = pubsub.subscribe('/alert', triggerAlert);

//Publish new alert
pubsub.publish('/alert', 'une nouvelle article');

//Unsubscribe from /alert
pubsub.unsubscribe(myAlertToken);

//This will fail
pubsub.publish('/alert', 'Another alert');
```


###Revealing Module
```js
var myRevealingModule = (function(){

  var name = 'John Smith';
  var age  = 40;

  function updatePerson() {
    name = 'John Smith Updated';
  }

  function setPerson() {
    name = 'John Smith Set';
  }

  return {
    set: setPerson,
    get: getPerson
  };

})();

// Usages
myRevealingModule.get();
```


###Singleton
```js
var SingletonTest = (function() {

  //options: an object containing configuration options for the singleton
  //eg. var options = {name: 'test', pointX: 5}
  function Singleton(options) {

    options = options || {};

    this.name = 'NameOfSingleton';
    this.pointX = args.pointX || 6;
    this.pointY = args.pointY || 10;

  }

  //this is our instance
  var instance;

  //this is an emulation of static variables and methods
  var _static = {

    name: 'NameOfSingleton',

    //this is a method to getting an instance
    //It returns a singleton instance of a singleton object
    getInstance: function(options) {
      if (instance === undefined) {
        instance = new Singleton(options);
      }
      return instance;
    }
  };

  return _static;

})();


//Use of case
var mySingleton = SingletonTest.getInstance({
  pointX: 5
});

console.log(mySingleton.pointX); //Output 5
```
