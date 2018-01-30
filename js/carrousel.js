var images = ["lianes", "fougere", "automne", "vallee", "banc", "fleur", "grappes", "mauve", "marches", "piques"];
var domImages = document.getElementById("images");
var largImg = 307; // images de 267px, marges droite et gauche de 20px

for (var i=0; i < images.length; i++)
{
  console.log("<img src=\'img/_" + images[i] + ".jpg\' alt=\'" + images[i] + "\'>");
  domImages.innerHTML += "<img src=\'img/_" + images[i] + ".jpg\' alt=\'" + images[i] + "\'>";
}

var domLeft = document.getElementById("left");
var domRight = document.getElementById("right");

domLeft.addEventListener('click', function() { move(1); });
domRight.addEventListener('click', function() { move(-1); });

function move(dir) {
    var a = domImages.offsetLeft;
    domLeft.disabled = true;
    domRight.disabled = true;
    setTimeout(function(){domRight.disabled = false;}, 1000);
    setTimeout(function(){domLeft.disabled = false;}, 1000);
    if (((a > -((images.length-1) * largImg ) ) && (dir == -1)) || ((dir == 1) && (a < -largImg))) {
        a += largImg * dir;
        domImages.style.left = a + "px";
    }
}
