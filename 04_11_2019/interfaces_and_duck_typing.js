/// INTERFACES

var Foo = (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Foo;
})();
;

/// DUCK TYPING
// PROBLEM: Replacing var with let gives a compilation error!
var person = new Foo();

var someObj = {
    firstName: "Test",
    lastName: "Test",
    getFullName: function () {
        return "Test";
    }
};

// NOTE: someObj can be used as an implementation of Person interface
//          as it has the same structure and types as the interface!!!
person = someObj; // This is possible!

// If it looks like a duck and quacks like a duck, it must be a duck!!!
var someOtherObj = {
    firstName: "Test",
    //lastName : "Test",        // Not available as in interface
    getFullName: function () {
        return "Test";
    }
};

//person = someOtherObj;   // ERROR: This is NOT possible!
var anotherObj = {
    firstName: "Test",
    lastName: "Test",
    age: 0,
    getFullName: function () {
        return "Test";
    }
};

person = anotherObj; // This is possible too!
//person.age = 10;      // ERROR: Age does not exist in interface
//          definition!
