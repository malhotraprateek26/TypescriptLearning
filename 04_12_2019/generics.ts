
// Anything can go into & ANYTHING can come out of the function
//  Cannot restrict input and output types to the same kind of 'any'
function echo(arg : any) : any
{
    return arg;
}

function echo2<T>(arg : T) : T
{
    return arg;
}

console.log(echo(1));
console.log(echo("Hello"));

console.log(echo2(1));
console.log(echo2("Hello"));

console.log(echo2<string>("Hello"));
//console.log(echo2<number>("Hello"));    // ERROR



class Person
{
    constructor(public firstName : string, public lastName : string, public age : number)
    {
    }

    getFullName()
    {
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends Person
{

}

class Manager extends Person
{

}

var admin = new Admin("a", "a", 1);
var manager = new Manager("a", "a", 1);


/// GENERIC TEMPLATE RESTRICTIONS

function echo3<T extends Person>(person : T) : T
{
    return person;
}

function echo4<T>(person : T) : T
{
    return person;
}

class Dummy
{
}

var foo = echo3(admin);     // Returns Admin type
var bar = echo3(manager);   // Returns Manager type

var foo1 = echo4(admin);     // Returns Admin type
var bar1 = echo4(manager);   // Returns Manager type

//var foo2 = echo3(new Dummy());   // ERROR: Input arg type does not extend Person!
var bar2 = echo4(new Dummy());   // Returns Dummy type