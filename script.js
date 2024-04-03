
let heading = document.getElementById("title");
let button = document.getElementById("executeButton");
let outputElem = document.getElementById("outputText");
let inputElem = document.getElementById("myInput");
let backColor = document.getElementById("background");
let container = document.getElementById("mainContainer")

let elements = ["water", "earth", "air", "fire", "nothing"];
let bgColor = ["#8ecae6", "#bad0ae", "#fff1ca", "#cf6447", "#efefef"];


button.addEventListener("click", 
  function(){
    var userName = inputElem.value;
    generate(userName);
    restyle();
  }
);



function generate(incInput) {
  var randomIndex = Math.floor(Math.random() * elements.length);
  console.log(randomIndex);
  var selectedElement = elements[randomIndex];
  outputElem.innerText = incInput + ", you can bend " + selectedElement + ".";
  backColor.style.backgroundColor = bgColor[randomIndex];
}

function restyle() {
  var randR = Math.random() * 255;
  var randG = Math.random() * 255;
  var randB = Math.random() * 255;
  var randOutputColor = "rgb("+randR+","+randG+","+randB+")";

  var randNumBig = Math.floor(Math.random() * 50) + -50;
  var randNumSmall = Math.random() + 0.3;
  var randSpin = "rotate("+randNumBig+"deg)" + "scale("+randNumSmall+","+randNumSmall+")";
//I had to apply the rotate and scale on the same row or only one would work*

  // var randNumSmall = Math.random()*5;
  // var randGrow = "scale("+randNumSmall+","+randNumSmall+")";

  outputElem.style.color = randOutputColor;
  outputElem.style.transform = randSpin;
  // outputElem.style.transform = randGrow;
}
