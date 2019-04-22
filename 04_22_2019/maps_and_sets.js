
/// Map object

var map = new Map();

map.set(1, "1");
map.set(2, "2");
map.set(3, "3");
map.set("Bird", "3");

// Iterate 

for (var pair of map)
{
    console.log(pair[0], pair[1]);
}

// Can also use

for (var [key, value] of map)
{
    console.log(key, value);
}

console.log("Size: " + map.size);
console.log("Has 'Bird'? : " + map.has("Bird"));

// Delete "Bird"
map.delete("Bird");

for (var [key, value] of map)
{
    console.log(key, value);
}

// Clear map
map.clear();

console.log("Map cleared!")

for (var [key, value] of map)
{
    console.log(key, value);
}


// Object vs. Map
//  Key type for map can be anything; Only string for Object
//  Manual size tracking for Object
//  Iteration of Map is in insertion order of elements


/// WeakMap object

// Keys can only be objects and values can be aritrary values
//
// Object references are held 'weakly' which means that they can be garbage
//  collected if there is no other reference to them outside the map.
//
// Similar to having a std::weak_ptr as key. When all shared_ptrs for the 
//  same object go out of scope, weak_ptr returns null when we try to 
//  convert it to shared_ptr.

// Can be used to hide implementation details. 
//  See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#WeakMap_object
//  for more information.


/// Sets (Collection of unique values)

var set = new Set();

set.add(1);
set.add("Name");
set.add("Age");
set.add(1);         // Will not be added

console.log(set.size);
console.log(set.has(1));
set.delete(1);
console.log("Deleted '1'");
console.log(set.size);

for (var item of set)
    console.log(item);


/// Converting between array and set

// Set to array
console.log(Array.from(set));
console.log([...set]);              // Spread operator

// Array to set

set = new Set(Array.from(set));
console.log(set);


/// WeakSet

// Can only hold unique 'objects'; Is not enumerable.
// Cannot contain arbitrary values of any type.
// Holds objects 'weakly' like in WeakMap


/// Key and Value equality of Map and Set:

// Equality: Works like identity comparison '===' operator
// -0 and +0 are equal.
// NaN is equal to itself (contrary to '===' operator)