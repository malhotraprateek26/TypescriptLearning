/// Raw string literals (also called template strings)
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/// Raw, multiline string
var rawString = "Joe\n    is\nyoung...";
console.log(rawString);
// Raw strings can be used to specify placeholders for javascript expressions
var user = { name: "Joe", age: 514, days: 19 };
console.log("User " + user.name + "'s age is only " + (user.age + 1 - 1) + " years!");
console.log("--------------------------");
/// Tagged Template
// We can place a tag (function name) before a raw string to pre-process
//  the template string literals and placeholder expressions.
console.log(preProcess(__makeTemplateObject(["Joe is slowly getting older...\nOh no, Joe is dead!\nOnly ", " years and ", " days old..."], ["Joe is slowly getting older...\nOh no, Joe is dead!\nOnly ", " years and ", " days old..."]), user.age, user.days + 1));
// We can have string/number placeholder array args using the following code:
//  "...placeholders : (string|number)[]"
// For simple string placeholders, use "...placeholders : string[]"
function preProcess(literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < placeholders.length; ++i) {
        result += literals[i];
        result += placeholders[i].toString().replace(/(\d+)/, "'$1'");
    }
    result += literals[literals.length - 1];
    return result;
}
