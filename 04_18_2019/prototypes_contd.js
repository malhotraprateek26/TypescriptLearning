
/// Checking whether function proto and ctor returned __proto__ are same

function foo()
{}

var fooObj = new foo();

foo.prototype.test = "The proto obj of foo!";

console.log(foo.prototype);     // Proves both prototype objects are the same!!!
console.log(fooObj.__proto__);  // Proves both prototype objects are the same!!!

console.log(foo.prototype == fooObj.__proto__);

/// Property lookup in an object and prototype

console.log(fooObj.hello);      // Undefined
fooObj.hello = "Hello";
console.log(fooObj.hello);      // Prints Hello
delete fooObj.hello;
console.log(fooObj.hello);      // Undefined
foo.prototype.hello = "Test";

// Here fooObj's proto obj is searched if fooObj does not contain the property asked for
console.log(fooObj.hello);      // Prints Test !!!

console.log(fooObj);            // Does not have 'hello'
console.log(fooObj.__proto__);  // Has 'hello'

fooObj.hello = "Hello";
console.log(fooObj.hello);      // Prints 'Hello'; No need to search the proto object now...



/// Object behaviour using prototypes

function Employee(name)
{
    this.name = name;
}

var emp1 = new Employee("Jim");
var emp2 = new Employee("Dwight");

// Create common and required function needed in Employee object should be created in its prototype object

// NOTE: This addition to prototype works at runtime and affects ALL employees created before or after this statement
//          Prototype lookup happens at runtime...
Employee.prototype.playPranks = function()
{
    console.log("Prank played!");
}

emp1.playPranks();      // Accesses prototype's playPranks() function
emp2.playPranks();      // Accesses prototype's playPranks() function

var emp3 = new Employee("Pam");

emp3.playPranks();      // Accesses prototype's playPranks() function too!

