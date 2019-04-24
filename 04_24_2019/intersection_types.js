/// Intersection of different types combines all the members of the 
//  different types into one.
//  Eg: Person & Serializable & Loggable will have all functionality and 
//  data of a Person, serializable and Loggable.
// See: https://www.typescriptlang.org/docs/handbook/advanced-types.html
function extend(first, second) {
    // A partial object for creating a T1 & T2 return object
    var retObj = {};
    // Simply duplicate properties of first and second objects into retObj
    for (var property in first) {
        // Check whether the object has the property with the specified
        //  name (This seems like reflection code !!!).
        if (first.hasOwnProperty(property)) {
            // Create a property in for T1 side of retObj and assign it
            //  the corresponding value taken from first.
            retObj[property] = first[property];
        }
    }
    for (var property in second) {
        // Check whether the object has the property with the specified
        //  name (This seems like reflection code !!!).
        if (second.hasOwnProperty(property)) {
            // Create a property in for T2 side of retObj and assign it
            //  the corresponding value taken from first.
            retObj[property] = second[property];
        }
    }
    // Finally create a proper 'T1 & T2' object from a partial one and 
    //  return it.
    return retObj;
}
var Person = /** @class */ (function () {
    // Name property
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (name) {
        console.log("Name : " + name);
    };
    return ConsoleLogger;
}());
// Both statements below work well.
var jim = extend(new Person("Jim"), new ConsoleLogger());
//const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);
