/// From: https://www.youtube.com/watch?v=DHvZLI7Db8E

function startBasicExample1()
{
    var p = new Promise((resolve, reject) => 
    {
        var a = 1 + 2;

        if(a == 2)
            resolve("Success");
        else
            reject("Failed");
    });

    p.then((message) => 
    {
        console.log("Example1: Then..." + message);
    }).catch((message) => 
    {
        console.log("Example1: Catch..." + message);
    });
}

function promise()
{
    return new Promise((resolve, reject) =>
    {
        if(val == 50)
        {
            reject
            (
                {
                    message: "Value is 50!"
                }
            )
        }
        else if(val % 10 == 0)
        {
            reject
            (
                {
                    message: "Value is a multiple of 10!"
                }
            )
        }
        else
        {
            resolve
            (
                {
                    message: "Value accepted!"
                }
            )
        }
    });
}

var val = 50;   // = 50;

function startBasicExample2()
{
    promise().then((data) => 
    {
        console.log("Example2: Success! " + data.message);
    }).catch((data) => 
    {
        console.log("Example2: Failure: " + data.message);
    });
}

startBasicExample1();
startBasicExample2();


// Helper function to understand promises
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }


/// Multiple promises running in parallel

var promise1 = new Promise((resolve, reject) =>
{
    //sleep(2000).then(() => {
        resolve("Promise 1 DONE!");
        //reject("Promise 1 NOT DONE!");
    //});
});

var promise2 = new Promise((resolve, reject) =>
{
    resolve("Promise 2 DONE!");
    //reject("Promise 2 NOT DONE!");
});

var promise3 = new Promise((resolve, reject) =>
{
    sleep(2000).then(() => {
        //resolve("Promise 3 DONE!");
        reject("Promise 3 NOT DONE!");
    });
});

// Only returns when ALL promises have finished execution (resolved or rejected).
//  It does not matter if any promise was rejected or resolved.

Promise.all(
    [
        promise1,
        promise2,
        promise3
    ]
).then((messages) => 
{
    console.log("Eg1: Success: ", messages);
}).catch((messages) =>
{
    console.log("Eg1: Failure: ", messages);
});

// Returns when the fastest running promise finishes execution (resolved or rejected).
//  It does not matter if any promise was rejected or resolved.

Promise.race(
    [
        promise1,
        promise2,
        promise3
    ]
).then((message) => 
{
    console.log("Eg2: Success: ", message);
}).catch((messages) =>
{
    console.log("Eg2: Failure: ", messages);
});