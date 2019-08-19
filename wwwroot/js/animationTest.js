document.addEventListener("DOMContentLoaded", Ready);

var animatedSprites = [];
var paused = false;

var image = new Image();
image.src = "images/Test/TestLight.png";

function Ready() {
    canvas = document.getElementById("testAnimation");
    canvas.width = image.width / 3;
	canvas.height = image.height;
	
	// Create sprite sheet
	coinImage = new Image();	
	
	// Create sprite
	coin = sprite({
		context: canvas.getContext("2d"),
		width: 3072,
        height: 1024,
        frameWidth: 3072 / 3,
		image: coinImage,
		numberOfFrames: 3,
		ticksPerFrame: 10
    });

    var testImage = new Image();
    testImage.src = "images/Test/coin-sprite-animation.png";

    var test = sprite({
        context: canvas.getContext("2d"),
		width: 1000,
        height: 100,
        frameWidth: 100,
		image: testImage,
		numberOfFrames: 10,
		ticksPerFrame: 5
    });
    
    coinImage.src = image.src;

    animatedSprites.push(coin);
    animatedSprites.push(test);

    GameLoop();
}

function GameLoop() {
    if(!paused) {
        window.requestAnimationFrame(GameLoop);
    }

    for(var i = 0; i < animatedSprites.length; i++) {
        animatedSprites[i].update();
    }
}

function sprite (options) {
				
    var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
        that.image = options.image;
        that.frameWidth = options.frameWidth;

    that.update = function () {

        tickCount += 1;
			
        if (tickCount > ticksPerFrame) {
        
            tickCount = 0;
            frameIndex++;
        }

        if (frameIndex >= numberOfFrames) {	
            frameIndex = 0;
        }

        this.render();
    };

    that.render = function () {
					
        that.context.clearRect(0, 0, that.width, that.height);

        that.context.drawImage(
            that.image,
            frameIndex * that.width / numberOfFrames,
            0,
            that.frameWidth,
            that.height,
            0,
            0,
            that.frameWidth,
            that.height);
    };

    return that;
}