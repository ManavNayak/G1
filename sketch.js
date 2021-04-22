var brand, brandImg, logo, logoImg, home, about, service, store, sup, c, cImg;

var gameState = "HOME";

function preload(){

   brandImg = loadImage("brand.png");
   logoImg = loadImage("logo.jpg");
   cImg = loadImage("c.png");

}

function setup() {
  createCanvas(2560, 2000);

  brand = createSprite(1320, 1200, 100, 100);
  brand.addAnimation("brand", brandImg);
  brand.scale = 5.25;

  logo = createSprite(130, 125, 100, 100);
  logo.addAnimation("logo", logoImg);
  logo.scale = 2;

  c = createSprite(130, 1900, 100, 100);
  c.addAnimation("c", cImg);
  c.scale = 0.75;

  home = createButton("Home");
  home.position(430, 90);
  home.size(250,100)
  home.style("font-size","55px");
  home.style("background-color","#000000")
  home.style("color","#ffffff");

  about = createButton("About Us");
  about.position(830, 90);
  about.size(270,100)
  about.style("font-size","50px");
  about.style("background-color","#000000")
  about.style("color","#ffffff");
  
  service = createButton("Service");
  service.position(1230, 90);
  service.size(250,100)
  service.style("font-size","52px");
  service.style("background-color","#000000")
  service.style("color","#ffffff");

  store = createButton("Store");
  store.position(1630, 90);
  store.size(240,100)
  store.style("font-size","55px");
  store.style("background-color","#000000")
  store.style("color","#ffffff");

  sup = createButton("Support");
  sup.position(2030, 90);
  sup.size(260,100)
  sup.style("font-size","50px");
  sup.style("background-color","#000000")
  sup.style("color","#ffffff");

}

function draw() {
  background("white");

  textSize(80);
  fill("black")
  stroke(5);
  text("Copyright 2021" , 230, 1920);

   if(gameState === "HOME"){
     
      brand.visible = true;

   }

   console.log(gameState);
  
   drawSprites();
}