

// Promise 'handling' is always asynchronous and pass through an internal
//  job queue known as a microtask queue.

// A macrotask queue can consist of various events, network operation 
//  results, 'setTimeout()' scheduled calls, etc.

// Macrotasks are executed after the code has finished running and AFTER
//  the microtask queue is empty. It may get populated again after a
//  macrotask has executed though...

// Therefore the order is as such: Regular code > Promise handling > everything else like events etc.

/// Microtask vs Macrotasks (https://javascript.info/microtask-queue)

function microMacroTasks()
{
    setTimeout(() => console.log("Macrotask: Timeout!\n"));
    Promise.resolve().then(() => console.log("Microtask: Promise!"));
    console.log("Synchronous call!");
}

microMacroTasks();

// Priority order = Synchronous tasks > Microtasks > Macrotasks

// A more complicated example: Microtask creating a Macrotask

function microCreatesMacro()
{
    Promise.resolve().then(() => 
    {
        setTimeout(() => console.log("timeout"), 0);
    }).then(() => 
    {
        console.log("promise");
    });
}

microCreatesMacro();

// Macrotasks are handled only when promises give the engine a “free time”.
// So, if a promise chain does not wait for anything, then macrotasks like
//  setTimeout() or event handlers will fire later on, after all promises 
//  are over.