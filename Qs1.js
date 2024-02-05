// Ql. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.

function outerFunction(parameter)
{
    let variable = "This is variable";

    function innerFunction()
    {
        console.log("Parameter of outerFunction accessed by innerFunction is = ",parameter);
        console.log("Variable of outerFunction accessed by innerFunction is = ",variable);
    }
    return innerFunction;
}
let Result = outerFunction("This is a parameter");

Result();
//OUTPUT:
//Parameter of outerFunction accessed by innerFunction is =  This is a parameter
// Variable of outerFunction accessed by innerFunction is =  This is variable

//EXPLAINATION::lexical scoping is a way of defining how variables and functions interact based on their position within the code.

//lexical scoping determines that when a variable is declared inside a function,it is local to that function and cannot be accessed outside of it.
//But that variable declared outside of the function can be accessed by the functions defined within it.
//That is how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.