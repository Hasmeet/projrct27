class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.Suspender = Constraint.create(options);
        World.add(world, this.Suspender);
        }
        display(){
            var pointA= this.Suspender.bodyA.position;
            var pointB= this.Suspender.bodyB.position;

            
            strokeWeight (2)
            var b1X = pointA.x
            var b1Y = pointA.y
            
            var b2X = pointB.x+this.offsetX
            var b2Y = pointB.y+this.offsetY
            line (b1X,b1Y,b2X,b2Y);
        }
        
}