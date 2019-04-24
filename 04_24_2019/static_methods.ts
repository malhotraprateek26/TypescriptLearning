
// Static methods can only be called on the classes and not on instances.
//  IE: The same as in C++...

class Maths
{
    static Square (num : number) : number 
    {
        return num * num;
    }
}

console.log(Maths.Square(50));