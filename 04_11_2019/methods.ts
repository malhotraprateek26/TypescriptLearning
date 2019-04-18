class Person
{
    firstName : string;  // No var keyword here???
    lastName : string;
    age : number;

    // NO OVERLOADED CTORS POSSIBLE!!!

    //constructor()
    //{
    //    this.firstName = " ";
    //    this.lastName = " ";
    //    this.age = 0;
    //}

    constructor(firstName : string, lastName : string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 0;
    }

    getFullName()
    {
        return this.firstName + " " + this.lastName;
    }
}

var person : Person = new Person("Prateek", "Malhotra");

console.log("Hello " + person.getFullName() + "!");