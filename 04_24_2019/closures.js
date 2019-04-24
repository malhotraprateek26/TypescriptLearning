
/// Concept of closure

var a = 10;

function outer()
{
    var b = 20;
    var inner = function ()
    {
        console.log(a);
        console.log(b);
    }

    //inner();          // Prints 10, 20
    return inner;
}

b = 50;                 // This will not affect the inner function output
                        // as this will be a new variable altogether
a = 50;                 // This will affect the inner function output though

var innerFunc = outer();
innerFunc();            // Prints 50, 20. Value of 'b' is preserved !!!

// This means that the scope-chain is preserved and transferred with the 
//  function when it is being returned to a variable.
// The function does not have a copy of the variables used, it has a 
//  pointer/reference to the actual variables.

// The concept of saving/transferring the scope-chain along with the
//  function being passed around is called closure.


console.log("----------------");

/// A better example with random numbers

var a = Math.random() * 1000;

function outer2()
{
    var b = Math.random() * 1000;
    var inner2 = function ()
    {
        console.log("a: " + a);
        console.log("b: " + b);
    }

    inner2();
    return inner2;
}

console.log("First outer call: ");

var inner = outer2();   // 'b' gets created

console.log("First inner call: ");

inner();                // A new 'b' gets created; 'a' remains the same

a = Math.random() * 1000;

console.log("Second outer call: ");

inner = outer2();       // 'a' changes for this

console.log("Second inner call: ");

inner();                // A new 'b' gets created again; 'a' has changed too


/// More examples

console.log("------------------------");

a = 10;

function outer3()
{
    var b = 20;
    var inner3 = function ()
    {
        a++;
        b++;
        console.log(a);
        console.log(b);
    }

    //inner3();          // Prints 10, 20
    return inner3;
}

inner = outer3();
inner();            // 'b' is 21
inner = outer3();   // 'b' is newly created
inner();            // 'b' will be 21 as it has been newly created



/// Closures in callbacks

console.log("-----------------------------");

a = 10;

console.log("Waiting for 1 second...");

// The scope-chain of this function is captured with it when we pass the
//  function to setTimeout
function printStuff()
{
    console.log(a);
}

// Wait for 1 second & call printStuff()
setTimeout(printStuff, 1000);
