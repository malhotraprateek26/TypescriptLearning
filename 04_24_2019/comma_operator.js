
// Evaluates each of its operands from left to right and returns the value
// of last operand.

// Usage: in for loops

var x = 1;

x = (x++, x);

console.log(x);


var a = 
[
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]    
]

for (var i = 0, j = 9; i <= 9; i++, j--)
{
    console.log('a[' + i + '][' + j + '] = ' + a[i][j]);
}