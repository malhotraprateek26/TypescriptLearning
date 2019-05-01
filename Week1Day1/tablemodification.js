
function modifyCell()
{
    var row = parseInt(document.querySelector("#row").value);
    var col = parseInt(document.querySelector("#col").value);

    var text = document.querySelector("#text").value;

    var elem = findCell(row, col);

    if(elem === null)
        alert("Incorrect row or column number entered!");

    elem.innerText = text;
}

function findCell(row, col)
{
    var query = "table tr:nth-child(" + (row + 1) + ") td:nth-child(" + (col + 1) + ")";
    var elem = document.querySelector(query);

    if (elem === undefined || elem === null)
        return null;

    return elem;
}