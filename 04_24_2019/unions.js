/// Unions can be used for restricting variables to certain multiple number
//  of types
// See https://www.typescriptlang.org/docs/handbook/advanced-types.html
function calcPad(num) {
    var str = "";
    for (var i = 0; i < num; ++i)
        str += " ";
    return str;
}
function padLeft(value, padding) {
    if (typeof (padding) == "string")
        return padding + value;
    else if (typeof (padding) == "number")
        return calcPad(padding) + value;
}
console.log("Hello" + padLeft("World", 2));
console.log("Hello" + padLeft("World", "  "));
console.log("-------------------------------");
function move(units, direction) {
    if (typeof (direction) == "number") {
        if (direction == 1)
            console.log("Move '" + units + "' units up");
        else if (direction == -1)
            console.log("Move '" + units + "' units down");
        else
            console.log("Stay still");
    }
    else if (typeof (direction) == "number")
        console.log("Move '" + units + "' units to the " + direction);
}
move(1, "North");
//move("NorthWall");      // ERROR
move(2, -1);
move(1, 1);
move(1, 0);
// Seems that we cannot use user created objects for type unions.
