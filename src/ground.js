class Ground {

    constructor() {
        this.thickness = 20;
        this.body = Bodies.rectangle(width / 2, height * 0.75, width, this.thickness, { isStatic: true, friction: 0, restitution: 0 });
        World.add(engine.world, [this.body]);
    }


    show(pg) {
        //stroke(255);
        //line(70, this.body.position.y - this.thickness / 2, width - 70, this.body.position.y - this.thickness / 2);

        let c = color(255, 255, 255);
        for (let i = 0; i < width - 140; i++) {
            c.setAlpha(i);
            if (i > width - 280) {
                c.setAlpha(width - 140 - i);
            }
            pg.stroke(c);
            pg.fill(c);
            pg.ellipse(i + 70, 0, 1, 1);
        }
    }

}