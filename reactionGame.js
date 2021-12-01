var click; var start; var reaction;

function circleGenerator() {
    var icon = document.getElementById("circle");

    var randomTime = (Math.random() * 6500);
    start=Date.now() + randomTime;
    setTimeout(changeColor(), randomTime);
}

document.getElementById("circle").onclick=function() {
    click=Date.now();
    reaction=(click - start)/1000;
    document.getElementById("reaction").innerHTML="HI aubrie" + reaction;
}

function changeColor() {
    document.getElementById("circle").style.backgroundColor="green";
}

function getTime() {
    click = Date.now();
}

    document.getElementById("reaction").innerHTML="HI aubrie" + reaction;
    this.style.background="blue";