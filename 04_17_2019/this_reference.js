
function Bicycle(cadence, speed, gear, tyrePressure)
{
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tyrePressure = tyrePressure;

    // 'this' object is the object 'BEING' constructed
    this.inflateTyres = function(pressure)
    {
        // Here 'this' is the object upon which inflateTypes has been called upon!
        // 'this' Can be 'b1' or 'b2'
        // During contruction, 'this' does not exist yet as the function has not been called yet...
        this.tyrePressure += pressure;      // Refer to current object using 'this'
    }
}

var b1 = new Bicycle(50, 20, 4, 25);
console.log(b1);
b1.inflateTyres(3);
console.log(b1);

var b2 = new Bicycle(50, 20, 4, 30);
console.log(b2);
b2.inflateTyres(5);
console.log(b2);


/// Binding 'this' to other objects for functions

console.log("\nInflating tyres by binding 'this' to another object...\n");



// Ctor function!
function Mechanic(name)
{
    this.name = name;
}

var mike = new Mechanic("Mike");

// Mike should be able to inflateTyres!

mike.inflateTyres = b1.inflateTyres;
//mike.inflateTyres(33);          // Will not work as there is no tyrePressure in Mike! XD

console.log(b1.tyrePressure);
console.log(b2.tyrePressure);
console.log(mike.tyrePressure);

mike.inflateTyres.call(b1, 33); // We bind the 'this' reference to b1 instead for inflateTyres here and so inflateTyres works on b1 instead.

console.log(b1.tyrePressure);
console.log(b2.tyrePressure);
console.log(mike.tyrePressure);

console.log("\nInflating b2...\n");

console.log(b1.tyrePressure);
console.log(b2.tyrePressure);
console.log(mike.tyrePressure);

mike.inflateTyres.call(b2, 88); // We bind the 'this' reference to b1 instead for inflateTyres here and so inflateTyres works on b1 instead.

console.log(b1.tyrePressure);
console.log(b2.tyrePressure);
console.log(mike.tyrePressure);