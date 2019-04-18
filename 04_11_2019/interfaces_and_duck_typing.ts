/// INTERFACES

interface Person
{
    firstName : string;
    lastName : string;

    // No method implementations - only signatures
    
    getFullName() : string;
};

class Foo implements Person
{
    firstName: string;
    lastName: string;

    getFullName(): string 
    {
        return this.firstName + " " + this.lastName;
    }    
};


/// DUCK TYPING

// PROBLEM: Replacing var with let gives a compilation error!

var person : Person = new Foo();

var someObj = // Inline object
{
    firstName : "Test",         // Same kind of variable as interface
    lastName : "Test",          // Same kind of variable as interface
    getFullName : () => "Test"  // Same kind of method signature as interface
}

// NOTE: someObj can be used as an implementation of Person interface 
//          as it has the same structure and types as the interface!!!

person = someObj;   // This is possible!

// If it looks like a duck and quacks like a duck, it must be a duck!!!

var someOtherObj = // Inline object
{
    firstName : "Test",         // Same kind of variable as interface
    //lastName : "Test",        // Not available as in interface
    getFullName : () => "Test"  // Same kind of method signature as interface
}

//person = someOtherObj;   // ERROR: This is NOT possible!

var anotherObj = // Inline object
{
    firstName : "Test",         // Same kind of variable as interface
    lastName : "Test",          // Same kind of variable as interface

    age : 0,                    // EXTRA VARIABLE!

    getFullName : () => "Test"  // Same kind of method signature as interface
}

person = anotherObj;   // This is possible too!

//person.age = 10;      // ERROR: Age does not exist in interface 
                        //          definition!