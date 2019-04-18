
/// Object links with prototype

function foo()
{
    this.val = "foo";
}

var a = new foo();

// NOTE: __proto__ is also called dunder-proto (because of the underscores???)

var proto = foo.prototype;

console.log(proto.constructor);         // Points to the foo() ctor function.
console.log(foo.prototype.constructor); // Points to the foo() ctor function.

var b1 = new a.__proto__.constructor();      // Another way to say 'var b = new foo();'

// The above dunder-proto property can be used but is not recommended.
//  Use the function prototype property instead!

var b2 = new foo.prototype.constructor();    // Dont know why we will be using this...



/// Changing the constructor function using prototypes (Yes this can be done)

// NOTE: Comment/Uncomment and run program to see effects of this statement
a.__proto__.constructor = function bar() {this.val2 = "bar";}

var c1 = new a.__proto__.constructor();
var c2 = new foo.prototype.constructor();

console.log(a);     // BECOMES OF TYPE 'BAR' !!!
console.log(b1);    // BECOMES OF TYPE 'BAR' !!!
console.log(b2);    // BECOMES OF TYPE 'BAR' !!!

console.log(c1);    // Is of 'bar' type now...
console.log(c2);    // Is of 'bar' type now...
console.log(c1.__proto__.constructor);  // bar()

// Even though changing the ctor function of proto changes the type of already existing objects,
//  it does not change the member variables of the existing objects; Only the variables for objects
//  created after ctor change are affected...