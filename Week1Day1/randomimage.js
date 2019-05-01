
function getRandomSrc()
{
    var imageURLs =
    [
        "https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        "https://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        "https://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
    ];

    var randomIndex = (Math.random() * 1000) % imageURLs.length;

    return imageURLs[parseInt(randomIndex.toString())];
}

document.querySelector("#Change").addEventListener("click", (event) =>
{
    document.querySelector("#RandomImage").src = getRandomSrc();
});