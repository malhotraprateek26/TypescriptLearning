"use strict";
/// Imports particular class from the specific module (without .ts extension)
/// BUT This executes the modules_1.ts file too!!!
exports.__esModule = true;
var modules_1_1 = require("./modules_1");
console.log(new modules_1_1.Person("Prateek", "Malhotra", 27).getFullName());
