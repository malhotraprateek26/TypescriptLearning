/// Implict typing in variable declarations

var n = 10;         // Implicit type assigned to variable by checking its assigned value!

n = true;       // ERROR! Implicit typing at work...


/// Implicit typing in function calls

function greet_string() : string
{
    return "Good Morning!";
}

var greeting = greet_string();     // 'greeting' implicitly becomes string variable

function greet_somthing()
{
    return "Good Morning!";
}

var greeting = greet_somthing();   // 'greeting' again implicitly becomes string variable

// Implicit typing not working condition:

var greeting_not_obvious;
greeting_not_obvious = greet_somthing(); // Type is 'any' now
greeting_not_obvious = 10;               // Type is 'any' now so can be reassigned to anything