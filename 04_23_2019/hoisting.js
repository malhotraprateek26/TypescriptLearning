

/// HOISTING
//  Variable declarations are seemingly 'hoisted' or moved to the top 
//  of the scope and then the code is executed.
//
// Actually the compiler and interpreter have different parsing steps and
//  therefore go through the file separately.
//
// When the compiler executes, it determines simply whether a variable 
//  exists in the current scope or not. If it does, it is marked as 
//  declared. 
//
// When the interpreter parser executes, the variable for that scope is 
//  already declared as it moves into the scope and therefore does not
//  throw an error at a read operation on the hoisted variable.
//
// Even if the interpreter does not throw an error, the value will still
//  be 'undefined' though as we have not gotten to the write operation yet.

var n = 10;

function outer()
{
    var b = n;
    console.log(b);

    function inner()
    {
        var c = b;
        console.log(c); // This should print outer b's value, but 
                        //  prints undefined as the first parse 
                        //  (compilation step) only sees that b has 
                        //  been created in inner scope and therefore 
                        //  outer 'b' should't be carried to inner scope...

        var b = 20;
    }

    inner();
}

outer();


console.log(x);     // Prints undefined but not an error as the variable 
                    //  has been defined in the same scope even if it is 
                    //  defined after the read operation - which is why it
                    //  prints 'undefined'.
var x = 100;



func();             // In case of function it works fine...

function func()
{
    console.log("func called!");
}


var count = 0;

// Without hoisting, the below code should have failed in compilation step

a();

function a()
{
    if (count == 5) return;
    count++;
    console.log("a called");
    b();
}

function b()
{
    console.log("b called");
    a();
}




//fnA();        // ERROR: Hoisted variable fnA is not known to be a function 
                //        at compile time.

var fnA = function()
{
    console.log("fnA called!");
};

fnB();          // Works as fnB is definitely known to be a function at
                // compile time.

function fnB()
{
    console.log("fnB called!");
}

function getFunction()
{
    return () => { console.log("~~~~~~~~~"); return 200; };
}

var z = getFunction();
//var z = 500;

var fnB = z;   // QUESTION: Why does this not make any problems though? 
                // Shouldn't the compiler be confused as to which fnB type
                //  I am referring to?
                // Is it a function or is it a number?
                // Why does the comipler assume that fnB will be a function?

console.log(fnB());
console.log(fnB);