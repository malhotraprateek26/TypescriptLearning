// By default a member variable is PUBLIC!

class Person
{
    // TRADITIONAL WAY
    //
    //private firstName : string;
    //private lastName : string;
    //
    //constructor(firstName : string, lastName : string)
    //{
    //    this.firstName = firstName;
    //    this.lastName = lastName;
    //}

    // NEW WAY

    constructor(protected firstName : string, private lastName : string, public age : number)
    {
    }

    greet()
    {
        console.log("Hey there!");
    }

    getFirstName() : string
    {
        return this.firstName;
    }

    setFirstName(name : string) : void
    {
        this.firstName = name;
    }

    private getLastName() : string
    {
        return this.lastName;
    }
}

class Programmer extends Person
{
    greet()
    {
        console.log("Hello World!");
    }

    greetLikeNormaPerson()
    {
        super.greet();
    }
}

var programmer = new Programmer("Prateek", "Malhotra", 27);
programmer.greet();
//programmer.firstName = "";             // ERROR! - Private member :(
console.log(programmer.getFirstName());  // Getter :)
programmer.setFirstName("");             // Setter :)
//console.log(programmer.getLastName()); // ERROR - Private Getter :(



class Prog extends Programmer
{
    greet()
    {
        console.log(this.firstName);        // Accessible to derived type
        //console.log(this.lastName);       // Not accessible to derived type
        console.log(this.age);              // Accessible to derived type
    }
}




