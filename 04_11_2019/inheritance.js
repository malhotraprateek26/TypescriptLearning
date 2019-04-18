// Inheritance is not available in JS (dont know about new versions)
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Person = (function () {
    function Person(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    Person.prototype.greet = function () {
        console.log("Hey there!");
    };
    return Person;
})();

var Programmer = (function (_super) {
    __extends(Programmer, _super);
    function Programmer(fName, lName, langauge) {
        _super.call(this, fName, lName);
        this.language = langauge;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello World!");
    };

    Programmer.prototype.greetLikeNormaPerson = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
})(Person);

var programmer = new Programmer("Prateek", "Malhotra", "TS");

programmer.greet();
programmer.greetLikeNormaPerson();

/// POLYMORPHISM
var programmer2 = new Programmer("Prateek", "Malhotra", "TS");

programmer2.greet(); // Prints "Hello World" instead of "Hey there"!
//programmer2.greetLikeNormaPerson();   // ERROR - cannot call!!!
