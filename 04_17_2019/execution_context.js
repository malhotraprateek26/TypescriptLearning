
// Normally a stack / stack-trace is an executable context withing which a function executes (C, C++, etc).

// 'this' and 'arguments' are always available as global variables/objects as the execution context.

function foo()
{
    console.log("Hello");
    console.log(this);      // Prints out the complete 'this' object
}

foo();          // We are calling foo "in context" of this ie: in context of the global object!

var obj = {};

obj.foo = function ()
{
    console.log(this);      // Prints out object holding this function
}

obj.foo();      // We are calling foo "in context" of obj!


function ctor()
{
    console.log(this);      // str not created yet
    this.str = "This is the newly created object!";
    console.log(this);      // str has been created!!!
}

new ctor();                 // 'this' object inside ctor is the object being created!

