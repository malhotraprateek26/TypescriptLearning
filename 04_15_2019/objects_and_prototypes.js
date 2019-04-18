
// Blueprint for classes

// Objects in JS (essentially a key-value map or JSON?)

var obj = 
{
    "Foo" : "Value",
    "Age" : 27,
    "address" : 
    {
        "street" : "123",
        "bldg" : "123"
    }
};

console.log(obj);
console.log(obj["Foo"]);


// JS functions (same as TS)

// JS ctor functions

function createObj(a, b)
{
    //var newObject = {};   // Not needed ctor function
    this.a = a;             //newObject.a = a;
    this.b = b;             //newObject.b = b;
    //return newObject;     // Not needed for ctor function
}

// In JS, new is followed by a function name instead of a class name as in C++ type languages

var emp = new createObj();


// Regular functions vs ctor functions

var bicycle = 
{
    //"cadence" : 50,
    //"speed" : 20,
    //"gear" : 4
};

// Simple function to create object
function createBicycle(cadence, speed, gear)
{
    var newBicycle = {};

    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;

    return newBicycle;
}

var b1 = createBicycle(50, 20, 4);
var b2 = createBicycle(20, 5, 1);

console.log(b1);
console.log(b2);


/// CTOR functions

function bCtor(cadence, speed, gear)
{
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
}

var b3 = new bCtor(50, 20, 4);        // Function called in ctor mode!
//var b4 = bCtor(50, 20, 4);          // WILL NOT WORK!

console.log(b3);        // The class will be called bCtor !!!

// Convention for function to be called in ctor mode
// Starts with capital letter (no camel casing) + class name as function name
function Bicycle(cadence, speed, gear)
{
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
}

var b5 = new Bicycle(50, 20, 4);
console.log(b5);        // Class will be called Bicycle now...