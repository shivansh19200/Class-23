class Ground {
    constructor(x,y){
        var ground_options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,600,30, ground_options);
        this.width = 600;
        this.height = 30;
    
        World.add(world,this.body);
    }
    display(){
        push();
        var p = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(p.x, p.y, this.width,this.height);

        pop();
    }

}