;
/// JSON.parse
var data = "{ \"name\" : \"Joe\", \"age\" : 50, \"created\" : " + Date.now().toString() + " }";
var user = JSON.parse(data);
console.log(user);
console.log(user.name); // Correct
console.log(user.age); // Correct
console.log(typeof (user.created)); // NOT CORRECT - Should be 'object'
console.log("------------------------------");
/// We need to use the 'reviver' parameter to convert date correctly
// When a reviver is specified, the value parsed is transformed before
//  being returned.
// NOTE: Be sure to return untransformed values as it is, if they don't 
//  need to be modified.
console.log(JSON.parse('{"p" : 5}', function (key, value) {
    if (typeof (value) === 'number')
        return value * 2; // return value * 2 for numbers
    else
        return value; // return everything else unchanged  
}));
console.log("------------------------------");
// NOTE: If 'undefined' is returned from the reviver function, the property
//  is deleted from the resultant object.
// Continuing with our original example...
user = JSON.parse(data, function (key, value) {
    if (key == "created")
        return new Date(value); // Initialize date properly
    return value;
});
console.log(user);
console.log(user.name); // Correct
console.log(user.age); // Correct
console.log(user.created); // Correct
console.log(user.created.getFullYear()); // Correct
console.log(typeof (user.created)); // Correctly returns 'object' now
// NOTE: The date we see for user.created is UTC and is not localized.
// Also, JSON.parse does not allow trailing commas.
console.log("------------------------------");
/// Converting an object into JSON string
data = JSON.stringify(user);
console.log("JSON Stringified object: ", data);
user = JSON.parse(data);
console.log("Object from JSON: \t ", user);
