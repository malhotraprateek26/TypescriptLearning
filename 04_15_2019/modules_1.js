"use strict";
// IMPORTANT: Compile with:  tsc .\modules_1.ts --module "CommonJS"
exports.__esModule = true;
/// NOT THE 'export' keyword to indicate anybody can import this class
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
/// Ensure we do not have any executable code (as below) so that we do not want to execute it every time we are importing it into a new ts file.
console.log("Importing modules_1.ts");
