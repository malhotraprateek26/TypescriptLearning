
"use strict"

function Prefixer(prefix)
{
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr)
{
    let that = this;
    return arr.map(function(x)
    {
        console.log(that.prefix + x);
    });
}

let pre = new Prefixer('Hello ');

pre.prefixArray(["Brad", "Jeff"]);


console.log("------------------------------");

/// With lambda functions
// The below example works because lambda functions do not have a 'this'
//  reference. They use the parent scope's 'this' reference as their own.

Prefixer.prototype.prefixArray = function(arr)
{
    //let that = this;      // No need to save the 'this' reference
    return arr.map((x) =>
    {
        console.log(this.prefix + x);   // The 'this' ref here points to the 
                                        //  'function(arr)' scope instead.
    });
}

pre = new Prefixer('Hello ');
pre.prefixArray(["Brad", "Jeff"]);

console.log("------------------");

let add = function(a, b)
{
    let sum = a+b;
    console.log(sum);
    return false;
};

add(2, 2);

console.log("------------------");

add = (a, b) =>             // No need for 'this' ref, so use a lambda!
{
    let sum = a+b;
    console.log(sum);
    return false;
}

add(2, 2);