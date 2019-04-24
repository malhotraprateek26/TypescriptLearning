// Whole script must be run in strict mode!
"use strict";       // Makes script throw an error (at line #6)
                    // Should always be the first statement executed though.

var myName = "-----";

myname = "Prateek";     // Creates a new variable in global scope 
                        //  instead of throwing an error! (If not in
                        //  strict mode)

console.log(myName);
console.log(myname);



function code()
{
    "use strict";   // Only this function will be run in strict mode
                    // if it has not been mentioned at start of the file.

    var Name = "------";
    name = "Prateek";
}

code();