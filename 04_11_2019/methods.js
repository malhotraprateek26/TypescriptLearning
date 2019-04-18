var Person = (function () {
    //constructor()
    //{
    //    this.firstName = " ";
    //    this.lastName = " ";
    //    this.age = 0;
    //}
    // NO OVERLOADED CTORS POSSIBLE!!!
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 0;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
})();

var person = new Person("Prateek", "Malhotra");

console.log("Hello " + person.getFullName() + "!");
