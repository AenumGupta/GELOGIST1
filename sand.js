class Sand{
    constructor(x,y){
 
        var options={

            restitution:0.75,
            friction:5,
            density:1
        }

        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
        this.radius=10;
    }

    display(){
        strokeWeight(3);
        stroke ("yellow");
        fill ("red");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10);
    }
}