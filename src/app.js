let backgroundC1;
let backgroundC2;

let oldC1;
let oldC2;

let newBackgroundC;

let textC;

let font;

let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let engine;


let player;
let ground;
let spike;
let handler;

let lines = [];
let firstAnimationFrame;
let firstFadeAnimationFrame;
let pg;
let pgLines;

p5.disableFriendlyErrors = true;

function setup() {
    let cnv = createCanvas(940, 580);
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 9;
    cnv.parent("canvas");

    for (let k in backgroundColors) {
        let c = backgroundColors[k];
        c.c1 = color(c.c1[0], c.c1[1], c.c1[2]);
        c.c2 = color(c.c2[0], c.c2[1], c.c2[2]);
    }
    backgroundC1 = backgroundColors[0].c1;
    backgroundC2 = backgroundColors[0].c2;
    console.log(backgroundC2);
    textC = color(255);

    //font = loadFont("https://Fonts.GStatic.com/s/baloo/v4/6xKhdSpJJ92I9MWPCm4.woff2");

    pg = createGraphics(940, 1);
    pgLines = createGraphics(1000, 1000);

    engine = Engine.create();
    player = new Player();
    ground = new Ground();
    handler = new ObjectHandler();

    ground.show(pg);

    Engine.run(engine);
    engine.world.gravity.y = 2.42;

    frameRate(60);
    let rawData = randomize(100);
    handler.loadData(rawData);

    populateLines();
}

function draw() {
    setGradient(backgroundC1, backgroundC2);

    textFont("Audiowide");
    textSize(48);
    textC.setAlpha(255);
    stroke(textC);
    fill(textC);
    strokeWeight(0.2);
    textAlign(LEFT);
    text("Attempt " + player.attempts, width / 9, height / 9);
    textAlign(LEFT);
    text("Score " + (frameCount > firstAnimationFrame && frameCount < firstAnimationFrame + 60 ? player.totalScore : player.score), width * 3 / 5, height / 9);

    if (frameCount % 500 == 0) {
        firstFadeAnimationFrame = frameCount;
        newBackgroundC = backgroundColors[Math.floor(Math.random() * 5)];
        
        oldC1 = {
            levels: [backgroundC1.levels[0], backgroundC1.levels[1], backgroundC1.levels[2]]
        };
        oldC2 = {
            levels: [backgroundC2.levels[0], backgroundC2.levels[1], backgroundC2.levels[2]]
        };
    }
    if (frameCount > firstFadeAnimationFrame && frameCount <= firstFadeAnimationFrame + 60) {
        fadeColors(newBackgroundC, oldC1, oldC2);
    }

    if (frameCount > firstAnimationFrame && frameCount < firstAnimationFrame + 60) {
        handler.showDeathObjects();
        playExplosionAnimation(lines, pgLines);
        image(pgLines, 0, 0);
    }
    else {
        player.show();
        handler.update();
        handler.checkCollisions(player);

        if (frameRate() < 50) {
            console.log(frameRate());
        }

        if (keyIsDown(32)) {
            jump();
        }
    }
    image(pg, 0, 425);
}

function setGradient(c1, c2) {
    noFill();
    for (let i = 0; i <= height; i++) {
        let inter = map(i, 0, height, 0, 1);
        let c = lerpColor(c1, c2, inter);
        strokeWeight(1);
        stroke(c);
        line(0, i, width, i);
    }
}

function jump() {
    let collided = Matter.SAT.collides(player.body, ground.body);
    if (collided.collided || handler.isOnBlock(player)) {
        Matter.Body.setVelocity(player.body, Matter.Vector.create(0, 0));
        Matter.Body.applyForce(player.body, player.body.position, Matter.Vector.create(0, -0.06));
    }
}

function playExplosionAnimation(particles, pgg) {
    let c1 = color((frameCount - firstAnimationFrame) / 2);
    //pgg.background(c1);
    pgg.clear();
    for (let i = 0; i < particles.length; i++) {
        let difference = frameCount - firstAnimationFrame;
        let angle = particles[i].angle;
        let mag = particles[i].mag;

        let difx = difference * cos(angle) * 6;
        let dify = difference * sin(angle) * 6;

        let x = mag * cos(angle) + difx;
        let y = mag * sin(angle) + dify;

        let c = color(205, 80, 14);

        let alpha = map(difference, 0, 20, 255, 0);
        c.setAlpha(alpha);

        pgg.push();
        pgg.strokeWeight(3);
        pgg.stroke(c);
        pgg.translate(player.body.position.x, player.deathY);
        pgg.line(difx, dify, x, y);
        pgg.pop();
    }
}

function populateLines() {
    for (let i = 0; i < 100; i++) {
        let angle = Math.random() * 2 * PI;
        let mag = Math.random() * 10;

        let obj = {
            angle: angle,
            mag: mag
        };

        lines[i] = obj;
    }
}

function fadeColors(c, originalC1, originalC2) {
    let newRed1 = (c.c1.levels[0] - originalC1.levels[0]) / 60 * (frameCount - firstFadeAnimationFrame) + originalC1.levels[0];
    let newGreen1 = (c.c1.levels[1] - originalC1.levels[1]) / 60 * (frameCount - firstFadeAnimationFrame) + originalC1.levels[1];
    let newBlue1 = (c.c1.levels[2] - originalC1.levels[2]) / 60 * (frameCount - firstFadeAnimationFrame) + originalC1.levels[2];

    let newRed2 = (c.c2.levels[0] - originalC2.levels[0]) / 60 * (frameCount - firstFadeAnimationFrame) + originalC2.levels[0];
    let newGreen2 = (c.c2.levels[1] - originalC2.levels[1]) / 60 * (frameCount - firstFadeAnimationFrame) + originalC2.levels[1];
    let newBlue2 = (c.c2.levels[2] - originalC2.levels[2]) / 60 * (frameCount - firstFadeAnimationFrame) + originalC2.levels[2];

    backgroundC1 = color(newRed1, newGreen1, newBlue1);
    backgroundC2 = color(newRed2, newGreen2, newBlue2);
}