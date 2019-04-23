
/// Iteration using generators

function* fibonacci()
{
    var fn1 = 0;
    var fn2 = 1;

    while (true)
    {
        var current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;

        var reset = yield current;  // 'current' is returned to caller, 
                                    // but if caller sends an argument,
                                    // yield returns the arg in this function
        if(reset)           // Reset the iterator
        {
            fn1 = 0;
            fn2 = 1;
        }
    }
}

var sequence = fibonacci();

for (var i = 0; i < 8; ++i)
    console.log(sequence.next().value);

console.log("Resetting...\n" + sequence.next(true).value);

for (var i = 1; i < 8; ++i)
    console.log(sequence.next().value);
