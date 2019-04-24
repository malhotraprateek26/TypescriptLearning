// Taken from: https://www.typescriptlang.org/docs/handbook/interfaces.html
function getCounter() {
    var counter = function (start) { return "" + start; };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
// 'c' is an object, but can also act like a function (see below):
console.log(c(50));
