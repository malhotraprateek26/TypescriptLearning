
function foo()
{
    console.log("Foo called!");
}

var bar = function()
{
    console.log("Bar called!");
}

foo();
bar();


/// Scope: 

{
    var a = 100;    // Scope not limited to curly braces !!!
}

console.log(a);     // OUTPUTS 100 !!!

// JS only has FUNCTION SCOPING and not block scoping (bracing using curly braces)

if (true)
{
    var a = 50;
}

console.log(a);     // OUTPUTS 50 !!!

function func()
{
    var a = 200;
    var b = "func";
}

console.log(a);     // OUTPUTS 50 and NOT 200 !!!
//console.log(b);     // ERROR: UNDEFINED !!!


/// Global objects

var a = 10;     // 'a' is a global variable now (on window object)

function f()
{
    var b = 10;     // 'b' is NOT a global variable
}

//console.log(window.a);    // Should run in browser (same with functions)


/// GLOBAL SCOPE PROBLEM

// Global scope variables declared in function scope

function foo()
{
    c = 100;        // Created in global scope as it is a write operation
}

console.log(c);     // PRINTS 100 !!!

