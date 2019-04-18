/// ANY type

var x : any;        // Ignore type checking

x = 10;
x = true;
x = "string";


/// Union type - only certain set of types are possible for a variable

var y : number | boolean;

y = 10;
y = true;
y = "string";   // ERROR!