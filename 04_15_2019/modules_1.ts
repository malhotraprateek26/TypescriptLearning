
// IMPORTANT: Compile with:  tsc .\modules_1.ts --module "CommonJS"
//            for older compilers (like 1.0.3.0)
//            For new versions, tsc .\modules_1.ts will suffice.

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

/// Ensure we do not have any executable code (as below) so that we do not
//      execute it every time we are importing it into a new ts file.

console.log("Importing modules_1.ts");