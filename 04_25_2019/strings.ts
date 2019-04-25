
/// Raw string literals (also called template strings)

/// Raw, multiline string
var rawString = `Joe
    is
young...`;

console.log(rawString);

// Raw strings can be used to specify placeholders for javascript expressions

var user = { name:"Joe", age:514, days: 19 };

console.log(`User ${user.name}'s age is only ${user.age + 1 - 1} years!`);

console.log("--------------------------");


/// Tagged Template

// We can place a tag (function name) before a raw string to pre-process
//  the template string literals and placeholder expressions.

console.log(preProcess `Joe is slowly getting older...
Oh no, Joe is dead!
Only ${user.age} years and ${user.days + 1} days old...`);

// We can have string/number placeholder array args using the following code:
//  "...placeholders : (string|number)[]"
// For simple string placeholders, use "...placeholders : string[]"

function preProcess(literals: TemplateStringsArray, ...placeholders : (string | number)[])
{
    let result = "";

    for (let i = 0; i < placeholders.length; ++i)
    {
        result += literals[i];
        result += placeholders[i].toString().replace(/(\d+)/, `'$1'`);
    }

    result += literals[literals.length - 1];
    return result;
}
