
/// Intersection of different types combines all the members of the 
//  different types into one.
//  Eg: Person & Serializable & Loggable will have all functionality and 
//  data of a Person, serializable and Loggable.

// See: https://www.typescriptlang.org/docs/handbook/advanced-types.html

function extend<T1, T2>(first: T1, second: T2) : T1 & T2
{
    // A partial object for creating a T1 & T2 return object
    const retObj : Partial<T1 & T2> = {};

    // Simply duplicate properties of first and second objects into retObj

    for (const property in first)
    {
        // Check whether the object has the property with the specified
        //  name (This seems like reflection code !!!).
        if (first.hasOwnProperty(property))
        {
            // Create a property in for T1 side of retObj and assign it
            //  the corresponding value taken from first.
            (<T1>retObj)[property] = first[property];
        }
    }

    for (const property in second)
    {
        // Check whether the object has the property with the specified
        //  name (This seems like reflection code !!!).
        if (second.hasOwnProperty(property))
        {
            // Create a property in for T2 side of retObj and assign it
            //  the corresponding value taken from first.
            (<T2>retObj)[property] = second[property];
        }
    }

    // Finally create a proper 'T1 & T2' object from a partial one and 
    //  return it.
    return <T1 & T2> retObj;
}

class Person
{
    // Name property
    constructor(public name : string){}
}

interface Loggable
{
    // Logging function
    log(name : string) : void;
}

class ConsoleLogger implements Loggable
{
    log(name : string) : void
    {
        console.log("Name : " + name);
    }
}

const jim = extend(new Person("Jim"), ConsoleLogger.prototype);

// The below statement does not work!
//
// The reason is that ConsoleLogger's log function is created in its
//  prototype and not on the object.
//
// If we had duplicated the prototype's properties as well, this statement
//  would work.

//const jim = extend(new Person("Jim"), new ConsoleLogger());

jim.log(jim.name);

// NOTE: Also, see that the transpiled javascript does not contain any
//          mention of the Loggable interface!
//      This means that interfaces are completely a Typescript concept!