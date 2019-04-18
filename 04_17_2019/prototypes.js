
// JS doesn't have concept of classes. Prototypes is the closest concept

// JS objects do not 'own' methods. They just have properties.
//  Any property can be a function.

// There is a new 'class' concept in ES6 specification of JS that simulates a class-like behaviour.

function Bicycle(cadence, speed, gear, tyrePressure)
{
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tyrePressure = tyrePressure;

    // Property         Function
    this.inflateTyres = function(pressure)
    {
        this.tyrePressure += pressure;
    }
}

var b1 = new Bicycle(50, 20, 4, 25);


// Everytime a function is created a prototype object is created too
// Create a function 'object' and a prototype object will be created implicitly

function foo()
{
}

foo.prototype;      // This is the property which is assigned the prototype object when foo is created

// This happens for EVERY function, even if it doesn't create objects

function greet()
{
    console.log("Hello");
}

console.log(greet.prototype);    // See??

// Normally prototype does not do anything unless we craete an object in the function

var obj = new foo();    // Prototype object creates a __proto__ object ('this' object)
                        // The __proto__ property points to the prototype for the foo function!

console.log(obj);       // Empty object

var obj1 = new foo();
var obj2 = new foo();
var obj3 = new foo();

// All objects' __proto__ properties (obj1, obj2 and obj3) point to the same prototype object created for foo!


