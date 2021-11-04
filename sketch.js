var jogador,aleatorios,aleatorios1;

var grupoo, grupooo;

var pinguim,passaro,ornitorrinco;

var placar = 0;

function preload() {
  pinguim = loadImage("obstacle1.png");
  passaro = loadImage("cloud.png");
  ornitorrinco = loadImage("trex1.png");
}

function setup(){
  createCanvas(400,400);

  
  jogador = createSprite(30,380,50,10);
  jogador.shapeColor = "Green"
  jogador.addImage(ornitorrinco);
  jogador.scale = 0.5;
  jogador.debug = true;
  
  grupoo = new Group();
  grupooo = new Group();

}



function draw(){
   background(255);
    
    
  text("Pontuação:  " +placar,250,20) 
  
  if (keyDown("right")) {
    jogador.x = jogador.x +5.7
      
}
  
  if (keyDown("left")) {
    jogador.x = jogador.x -5.7
      
}
 
  if(grupoo.isTouching(jogador)) {
    placar = placar +3;
    grupoo.destroyEach();
  }
  
  if(grupooo.isTouching(jogador)) {
    placar = placar -1;
    grupooo.destroyEach();
  }
  
  
  randomm();
  randommm();
  drawSprites();
  
}

function randomm() {
    
  if(frameCount%50 == 0) {
    aleatorios = createSprite(random(15,385),0,30,30)
    aleatorios.velocityY = 7;
    aleatorios.shapeColor = "Blue"
    aleatorios.lifetime = 100; 
    grupoo.add(aleatorios);
    aleatorios.addImage(passaro);
    aleatorios.scale = 0.65
  }
    
}

function randommm () {
   if(frameCount%70 == 0) {
    aleatorios1 = createSprite(random(15,385),0,30,30)
    aleatorios1.velocityY = 7;
    aleatorios1.shapeColor = "Red"
    aleatorios1.lifetime = 100;
    aleatorios1.addImage(pinguim);
    grupooo.add(aleatorios1);
    aleatorios1.scale = 0.6;
   }
  
  
}
   
