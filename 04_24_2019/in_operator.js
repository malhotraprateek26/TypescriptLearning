
var Horse = 
{
    legs : 4,
    health : 50
}

var Car = 
{
    wheels : 4,
    health : 150
}

function HasLegs(object)
{
    // Used to check if specified property is in the object or its 
    //  prototype chain.
    
    // NOTE: Can also use object.hasOwnProperty('legs') as well.

    //return object.hasOwnProperty('legs');
    return 'legs' in object;
}

console.log("Horse has legs: " + HasLegs(Horse));
console.log("Car has legs: " + HasLegs(Car));
