/// No 2 regex objects are the same
var regex1 = /\w+/;
var regex3 = /\w+/;
var regex2 = new RegExp("\\w+");
console.log(regex1); // /\w+/
console.log(regex2); // /\w+/
console.log(regex1 == regex3, regex1 === regex2); // false false
/// Syntax: pattern[, flags]
//  Pattern is the actual regex pattern
//  Flags is a string containing flag characters like:
//
//  g (for finding all matches), i (ignore case), 
//  m (^ and $ work over each line), s ('.' allows matching newlines)
//  u (treat pattern as unicode), 
//  y (sticky matching - attempts to match string from 'lastIndex')
regex1 = /ab+c/i; // String between the 2 '/' is the pattern,
//  and 'i' is the flag.
regex2 = new RegExp("ab+c", "i"); // Same regex as regex1
regex3 = new RegExp(/ab+c/i); // This works too !
//regex3 = new RegExp(/ab+c/, "i"); // ERROR: Assigning regex type to string.
// It does not work in TS even if it
//  is supported in EC6 JS.
console.log(regex1 == regex2, regex2 == regex3);
console.log("-----------------------------");
/// Matching using regex
regex1 = /0x([a-f]|[0-9])+/i; // Regex for matching hexadecimal values
var hexString = "0x001D97C";
// Check if string matches the regex
console.log(regex1.test(hexString));
/// Replacing using regex
regex2 = /(\w+)\s+(\w+)/i; // Capturing 2 matched strings with parenthesis
var Name = "Prateek Malhotra";
console.log(Name);
Name = Name.replace(regex2, "$2, $1");
console.log(Name);
/// Splitting strings into arrays of strings
var text = "This is a very long line, I wish it were smaller so that I could read it easily; Kindly split it into multiple lines. I do not want to scroll horizontally forever...";
var lines = text.split(/[\.\;\,]+\s*/i);
console.log(lines);
/// Sticky matching
var hexString = "0x001D97C, 0x003B2F8";
regex1 = /0x([a-f]|[0-9])+/iy; // 'y' for sticky matching
console.log(regex1.test(hexString)); // true
console.log(regex1.lastIndex); // 9
console.log(regex1.test(hexString)); // false
console.log(regex1.lastIndex); // Cannot match string starting 
//  from index: 9
// lastIndex is reset to 0.
console.log(regex1.test(hexString)); // true
console.log(regex1.lastIndex); // 9
/// Regex with Unicode
var text = 'Этот текст на русском языке!';
var regex = /[\u0400-\u04FF]+/g;
var match = regex.exec(text);
console.log(match[0]); // Prints "Этот"
console.log(regex.lastIndex); // 4
var match2 = regex.exec(text);
console.log(match2[0]); // Prints "текст"
console.log(regex.lastIndex); // 10
var a = { b: 50 };
console.log(a.b);
