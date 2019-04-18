
/// NOT THE 'export' keyword to indicate anybody can import this class

export class Person
{
    constructor(public firstName : string, public lastName : string, public age : number)
    {
    }

    getFullName()
    {
        return this.firstName + " " + this.lastName;
    }
}

/// Ensure we do not have any executable code (as below) so that we do not want to execute it every time we are importing it into a new ts file.

console.log("Importing modules_1.ts");