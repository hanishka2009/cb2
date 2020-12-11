class dustbin {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:3
            
        }
       this.body= Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
       this.image=loadImage("images/dustbingreen.png")
    }
    display(){
        var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y,200,200)
    }
}