document.addEventListener("DOMContentLoaded", Ready);

var image = new Image();
image.src = "images/Test/TestLight.png";
image.height = 100;
image.width = 100;

function Ready() {
    var canvas = document.getElementById("testAnimation");

    canvas.height = 400;
    canvas.width = 400;

    var sprite = {
        context: canvas.getContext("2d"),
        width: 400,
        height: 400,
        spriteSheet: image
    };

    sprite.context.drawImage(
        sprite.spriteSheet,
        0,
        0,
        sprite.width,
        sprite.height,
        0,
        0,
        sprite.width,
        sprite.height
    );
}