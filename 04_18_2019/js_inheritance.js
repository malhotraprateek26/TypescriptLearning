
function Employee(name)
{
    this.name = name;
}

Employee.prototype.getName = function()
{
    return this.name;
}

function Manager(name, dept)
{
    this.name = name;
    this.dept = dept;
}

Manager.prototype.getDept = function()
{
    return this.dept;
}

// emp1.__proto__ -> Employee.proto -> Object.proto
// emp2.__proto__ -> Manager.proto -> Object.proto

// Here we point the dunder-proto of manager to the proto object of Employee.
//  This creates the required inheritance hierarchy.
Manager.prototype.__proto__ = Employee.prototype;

//__________________________________
// emp1.__proto__                   |
//                                  |-> Employee.proto -> Object.proto
// emp2.__proto__ -> Manager.proto  |
//__________________________________|

var emp1 = new Employee("Jim");

console.log(emp1.getName());

var emp2 = new Manager("Michael", "Sales");

console.log(emp2.getName());
console.log(emp2.getDept());


// NOTE: * Prototype concept seems to be similar to Lua's prototype concept !!!

Employee.prototype.salary = 100;

Employee.prototype.getSalary = function()
{
    return this.salary;     // The 'this' is important
}

Manager.prototype.salary = 500; // Manager gets more than employee, so override the salary property in employee...

console.log("Salary: " + emp1.getSalary());
console.log("Salary: " + emp2.getSalary());