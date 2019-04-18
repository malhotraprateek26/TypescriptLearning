// Simple function to create object
function createBicycle(cadence, speed, gear)
{
    var newBicycle = {};

    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;

    return newBicycle;
}

var b1 = new createBicycle(50, 20, 4);      // Using simple function in ctor mode still works!

console.log(b1);

// Ctor function
function Bicycle(cadence, speed, gear)
{
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;

    //return this;      // WARNING: This returns the global object!!!
}

// Using ctor function as simple function!
var b2 = Bicycle(50, 20, 4);      // ERROR: RETURNS undefined as we are not returning anything!

console.log(b2);