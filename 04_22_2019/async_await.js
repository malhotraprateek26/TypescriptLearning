

/// Async keyword

// This keyword can be prepended to a function and converts the returned
//  value into a promise.

async function f()
{
    return 1;
}

f().then(console.log);      // Prints '1'

// We can return a promise as well

f = async function()
{
    return Promise.resolve(2);
};

f().then(console.log);      // Prints '2'


/// Await keyword
// Only works inside async functions

f = async function()
{
    var promise = new Promise((resolve, reject) => 
    {
        // Wait for 1 second and then resolve promise with "Done!"
        setTimeout(() => resolve("Done!"), 1000);
    });

    // Waits here till the promise is resolved/rejected
    //  Is this a microtask now ??? - NO
    var result = await promise; // STMT_1

    // If previous line is a microtask and result is being used here,
    //  does this become a microtask as well ??? - NO
    console.log(result);        // STMT_2

    // This statement does not get executed before the previous one.
    console.log("----");        // STMT_3

    // Statements starting from STMT_1 do not becoms microtasks as 
    //  STMT_3 does not execute before STMT_2 (see micro_macro_tasks.js).
    //
    // 'await' statement literally pauses JS execution until the promise
    //  is handled and then proceeds.
    //
    // This does NOT cost any CPU resources as the engine can do other
    //  jobs like event handling, execution of other scripts, etc.
    //
    // It is just a better way than using .then() handler.
};

f();

// NOTE: 'async' cannot be used in regular functions, nor can it be used
//          in top-level code like such: var a = await fetch('url').json();
//      To be used in top-level code, wrap it into an anonymous async
//      function as such:
//      (async () => { var a = await fetch('url').json(); })();


/// 'Thenable' objects

// These are objects which handle the then() function and can therefore
//  be treated as promise-compatible objects.

class Thenable
{
    constructor(value)
    {
        this.value = value;
    }

    then(resolve, reject)
    {
        // Change 'value' to 'value ^ 2' after 1 second
        setTimeout(() => resolve(this.value * this.value), 1000);
    }
};

f = async function(num)
{
    // Automatically calls then() on the Thenable object and waits for the result.
    var result = await new Thenable(num);
    console.log(result);
    return result;
}

// Calculates (3 * 3 = 9) and then (9 * 9 = 18) in one second each.
f(3).then((result) => {f(result)});


/// Async class methods

class Waiter
{
    async wait()        // Async class method
    {
        return await Promise.resolve("Done waiting...");
    }
}

new Waiter().wait().then(console.log);


/// Error handling
//  await promise will throw in case of a rejection.
//  To handle this, we can wrap the await callin try...catch blocks

async function g()
{
    try
    {
        await Promise.reject(new Error("ERROR 1!"));
        //throw new Error("ERROR 1!"); // The same as above line
    }
    catch(err)
    {
        console.log("*** ERROR HANDLED *** " + err);
    }
}

async function h()
{
    await Promise.reject(new Error("ERROR 2!"));
    //throw new Error("ERROR 2!"); // The same as above line
}

g();

// We can also append a catch to the async function...
h().catch((err) => console.log("*** ERROR HANDLED OUTSIDE *** " + err));


// await can be used with Promise.all and Promise.race

/// Async/Await microtasks
// Both these concepts are analogous to Promises and therefore use the 
//  microtask queue for their execution just like promises.

// Example: 

// This function will do some dummy work for a few seconds
async function foo()
{
    i = 0;
    for(; i < 1000000000; ++i) {}
    return i;
}

(async () => 
{
    // This will always execute after await is complete.
    //  MACROTASK!
    setTimeout(() => console.log("Timeout complete!"), 0);

    // As this is a microtask, it will wait until foo is executed.
    //  MICROTASK!
    var value = await foo();

    // This will always execute first.
    console.log("Await complete: " + value + "!");
})();


// Can async functions be used as normal functions ???