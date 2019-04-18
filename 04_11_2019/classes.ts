// Classes are not inherently available in JS (dont know about new versions)

class Person
{
    firstName : string;  // No var keyword here???
    lastName : string;
    age : number;
}

// This is valid too...
//
//class Person
//{
//    firstName;  // No var keyword here???
//    lastName;
//    age;
//}

// This is valid too... (Implicit typing)
//var person = new Person();

var person : Person = new Person();

person.firstName = "Prateek";
person.lastName = "Malhotra";

console.log(person.firstName);
console.log(person);

