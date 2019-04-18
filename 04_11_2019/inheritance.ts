// Inheritance is not available in JS (dont know about new versions)

class Person
{
    firstName : string;
    lastName : string;

    constructor(fName : string, lName : string)
    {
        this.firstName = fName;
        this.lastName = lName;
    }

    greet()
    {
        console.log("Hey there!");
    }
}

class Programmer extends Person
{
    language : string;

    constructor(fName : string, lName : string, langauge : string)
    {
        super(fName, lName);
        this.language = langauge;
    }

    greet()
    {
        console.log("Hello World!");
    }

    greetLikeNormaPerson()
    {
        super.greet();
    }
}

var programmer = new Programmer("Prateek", "Malhotra", "TS");

programmer.greet();
programmer.greetLikeNormaPerson();


/// POLYMORPHISM

var programmer2 : Person = new Programmer("Prateek", "Malhotra", "TS");

programmer2.greet();    // Prints "Hello World" instead of "Hey there"!
//programmer2.greetLikeNormaPerson();   // ERROR - cannot call!!!