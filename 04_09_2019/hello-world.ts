// Primitive types in JS and TS

var a : number;
var b : boolean;
var c : string;

//var foo : undefined;        // Not really used anywhere
var foo2 = undefined;

//var boo : null;             // Not really used anywhere
var boo2 = null;

a = 10;
b = true;
c = 'Hello';


/// ARRAYS

var arr : number[] = [1, 2, 3];

arr = [1, 2];
//arr = ['a'];    // Does not work

arr.push(5);

a = arr.pop();

//b = arr.pop();    // Does not work

// Flexible arrays in JS
var arr2 = [1, 'str', true];

// In TS - use Tuple
var _tuple : [number, boolean];
_tuple = [1, true];
