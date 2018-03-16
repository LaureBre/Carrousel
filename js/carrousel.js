var images = ["lianes", "neptune", "tasse", "anneau", "fougere", "automne", "vallee", "banc", "fleur", "grappes", "mauve", "marches", "piques"];
var domImages = document.getElementById("images");
var domConteneur = document.getElementById('conteneur');
// var largImg = 307; // images de 267px, marges droite et gauche de 20px
var compteur = 0;
for (var i=0; i < images.length; i++)
{
  domImages.innerHTML += "<img src=\'img/_" + images[i] + ".jpg\' alt=\'" + images[i] + "\'>";
}

var domLeft = document.getElementById("left");
var domRight = document.getElementById("right");

domLeft.addEventListener('click', function() { move(1); });
domRight.addEventListener('click', function() { move(-1); });

function move(dir) {
    var a = domImages.offsetLeft;
    if (((compteur < images.length-1) && (dir == -1)) || ((dir == 1) && (compteur > 0))) {
        domLeft.disabled = true;
        domRight.disabled = true;
        setTimeout(function(){domRight.disabled = false;}, 1000);
        setTimeout(function(){domLeft.disabled = false;}, 1000);
        // var largImg = domImages.childNodes[compteur].width + 40;
        compteur -= dir;
        var largImgSuiv = domImages.childNodes[compteur].width + 40;
        a += largImgSuiv * dir;
        domImages.style.left = a + "px";
        domConteneur.style.width = largImg + "px";
    }
}
