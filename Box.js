class Box{
    constructor(x,y,w,h){

var options={
    restitution:0.6,
    friction:1,
    density:0.04,
}

this.x=x;
this.y=y;
this.w=w;
this.h=h;

this.body=Bodies.rectangle(x,y,w,h,options);

World.add(world,this.body);

    }

    display(){

        rectMode(CENTER);
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rect(0,0,this.w,this.h);
        pop();
       

    }
    
}