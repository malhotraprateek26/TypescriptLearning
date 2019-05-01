
function getFirstElements(elements, numElements = 0)
{
    if(elements.length === 0)
        return [];

    if(numElements == 0)
        return elements[0];

    var retArray = [];
    for (var i = 0; i < numElements; ++i)
    {
        if(elements[i] === undefined)
            break;

        retArray.push(elements[i]);
    }

    return retArray;
}

console.log(getFirstElements([7, 9, 0, -2]));
console.log(getFirstElements([], 3));
console.log(getFirstElements([7, 9, 0, -2], 3));
console.log(getFirstElements([7, 9, 0, -2], 6));
console.log(getFirstElements([7, 9, 0, -2], -3));
