class Box {
    constructor(x,y,width,height){
        var options = {
            restitution : 0.5,
            friction : 1,
            density : 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var p = this.body.position;
        push();
        translate(p.x, p.y);
        rotate(this.body.angle);
        
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);

        pop();
    }
}