// Static methods can only be called on the classes and not on instances.
//  IE: The same as in C++...
var Maths = /** @class */ (function () {
    function Maths() {
    }
    Maths.Square = function (num) {
        return num * num;
    };
    return Maths;
}());
console.log(Maths.Square(50));
