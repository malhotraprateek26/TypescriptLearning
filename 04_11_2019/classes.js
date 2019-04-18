var Person = (function () {
    function Person() {
    }
    return Person;
})();

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
var person = new Person();

person.firstName = "Prateek";
person.lastName = "Malhotra";

console.log(person.firstName);
console.log(person);
