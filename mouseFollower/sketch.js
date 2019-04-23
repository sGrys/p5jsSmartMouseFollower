let craft;
function setup() {
  createCanvas(1200, 500);
 
  craft=new Vessel;
  
}

function draw() {
  background(220);
 
  craft.display();
  craft.arrowsMove();
  craft.moveTo(mouseX,mouseY);
  craft.bounceOffWalls();
  craft.aeroDrag();
 // craft.gravity();
  }


class Vessel{
constructor(){
  this.x = random(0,width);
    this.y = random(0,height);
  this.vx=0;
  this.vy=0;
  this.multiplierX=1;
  this.multiplierY=1;
}
  
 gravity()
  {
  this.vy+=0.05;
  }
  aeroDrag()
  {
    if(this.vx>0)
    {
       this.multiplierX=-1; 
      if(abs(mouseX-this.x)<25 && sqrt((mouseX-this.x)*(mouseX-this.x)+(mouseY-this.y)*(mouseY-this.y))<25)
      {
        this.multiplierX=-10; 
      }
    
    }
    else
    {
         this.multiplierX=1;
      if(abs(mouseX-this.x)<25&& sqrt((mouseX-this.x)*(mouseX-this.x)+(mouseY-this.y)*(mouseY-this.y))<25)
      {
        this.multiplierX=10; 
      }
   
    }
    if(this.vy>0)
    {
       this.multiplierY=-1; 
       if(abs(mouseY-this.y)<25&&sqrt((mouseX-this.x)*(mouseX-this.x)+(mouseY-this.y)*(mouseY-this.y))<25)
      {
        this.multiplierY=-10; 
      }
    
    }
    else
    {
      this.multiplierY=1;
       if(abs(mouseY-this.y)<25&& sqrt((mouseX-this.x)*(mouseX-this.x)+(mouseY-this.y)*(mouseY-this.y))<25)
      {
        this.multiplierY=10; 
      }
      
    }
   this.vx=this.vx+(this.multiplierX*this.vx*this.vx*0.01); 
   this.vy=this.vy+(this.multiplierY*this.vy*this.vy*0.01);
  }
  bounceOffWalls()
  {
  if(this.x>width  || this.x<0)
  {
    this.vx=-this.vx;
  }
    if(this.y>height  || this.y<0)
  {
    this.vy=-this.vy;
  }
  }
  moveTo(targetX,targetY)
  {
  
  this.vx=this.vx+(targetX-this.x)/1000;
  this.vy=this.vy+(targetY-this.y)/1000;
  }
  arrowsMove()
  {
   
    if (keyIsDown(LEFT_ARROW)) {
    this.vx -= 0.1;
  }

  if (keyIsDown(RIGHT_ARROW)) {
   this. vx += 0.1;
  }

  if (keyIsDown(UP_ARROW)) {
    this.vy -= 0.1;
  }

  if (keyIsDown(DOWN_ARROW)) {
   this. vy += 0.1;
  }
  this.x+=this.vx;
  this.y+=this.vy;
    
  }
display()
  {
     background(0,25,14);
   ellipse(this.x,this.y,10,10); 
   
  }
 
}