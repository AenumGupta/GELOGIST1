class Iron{
    constructor(x,y,width,height){

        var options={
            restitution:0.8,
            density:3,
            friction:2,
            mass:70000
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        
    }

    display(){
var pos=this.body.position;
push ()
translate (pos.x,pos.y);
strokeWeight (4);
stroke ("purple");
fill ("pink");
rectMode(CENTER);
rect(0,0,this.width,this.height)
pop ();
    }


}

