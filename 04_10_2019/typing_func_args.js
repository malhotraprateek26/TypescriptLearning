var a;
var b;
var c;

a = 10;
b = true;
c = "Hello";

function add(a, b) {
    return a + b;
}

var sum = add(1, 2);
console.log(sum);

sum = add("foo", 2);
console.log(sum);

function addNums(a, b) {
    return a + b;
}

sum = addNums(1, 2);
console.log(sum);

sum = addNums("foo", 2); // ERROR!
console.log(sum);

add(1); // ERROR! Typescript enforces matching number of args by default!!
addNums(1); // ERROR! Typescript enforces matching number of args by default!!

/// Variable args
function addVariable(a, b, c) {
    return a + b;
}

addVariable(1, 2); // FINE
addVariable(1, 2, 3); // FINE
addVariable(1, 2, 3, 4); // ERROR!

/// Default args
function addDefault(a, b, c, d) {
    if (typeof c === "undefined") { c = 0; }
    return a + b + c;
}

console.log(addDefault(1, 2)); // FINE
console.log(addDefault(1, 2, 3)); // FINE
console.log(addDefault(1, 2, 3, 4)); // FINE
addDefault(1, 2, 3, 4, 5); // ERROR!

/// Optional args with strict types
function addOptionalTyped(a, b, c, d) {
    if (typeof c === "undefined") { c = 0; }
    return a + b + c;
}

console.log(addOptionalTyped(1, 2)); // FINE
console.log(addOptionalTyped(1, 2, 3)); // FINE
console.log(addOptionalTyped(1, 2, 3, 4)); // FINE
addOptionalTyped(1, 2, 3, 4, "5"); // ERROR!
addOptionalTyped(1, 2, 3, 4, 5); // ERROR!

/// Default args with strict types
function addDefaultTyped(a, b, c) {
    if (typeof c === "undefined") { c = 0; }
    return a + b + c;
}

console.log(addDefaultTyped(1, 2)); // FINE
console.log(addDefaultTyped(1, 2, 3)); // FINE
console.log(addDefaultTyped(1, 2, "3")); // ERROR!

/// Strict return types
function addReturnTyped(a, b, c) {
    return a + b + c;
}

var retVal = 0;
var retVal2 = false;

retVal = addDefaultTyped(1, 2);
retVal2 = addDefaultTyped(1, 2, 5);

console.log(retVal2);
