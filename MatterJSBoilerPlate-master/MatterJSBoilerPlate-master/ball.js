class Ball{
    constructor(x,y,r){
        var options={
    isStatic:false,
    restitution:0.3,
     friction:0.5,
     density:1.2    
        }

        this.r=rthis.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        World.add(world,this.body)
    }

    display(){
     var ballposition=this.body.position;

     Push()
     translate(ballposition.x,paperposition.y);
     rectMode(CENTER)
     Fill ("yellow")
     ellipse(0,0,this.r,this.r)
     Pop()
    }
}