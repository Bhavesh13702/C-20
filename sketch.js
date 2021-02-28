var a,b;




function setup() {

  createCanvas(800,400);
  
  a = createSprite(400, 200, 50, 50);
  b = createSprite(100,100,50,50);
  a.shapeColor = "green";
  b.shapeColor = "green";

}

function draw() {
  background(255,255,255); 
  a.x = mouseX;
  a.y = mouseY;
  console.log(a.x-b.x);
  if(a.x-b.x < 50 && b.x-a.x< 50){
    a.shapeColor = "red";
    b.shapeColor = "red";
  }
  else{
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
    
  
  drawSprites();
}