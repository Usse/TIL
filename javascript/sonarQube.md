##Sonarqube

###How does sonarqube calculate the code complexity?

Complexity is incremented by one for each:
 - function (i.e non-abstract and non-anonymous constructors, functions, procedures or methods)
 - if statement
 - short-circuit (AKA lazy) logical conjunction (&&)
 - short-circuit (AKA lazy) logical disjunction (||)
 - ternary conditional expressions
 - loop
 - case clauses of a switch statement
 - throw and catch statement
 - return statement (except when it is the very last statement of a function)
