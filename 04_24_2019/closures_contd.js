
/// Module Pattern (Access restrictions in JS)

// JS does not have traditional private/protected access specifiers.
// Module pattern helps creating private data in public APIs.

var person = 
{
    firstName: "Prateek",
    lastName: "Malhotra",
    getFirstName: function()
    {
        return this.firstName;
    }
}

console.log(person);

console.log(person.getFirstName());
console.log(person.firstName);          // No access restriction here


console.log("---------------------");


function createPerson()
{
    // Following variables are hidden from outer scope as it is declared 
    //  in the inner scope!

    var firstName = "Prateek";
    var lastName = "Malhotra";

    var person = 
    {
        getFirstName: function()
        {
            return firstName;   // Gets outer scope value
        },

        getLastName: function()
        {
            return lastName;   // Gets outer scope value
        }
    };

    return person;
}

person = createPerson();

console.log(person.getFirstName());
console.log(person.firstName); // Returns undefined. Access restriction applied !!!


/// Closures in async callbacks

var i;

var printFunc = function()
{
    console.log(i);
}

for (i = 0; i < 10; ++i)
{
    setTimeout(printFunc, 1000);
}


// -------------------------------

// Printing 10 values after 1 second of delay


var i;

for (i = 0; i < 10; ++i)
{
    // The below anon function gets called 10 times, so 10 copies of 'i'
    //  are created.
    (function(currentValue)     // This will be a copy of 'i'
    {
        // This scope is stored and subsequently printed correctly
        function printFunc2()
        {
            console.log(currentValue);
        }

        setTimeout(printFunc2, 1000);
    })(i);  // Sending in the value of 'i' at every loop.
}