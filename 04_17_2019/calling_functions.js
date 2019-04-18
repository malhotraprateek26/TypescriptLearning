

// 4 different ways to call functions

function foo()
{
    console.log("Heloo");
}

// 1. Normal call
foo();

// 2. Calling in ctor mode - ALREADY SEEN in objects_and_prototypes.js

// 3. Calling a function assigned to object (as a property of an object)

var obj = {};
obj.foo = function()
{
    console.log("heloo 2");
}

obj.foo();

// 4. Using 'call' method on a function!

function bar(count)
{
    console.log(this);
    this.counter += count;
    console.log(this);
}

obj.counter = 0;
bar.call(obj, 10);      // The implicit 'this' reference can be customized through the 'call' method for any function.

console.log(obj);

//bar(obj, 20);           // WILL NOT WORK - 'this' will resolve to global object
//bar(30);                // WILL NOT WORK - 'this' will resolve to global object
