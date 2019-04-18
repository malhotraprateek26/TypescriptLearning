
/// Object function (the name is 'Object' but type is function and is global)

// New way to create an object

var obj = new Object();

console.log(obj.__proto__);     
console.log(Object.prototype);  
console.log(obj.__proto__ == Object.prototype);

var simple = {};

console.log(simple.__proto__);     
console.log(Object.prototype);  
console.log(simple.__proto__ == Object.prototype);

// Therefore both the methods are the same...
// So then, why to do it this way???