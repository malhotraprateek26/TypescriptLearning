

/// IN ADDITION TO VISIBILITY MODIFIERS, ...


/// READ ONLY MODIFIER

class Person
{
    readonly firstName;
    readonly lastName = "Malhotra";  // CAN BE SET HERE
    readonly age;

    constructor(firstName : string, lastName : string, age : number)
    {
        this.firstName = firstName;       // OR HERE
        //this.lastName = lastName;       // ERROR - Already set!
        this.age = age;       // OR HERE
    }
}


/// SHORT HAND WAY

class Person2
{
    constructor(readonly firstName : string)
    {
    }
}

var person = new Person("Prateek", "Malhotra", 27);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

var person2 = new Person2("Prateek");
console.log(person2.firstName);