let x = 200;
let y = 200;
let fr = 10;
let blob;
let s;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fr);
  blob = new blobOne();
  
  imageMode(CENTER);
 
  loadImage('bg1.jpg', img => {
    image(img, width/2,height/2,600,600);
  });
  


  background(0);

  colorMode(RGB);
   
  

}

function draw() {
  

// decoration
  
  push();
  noFill();
  for(let i = 0; i<150;i+=10){
    for (let j = 0; j<150;j+=10){
      for(let k = 50;k>0;k-=10){
        if(k===20){
          fill(170, 127, 245);
        }else if (k===50){
          fill(2, 150, 2);
        }else{
         let from = color(255, 212, 184);
        let to = color(232, 93, 0);
        inter=lerpColor(from,to,k/50);
        fill(inter);    
        }

        ellipse(10*i,10*j,k*(i+j)/80,k);
      }
    }
  }
  pop();
  
    
  push();
  noStroke();
  fill(random(255));
  rect(random(width),random(height),random(10),random(10));
  pop();
  
  //sound-reactive stuffs

  blob.display();
  blob.move();

  for (let d = 0; d<200; d+=10){
    push();
    fill(28, 125, 255,10);
    arc(x+450,y+150,x+random(150)+random(d),y+random(150)+random(d),0,random(3*PI/2,7*PI/4),PIE);
    pop();
  }

  for (let d = 0; d<100; d+=10){
    push();
    strokeWeight(random(2));
    fill(247, 215, 69,15);
    ellipse(x+100,y+400,400+random(d),20+sin(d));
    pop();
  }



  for (let d = 100;d<400;d+=10){
    push();
    strokeWeight(random(3));
    fill(163, 128, 0,50);
    ellipse(x+850,y+150,50+sin(d),250+random(d));
    pop();
  }

  push();
  fill(0);
  ellipse(x+850,y+150,50+sin(100),250+random(100));
  pop();

  
  push();
  
  textSize(24);
  textStyle(BOLDITALIC);
  for(let i = 0;i<10;i++){
    let from = color(225);
    let to = color(25);
    let between = lerpColor(from,to,random(i/10));
    stroke(0);
    fill(between);
    textFont('Courier');
    textSize(18/(0.5*i));
    text("Humans are just apes which usually \n don't throw their own feces",width/10+random(i-1,20*tan(random(i))+1),height/4+50*i);
  }
  
  pop();
}

class blobOne {
  constructor (){
    this.stroke=color(0);
    this.sw= 1;
    this.fill=color(12, 71, 150,30);
    this.centerCol = color(255);
    this.size=s;
    this.x=x;
    this.y=y;
    this.speed=5;
  }

  display() {

    for(s = 0; s<200;s+=10){
      stroke(this.stroke);
      push();
      strokeWeight(this.sw);
      fill(this.fill);
      ellipse(this.x,this.y,random(s),random(s));
      pop();
      push();
      fill(150);
      text('T  r \n y t \n o p \n ut m    e s\n o\n m\n ewh\n er \ne e    ls  \ne',this.x,this.y);
      push();
    }
    push();
    fill(this.centerCol);
    ellipse(this.x,this.y,random(10),random(10));
    pop();
  }

  move() {
    if(mouseIsPressed){
      this.x=mouseX;
      this.y=mouseY;
    }else{
      this.x+=this.speed;
      this.y+=this.speed;
    }
    
    if(this.x>width || this.x<0){
      this.speed*=-1;
    }
    
     if(this.y>height || this.y<0){
      this.speed*=-1;
    } 
  }
}
