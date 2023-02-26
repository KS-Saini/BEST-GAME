let a;
let b;
let canvas;

function setup() {
    createCanvas(windowWidth, windowHeight);
    a = createSprite(300, 300, 20, 20);
    a.shapeColor = 'red';
    a.velocityX = 3;
    a.velocityY = -5;
    button = createButton('h2');
}

function draw() {
    background(0);
    button.html('increase speed');
    button.class('heading');
    // button.position(250, 50);
    button.mousePressed(() => {
        a.velocityX = 11;
        a.velocityY = -8;
    });
    edges = createEdgeSprites();
    a.bounceOff(edges);
    drawSprites();
}
