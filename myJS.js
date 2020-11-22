class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.ground=Bodies.rectangle(width/2,height-30,width,20,options);
        World.add(world,this.ground);
    }
    display(){
        var pos=this.ground.position;
        fill("black");
        rectMode(CENTER);
        rect(pos.x,pos.y,width,20);
    }
}

class Constrain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:10
        }
        //this.bodyA=bodyA;
        this.pointB=pointB;
        this.constrain = Matter.Constraint.create(options);

        World.add(world, this.constrain);
    }

    fly(){
        this.constrain.bodyA=null;
    }

    attach(body){
        this.constrain.bodyA=body;
    }

    display(){
        console.log(this.constrain.bodyA.position.x);
        if(this.constrain.bodyA){
            var a = this.constrain.bodyA.position;
            var b = this.pointB;
            strokeWeight(1);
            line(a.x, a.y, b.x, b.y);
        }
    }
    
}

class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("images/stone.png");
        this.stone=Bodies.circle(x,y,r,options);
        World.add(world,this.stone);
    }
    display(){
        var pos=this.stone.position;
        push();
        translate(pos.x,pos.y);
        fill("black");
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}

class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.width=width;
        this.height=height;
        this.image=loadImage("images/mango.png");
        this.mango=Bodies.circle(x,y,r,options);
        World.add(world,this.mango);
    }
    display(){
        var pos=this.mango.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r*2,this.r*2);
    }
}