function Employee(){}


// The prototype object is created by using 'new Object()' when we are creating an object.

// So emp.prototype will be created using 'new Object()' when executing the below statement.
var emp = new Employee();

// Therefore, emp.prototype has a dunder-proto object which references the Object.prototype object!!!

console.log(Employee.prototype.__proto__ == Object.prototype);  // Returns true!!!
console.log(emp.__proto__.__proto__ == Object.prototype);       // Returns true!!!
console.log(Object.prototype.__proto__);                        // Returns NULL!!!

// So, emp.__proto__                -> Employee.prototype
//     Employee.__proto__           -> Object.prototype
//     Object.prototype.__proto__   == NULL
//
// So property lookup goes from emp -> Employee.proto -> Object.proto (Which is empty)

emp.__proto__.parentProp = "Parent of Employee";
console.log(emp.__proto__.parentProp);

Object.prototype.grandParentProp = "Grandparent";
console.log(emp.__proto__.__proto__.grandParentProp);

console.log("---");

console.log(emp.grandParentProp);
console.log(emp.parentProp);

console.log("---");

var foo = {};
console.log(foo.grandParentProp);       // RETURNS "Grandparent"

// Therefore, we are essentially creating a property for EVERY object 
//  EVER if we were to create the property on Object.prototype !!!


// NOTE: Object's prototype's dunder-proto is NULL.

console.log(Object.prototype.__proto__);

