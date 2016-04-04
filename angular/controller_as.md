##ControllerAs

Using the controllerAs syntax over the ‘classic controller with $scope‘ syntax makes code more readable in the view:

```js
<!-- avoid -->
<div ng-controller="CustomerController">
    {{ name }}
</div>

<!-- recommended -->
<div ng-controller="CustomerController as customer">
    {{ customer.name }}
</div>
```

and in the controller


```js
/* avoid */
function CustomerController($scope) {
    $scope.name = {};
    $scope.sendMessage = function() { };
}

/* better */
function CustomerController() {
    this.name = {};
    this.sendMessage = function() { };
}
```

It’s actually recommended, to go a step further and assign `this` to a variable, so you can easily access it from within your controller methods.

```js
/* recommended */
function CustomerController() {
    var customerVM = this;
    customerVM.name = {};
    customerVM.sendMessage = function() {
        // we can access the controller's scope as customerVM
    };
}
```


