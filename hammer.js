class Hammer{
    constructor(){

        var options={
            restitution:0.5,
            density:2,
            friction:1
        }
        this.body=Bodies.rectangle(100,100,100,20,options);
        World.add(world,this.body);
        this.width=100;
        this.height=20;
        
    }

    display(){
var pos=this.body.position;
pos.x=mouseX;
pos.y=mouseY;
push ()
translate (pos.x,pos.y);
fill ("red");
rectMode(CENTER);
rect(0,0,this.width,this.height)
pop ();
    }


}