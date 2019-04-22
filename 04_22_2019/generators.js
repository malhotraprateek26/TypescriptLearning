

/// Generator functions (functions used as iterators)

// Uses a new keyword called 'yield' (can be used for coroutines as well)

// JS does not seem to treat coroutines as a first-class citizen (unlike Lua).
// Instead, 3rd party libraries need to be used, or code needs to be
//  written using promises and yield.

// For a generator, function syntax is different as well:

function* generatorSeq()       // The '*' is NOT a typo...
{
    yield 1;    // Return value for 1st call
    yield 2;    // Return value for 2nd call
    return 3;   // Return value for 3rd call
}

var generator = generatorSeq();

// The generate function can be percieved as a 'frozen-function'.
// This means that the instruction pointer for the function is frozen.

// * Right now it is at the start of the function but has not yet executed
//  anything.

var one = generator.next();     // 1st call returns 1.
console.log(one);               // Done = false, value = 1 !!!

// * Right now it is after the first yield statement.

var second = generator.next();  // 2nd call returns 2.
console.log(second);            // Done = false, value = 2 !!!

// * Right now it is after the second yield statement.

var third = generator.next();   // 3rd call returns 3.
console.log(third);             // Done = true, value = 3 !!!

// * As it has 'return'ed a value, the function call is over now and the
//  instruction pointer is invalid!

var fourth = generator.next();
console.log(fourth);            // Done = true, value = undefined !!!


// There is no way to 'rollback' a generator function's instruction pointer.
// Instead we can create another one.

generator = generatorSeq();

console.log(generator.next());  // Done = false, value = 1 !!!


/// Iteration using generators

class Vector
{
    constructor()
    {
        this.data = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    }

    * fwdIterSeq()      // This is the syntax for generators in classes
    {
        var currentIndex = 0;
        while (currentIndex < this.data.length)
        {
            yield this.data[currentIndex];
            currentIndex = currentIndex + 1;
        }

        // Returns automatically
    }
};

var daysOfWeek = new Vector();
var iterator = daysOfWeek.fwdIterSeq();

console.log("\nDays of the week: \n");

for (var iterValue = iterator.next(); iterValue.done != true; iterValue = iterator.next())
{
    console.log(iterValue.value);
}

console.log("\nUsing for...of loop: \n");

iterator = daysOfWeek.fwdIterSeq();

// New for...of loop (Cleaner way to iterate):
for (var iter of iterator)
{
    console.log(iter);      // Simply gets us the value
}


/// Spread operator

var sequence = ["\nDays of the Week (Spread operator): \n", ...daysOfWeek.fwdIterSeq()];

for (var seq of sequence)
    console.log(seq);


/// GENERATOR COMPOSITIONS
//  Combining generator sequences to form one sequence
//  'yield*' operator

generatorSeq = function* (begin, end)
{
    for (var i = begin; i <= end; ++i)
        yield i;
}

function* generateValidCharacterSeq()
{
    //for (var char of generatorSeq(48, 57))
    //{
    //    console.log(char);
    //}

    // 0 to 9
    //generatorSeq(48, 57);     // Do not use this call. 
                                // It creates a generator & discards it.

    yield* generatorSeq(48, 57);
    //for (let i = 48; i <= 57; i++) yield i;   // Same as previous stmt

    // A to Z
    yield* generatorSeq(65, 90);
    //for (let i = 65; i <= 90; i++) yield i;   // Same as previous stmt

    // a to z
    yield* generatorSeq(97, 122);
    //for (let i = 97; i <= 122; i++) yield i;   // Same as previous stmt
}

var str = "";

for (var char of generateValidCharacterSeq())
{
    str += String.fromCharCode(char);
}

console.log("\nValid characters for password: " + str + "\n");

// NOTE: Not using yield* and simply calling a generator function inside 
//  another generator function does not work.
//  This is because the 'yield' will not get propagated to outside the
//  outer function.
//  'yield*' delegates the generator execution to another generator.


/// Passing values to 'yield'

function* gen(num)
{
    var value = num;
    while(value > 0)
    {
        value = yield value;   // Need to calculate value*value outside generator

        if (value > 0)
            console.log(value);
    }
}

var num = 5;
var g = gen(num);

var iter = g.next();
iter = g.next(iter.value * iter.value);
iter = g.next(iter.value * iter.value);
iter = g.next(-1);
console.log(iter.done);

// Basically the generator and the outer execution context seem to 
//  work as coroutines to each other except that the outer execution
//  context does not yield.


/// Passing errors to generator functions

function* k()
{
    try
    {
        var result = yield "yielding_string";
        console.log("Cannot reach this statement!");
    }
    catch(e)
    {
        console.log("" + e);
    }
}

function* l()
{
    var result = yield "yielding_string";
    console.log("Cannot reach this statement!");
}

var _k = k();
var value = _k.next().value;

_k.throw(new Error("Sotemhing wnet wrnog!\n"));

var _l = l();
var value = _l.next().value;

try
{
    _l.throw(new Error("Sotemhing wnet wrnog aiagn!\n"));
}
catch(e)
{
    console.log("" + e);
}