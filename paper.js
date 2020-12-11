class paper{
    constructor(x,y,r){
        var options={
            isStactic:true,
            restitution:0.3,
            friction:0.5,
            density:1
       }
      
        this.r=r
	

  
       this.image=loadImage("images/PAPER.png")
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body) 
    }
    display(){
        var paperpos=this.body.position;
        push()
       
        translate(0,0)
        ellipseMode(RADIUS);
        //strokeWeight(3)
        //fill(255,0,255)
        //ellipse(0,0,this.r);
       image(this.image,this.body.position.x,this.body.position.y,50,40)
               pop()   
    }
}