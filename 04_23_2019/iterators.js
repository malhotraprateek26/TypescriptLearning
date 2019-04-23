

/// Iterator: Any object which implements the iterator protocol with the
//  next() function.
// Returns a pair of 2 values with keys: 'value' and 'done'
// 'done' is a boolean representing whether the iterator is valid.
// When iterator is invalidated, it should return: {done = true} only.

// Iterating over an iterator consumes it (generally) and needs to be 
//  created again to iterate again.

// next() function is normally a generator function (co-routine).


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


/// Iterables
// An object is iterable if it defines its iteration behaviour.
// To be iterable, an object must implement the 'Symbol.iterator' method.
// This can be done in the object or up its prototype chain.

// Method 1: Implement 'Symbol.iterator' as a generator

var iterable1 = 
{
    *[Symbol.iterator]()
    {
        yield 1;
        yield 2;
        yield 3;
    }
}

for (var value of iterable1)
{
    console.log(value);
}

// Or...
// console.log([...iterable1]);


// Method 2: Implement 'Symbol.iterator' as a regular function returning
//              a custom iterator with a 'next()' method.

var iterable2 =
{
    from: 10,
    to: 15,

    [Symbol.iterator]()
    {
        var iterator = {};
        iterator.current = this.from;
        iterator.to = this.to;

        // Implement the 'next()' function
        iterator.next = function()
        {
            if (this.current <= this.to)
            {
                // Valid iterator state
                this.current++;
                return { done: false, value: this.current };
            }
            else
            {
                // Invalid iterator state
                return { done: true };
            }
        };

        return iterator;
    }
}

for (var value of iterable2)
{
    console.log(value);
}

// Or...
// console.log([...iterable2]);


// String, Array, TypedArray, Map and Set all have built-in iterables
//  because their prototype objects all have a 'Symbol.iterator' method.
