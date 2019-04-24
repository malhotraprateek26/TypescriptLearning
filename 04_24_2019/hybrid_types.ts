
// Taken from: https://www.typescriptlang.org/docs/handbook/interfaces.html

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { return "" + start };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 'c' is an object, but can also act like a function (see below):

console.log(c(50));