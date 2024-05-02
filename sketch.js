let isActive = false;
let step = 0.01;
let amt = 0;
let randomFace = 0;
let finish = false;

let myFont;

function preload() {
  myFont = loadFont('assets/SpaceGrotesk-Medium.ttf');
}

let angleVector;
let angleTarget;
let anglePos;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(myFont);
  textSize(20);
  textAlign(CENTER, CENTER)
  
  angleVector = createVector(0, 0);
  angleTarget = createVector(0, 0);
  anglePos = createVector(0, 0);
}
function draw() {
  background(20, 20, 20);
  if (isActive == true){
    if(amt > 0.98){
      finish = true;
    }
    if(amt < 1){
      anglePos = p5.Vector.lerp(angleVector, angleTarget, amt);
      amt += step;
      step *= 0.99;
    }
    else{
      isActive = false;
    }
  }
 
// this section pops up a question as a result of the spin  
  
//   push();
//   fill(255);
//   textSize(40);
//   translate (0, 250, 0);
//   if (finish == true){
//    if (randomFace == 0){
//      text('What was little ____ like in kindergarten?', 0, 0);
//    }
//      if (randomFace == 1){
//      text('How do you see yourself as a leader?', 0, 0);
//    }
//      if (randomFace == 2){
//      text('Who lent you a helping hand during a challenging time?', 0, 0);
//    }
//      if (randomFace == 3){
//      text('Who or what inspired you to study STEAM?', 0, 0);
//    }
//      if (randomFace == 4){
//      text('In an ideal world women are ___________ .', 0, 0);
//    }
//      if (randomFace == 5){
//      text('What are 3 things you see as the markers of success? Why?', 0, 0);
//    }
//   }
//   pop();
  
  
  //right dice
  push();
  translate(170, 0);
  rotateX(radians(anglePos.x));
  rotateY(radians(anglePos.y));
  pointLight(95, 62, 255, -250, 800);
   pointLight(38, 37, 221, -700, -200);
   specularMaterial(0, 0, 255);
  box(200);
 
 
  
  //front face
  push();
  translate(0, 0, 101); //51 because I'm just adding one more pixel to half the size of my box
  fill(255);
  text("Sexuality",0,0)
  pop();
  
  //right face
  push();
  translate(101, 0, 0);
  rotateY(PI/2)
  fill(255);
  text("Relationships",0,0)
  pop();
  
  //left face
  push();
  translate(-101, 0, 0);
  rotateY(-PI/2)
  fill(255);
  text("Identity",0,0)
  pop();
  
  //back face
  push();
  translate(0, 0, -101);
  rotateY(-PI)
  fill(255);
  text("Sex & Kink",0,0)
  pop();
  
  //top face
  push();
  translate(0, -101, 0);
  rotateX(PI/2)
  fill(255);
  text("Wild",0,0)
  pop();
  
  //botton face
  push();
  translate(0, 101, 0);
  rotateX(-PI/2)
  fill(255);
  text("Pleasure",0,0)
  pop();
  
   pop();
  
  
  //left Dice
  push();
  translate(-170, 0);
   rotateY(-PI)
 fill(90);
   pointLight(38, 37, 221, -200, -200);
   pointLight(130, 95, 255, 800, 800);
  specularMaterial(0, 0, 255);
  rotateX(radians(anglePos.x));
  rotateY(radians(anglePos.y));
  box(200);
 
  
  //front face
  push();
  translate(0, 0, 101); //51 because I'm just adding one more pixel to half the size of my box
  fill(255);
  text("ASK",0,0)
  pop();
  
  //right face
  push();
  translate(101, 0, 0);
  rotateY(PI/2)
  fill(255);
  text("SHARE",0,0)
  pop();
  
  //left face
  push();
  translate(-101, 0, 0);
  rotateY(-PI/2)
  fill(255);
  text("ASK",0,0)
  pop();
  
  //back face
  push();
  translate(0, 0, -101);
  rotateY(-PI)
  fill(255);
  text("SHARE",0,0)
  pop();
  
  //top face
  push();
  translate(0, -101, 0);
  rotateX(PI/2)
  fill(255);
  text("ASK",0,0)
  pop();
  
  //botton face
  push();
  translate(0, 101, 0);
  rotateX(-PI/2)
  fill(255);
  text("SHARE",0,0)
  pop();
  
   pop();
  
}





function mouseReleased(){
  angleVector.x = 0;
  angleVector.y = 0;
  amt = 0;
  step = 0.01;
  
  isActive = true;
  
  randomFace = round(random(0,5));
  console.log(randomFace);
  
  if(randomFace == 0){ //Front face
    angleTarget.x = 0+360*2; //360*3 its to make some extra spins, the 3 represents how many spins we'll excecute
    angleTarget.y = 0+360*2;
    
    console.log("Front Face");
  }
  
  if(randomFace == 1){ //Left face
    angleTarget.x = 0+360*2;
    angleTarget.y = 90+360*1;
    console.log("Left Face");
  }
  
  if(randomFace == 2){ //Right face
    angleTarget.x = 0+360*2;
    angleTarget.y = 270+360*1;
    console.log("Right Face");
  }
  
  if(randomFace == 3){ //Back face
    angleTarget.x = 0+360*2;
    angleTarget.y = 180+360*2;
    console.log("Back Face");
  }
  
  if(randomFace == 4){ //Top face
    angleTarget.x = 270+360*2;
    angleTarget.y = 0+360*1;
    console.log("Top Face");
  }
  
  if(randomFace == 5){ //Bottom face
    angleTarget.x = 90+360*2;
    angleTarget.y = 0+360*1;
    console.log("Bottom Face");
  }
}
