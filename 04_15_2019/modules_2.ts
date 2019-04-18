
/// Imports particular class from the specific module (without .ts extension)
/// BUT This executes the modules_1.ts file too!!!

import {Person} from './modules_1';

console.log(new Person("Prateek", "Malhotra", 27).getFullName());