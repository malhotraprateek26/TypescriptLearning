

/// Unions can be used for restricting variables to certain multiple number
//  of types

// See https://www.typescriptlang.org/docs/handbook/advanced-types.html

function calcPad(num : number)
{
    let str : string = "";
    for (let i : number  = 0; i < num; ++i)
        str += " ";

    return str;
}

function padLeft(value : string, padding : string | number)
{
    if (typeof(padding) == "string")
        return padding + value;
    else if(typeof(padding) == "number")
        return calcPad(padding) + value;
}

console.log("Hello" + padLeft("World", 2));
console.log("Hello" + padLeft("World", "  "));


console.log("-------------------------------");




/// A type union can be used when multiple types need to be used as enumerations.
// Variables cannot be used though, only literal values.

// See https://basarat.gitbooks.io/typescript/content/docs/types/literal-types.html

type CardinalDirection = | "North" | "South" | "East" | "West" | 1 | -1 | 0;

function move(units : number, direction : CardinalDirection)
{
    if(typeof(direction) == "number")
    {
        if(direction == 1)
            console.log("Move '" + units + "' units up");
        else if(direction == -1)
            console.log("Move '" + units + "' units down");
        else
            console.log("Stay still");
    }
    else if(typeof(direction) == "number")
        console.log("Move '" + units + "' units to the " + direction);
}

move(1, "North");
//move("NorthWall");      // ERROR
move(2, -1);
move(1, 1);
move(1, 0);

// Seems that we cannot use user created objects for type unions.