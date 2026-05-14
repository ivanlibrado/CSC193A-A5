function makeBigger() {
    document.getElementById("text").style.fontSize = "24pt";
}

function fancify() {
    var text = document.getElementById("text");

    if (document.getElementById("fancy").checked) {
        alert("FancyShmancy selected");
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        alert("BoringBetty selected");
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function moo() {
    var text = document.getElementById("text");
    var words = text.value.toUpperCase().split(".");
    text.value = words.join("-Moo.");
}
