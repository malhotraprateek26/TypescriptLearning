
// Tests whether the 'prototype' property of a ctor function appears 
//  anywhere in the prototype chain of an object

function Car(make, model)
{
    this.make = make;
    this.model = model;
}

var auto = new Car('Honda', 'Accord');

console.log(auto instanceof Car);       // Returns true
console.log(auto instanceof Object);    // Returns true
//console.log(Car instanceof auto);     // ERROR

function Car2(make, model)
{
    this.make = make;
    this.model = model;
}

console.log(auto instanceof Car2);      // Returns false