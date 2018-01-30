var images = ["lianes", "fougere", "automne", "vallee", "banc", "fleur", "grappes", "mauve", "marches", "piques"];
var domImages = document.getElementById("images");
var largImg = 500;

for (var i=0; i < images.length; i++)
{
  console.log("<img src=\'img/_" + images[i] + ".jpg\' alt=\'" + images[i] + "\'>");
  domImages.innerHTML += "<img src=\'img/_" + images[i] + ".jpg\' alt=\'" + images[i] + "\'>";
}

var domLeft = document.getElementById("left");
var domRight = document.getElementById("right");

domLeft.addEventListener('mouseover', function() { move(1); }, false);
domRight.addEventListener('mouseover', function() { move(-1); }, false);
domLeft.addEventListener('click', function() { move(1); }, false);
domRight.addEventListener('click', function() { move(-1); }, false);

function move(dir) {
    var a = domImages.offsetLeft;
    if (((a > -(images.length * largImg) ) && (dir == -1)) || ((dir == 1) && (a < 0))) {
        a += largImg * dir;
        domImages.style.left = a + "px";
    }
}
