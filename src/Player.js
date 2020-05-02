class Player {

    constructor() {
        this.body = Bodies.rectangle(width / 3.5, 400, 40, 40, { friction: 1, frictionAir: 0, restitution: 0 });
        World.add(engine.world, [this.body]);

        this.attempts = 0;
        this.score = 0;
        this.totalScore = 0;
        this.highScore = 0;
        this.deathY = 0;
    }

    show() {
        push();
        strokeWeight(2);
        stroke(20);
        fill(205, 80, 14);
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        if (!this.isGrounded()) {
            rotate(frameCount / 10);
        }
        rect(0, 0, 40, 40);

        pop();

        if (!lowDetailModeOn) {
            let c1 = color(205, 80, 14);
            let c2 = color(242, 117, 34);

            noStroke();
            for (let i = 35; i >= 0; i--) {
                let inter = map(i, 35, 0, 0, 1);
                let c = lerpColor(c1, c2, inter);
                fill(c);
                ellipseMode(CENTER);
                ellipse(this.body.position.x, this.body.position.y, i);
            }
        }

        Matter.Body.setPosition(this.body, Matter.Vector.create(width / 3.5, this.body.position.y));
        Matter.Body.setAngularVelocity(this.body, 0);
        this.score++;
    }


    isGrounded() {
        let collided = Matter.SAT.collides(player.body, ground.body);
        if (collided.collided) return true;
        let isOnBlock = handler.isOnBlock(this);
        if (isOnBlock) return true;
        return false;
    }
}