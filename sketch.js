var car1,car2,car3,car4, wall1,wall2,wall3,wall4;
var speed,weight;
var border1,border2,border3;
var deformation;

function setup() {
  createCanvas(1600,900);


  speed = random(55,255);
  weight = random(400,2000);
 car1 =  createSprite(50, 100, 25, 25);
 car1.shapeColor = 'white';


 car1.lifetime = 1590;

 car2 =  createSprite(50, 315, 25, 25);
 car2.shapeColor = 'white';
 
 car2.lifetime = 1590;

 car3 =  createSprite(50, 535, 25, 25);
 car3.shapeColor = 'white';
 
 car3.lifetime = 1590;

 car4 =  createSprite(50, 755, 25, 25);
 car4.shapeColor = 'white'; 
 car4.lifetime = 1590;


wall1 = createSprite(1500,95,20,height/6);
wall1.shapeColor = 'pink';
wall2 = createSprite(1500,315,20,height/6);
wall2.shapeColor = 'pink';
wall3 = createSprite(1500,535,20,height/6);
wall3.shapeColor = 'pink';
wall4 = createSprite(1500,755,20,height/6);
wall4.shapeColor = 'pink';


 border1 = createSprite(800,200,1600,10)
 border1.shapeColor = 'yellow';
 border2 = createSprite(800,425,1600,10);
 border2.shapeColor = 'yellow';
 border3 = createSprite(800,650,1600,10);
 border3.shapeColor = 'yellow';



}

function draw() {
  background('black');  

  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;



  var deformation = 0.5*weight*speed*speed/22500
  if(wall1.x-car1.x < (car1.width+wall1.width)/2){
    car1.velocityX= 0;
    car1.x = 1480;
    

    if(deformation > 180){
      car1.shapeColor = color(255,0,0);
    }
    if(deformation <180 && deformation > 100){
      car1.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car1.shapeColor = color(0,255,0);
    }
    
    
  }

  if(wall2.x-car2.x < (car2.width+wall2.width)/2){
    car2.velocityX= 0;
    car2.x = 1480;
    if(deformation > 180){
      car2.shapeColor = color(255,0,0);
    }
    if(deformation <180 && deformation > 100){
      car2.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car2.shapeColor = color(0,255,0);
    }
    
    
  }

  if(wall3.x-car3.x < (car3.width+wall3.width)/2){
    car3.velocityX= 0;
    car3.x = 1480;
    

    if(deformation > 180){
      car3.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car3.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car3.shapeColor = color(0,255,0);
    }
    
    
  }

  if(wall4.x-car4.x < (car4.width+wall4.width)/2){
    car4.velocityX= 0;
    car4.x = 1480;
    

    if(deformation > 180){
      car4.shapeColor = color(255,0,0);
    }
    if(deformation <180 && deformation > 100){
      car4.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car4.shapeColor = color(0,255,0);
    }
    
    
  }


   drawSprites();
}
